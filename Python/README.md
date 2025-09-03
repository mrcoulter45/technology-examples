# Python

Print current call stack from a method
```
import traceback

def f():
    g()

def g():
    for line in traceback.format_stack():
        print(line.strip())

f()

# Prints:
# File "so-stack.py", line 10, in <module>
#     f()
# File "so-stack.py", line 4, in f
#     g()
# File "so-stack.py", line 7, in g
#     for line in traceback.format_stack():
```

## Notes
- you can use `#!/usr/bin/env python` at the top of python file to make the file executable. Run chmod on the .py file to make it executable, then you can run the script like `./<file>.py`
- you can create your own exceptions with the `raise` keyword
- refer to base class functions inside of derived class definition with super(), Eg.
```
class DerivedClass(BaseClass):
    def __init__():
        super().__init__(x)
        // other stuff...
```
- single vs double quotes:
    - Python documentation (https://docs.python.org/2.0/ref/strings.html):
        - String literals can be enclosed in matching single quotes (') or double quotes ("). They can also be enclosed in matching groups of three single or double quotes (these are generally referred to as triple-quoted strings). The backslash (`\`) character is used to escape characters that otherwise have a special meaning, such as newline, backslash itself, or the quote character. String literals may optionally be prefixed with a letter `r` or `R`; such strings are called raw strings and use different rules for backslash escape sequences.
        - In triple-quoted strings, unescaped newlines and quotes are allowed (and are retained), except that three unescaped quotes in a row terminate the string. (A "quote" is the character used to open the string, i.e. either ' or ".)
        - Unless an `r` or `R` prefix is present, escape sequences in strings are interpreted according to rules similar to those used by Standard C. The recognized escape sequences are:
        - Good practice: use double quotes around strings that are used for interpolation or that are natural language messages, and single quotes for small symbol-like strings
- pdb - The Python Debugger: https://docs.python.org/3/library/pdb.html
- Difference between __sizeof__() and getsizeof() method – Python: https://www.geeksforgeeks.org/difference-between-__sizeof__-and-getsizeof-method-python/
- numpy.transpose: https://numpy.org/doc/stable/reference/generated/numpy.transpose.html


# 🐍 Pytest

Pytest is a widely used Python testing framework known for its **simplicity**, **scalability**, and **extensibility**. It supports everything from quick unit tests to large-scale end-to-end (E2E) suites, with a rich ecosystem of plugins and a highly customizable architecture.

This manual covers pytest’s **core building blocks**—fixtures, hooks, `conftest.py`—as well as lifecycle behavior, test discovery, configuration, command-line options, and advanced usage.

---

## 1. `conftest.py` Files

### What they are

* `conftest.py` is a **special filename** that pytest automatically discovers.
* Any **fixtures**, **hooks**, or **helpers** inside are available to all tests in the same directory and subdirectories.
* You **don’t import `conftest`** directly; pytest loads them during test collection.

### Why have one at the root

* **Global fixtures**: setup/teardown logic used across the entire test suite.
* **Global hooks**: modify how pytest collects or runs tests (`pytest_addoption`, `pytest_configure`, etc.).
* **Cross-cutting logic**: logging, reporting (Allure/JUnit), environment setup.

### Why also have `conftest.py` in subdirectories

* Pytest **walks upward through the directory tree** from each test to look for relevant `conftest.py`.
* Subdir `conftest.py` files allow **feature-specific fixtures and hooks** without polluting the entire project.
* Example: a `gui/conftest.py` could handle Electron/Playwright setup just for GUI tests.

### Benefits

* **Separation of concerns**: local fixtures for local tests.
* **Scoped sharing**: fixtures in `subdir/conftest.py` are auto-available in that subdir only.
* **Reduced conflicts**: global vs feature-specific logic stays clean.
* **Maintainability**: developers only see what’s relevant for their area.

---

## 2. Fixtures

### What they are

* Fixtures are pytest’s mechanism for **reusable setup and teardown**.
* Defined with `@pytest.fixture`, used by naming them as function arguments.

**Example:**

```python
import pytest

@pytest.fixture
def sample_data():
    return {"foo": 42, "bar": "hello"}

def test_example(sample_data):
    assert sample_data["foo"] == 42
```

### Features

* **Scopes**:

  * `function`: runs per test function.
  * `class`: runs once per test class.
  * `module`: runs once per test module.
  * `package`: runs once per package.
  * `session`: runs once per entire test session.
* **Autouse**: apply fixtures automatically to all tests without naming them.
* **Yield fixtures**: support teardown logic after the test completes:

  ```python
  @pytest.fixture
  def db():
      conn = connect()
      yield conn
      conn.close()
  ```
* **Parameterized fixtures**: run the same test with multiple fixture values:

  ```python
  @pytest.fixture(params=[1, 2, 3])
  def number(request):
      return request.param
  ```

---

## 3. Hooks

### What they are

* Hooks are **special functions pytest calls internally** at specific points.
* They let you **extend or customize** pytest behavior.
* Think of them as pytest’s “event system.”

### Common hooks

* `pytest_addoption`: define new CLI flags.
* `pytest_configure`: global initialization after options are parsed.
* `pytest_generate_tests`: dynamically parametrize tests.
* `pytest_collection_modifyitems`: filter, skip, or reorder tests.
* `pytest_runtest_setup` / `pytest_runtest_teardown`: before/after each test.
* `pytest_sessionfinish`: cleanup or reporting after all tests.

---

## 4. Key Hooks Explained

### `pytest_addoption`

* Add **custom command-line options**.
* Runs at startup.

**Example:**

```python
def pytest_addoption(parser):
    parser.addoption("--foo", action="store", default="bar", help="Custom option")
```

Run:

```bash
pytest --foo=baz
```

Use inside tests:

```python
def test_config(pytestconfig):
    assert pytestconfig.getoption("foo") == "baz"
```

---

### `pytest_configure`

* Runs **after parsing CLI options but before collecting tests**.
* Used for registering markers, initializing state, or configuring reporting.

**Example:**

```python
def pytest_configure(config):
    config.addinivalue_line("markers", "smoke: mark as smoke test")
```

---

### `pytest_generate_tests`

* **Dynamically parametrize tests** during collection.
* Expands one test into many concrete runs.

**Example:**

```python
def pytest_generate_tests(metafunc):
    if "browser" in metafunc.fixturenames:
        metafunc.parametrize("browser", ["chrome", "firefox", "safari"])
```

Test:

```python
def test_login(browser):
    assert login(browser)
```

→ runs three times.

---

## 5. Lifecycle & Resolution

### Order of operations

1. **Startup**: pytest loads config and `conftest.py`.

   * Calls `pytest_addoption`.
2. **Configure**:

   * Calls `pytest_configure`.
3. **Collect tests**: discover tests, call `pytest_generate_tests`.
4. **Run tests**:

   * Resolve fixtures.
   * Run setup.
   * Run test body.
   * Run teardown.
5. **Reporting**: finalize results.

   * Hooks like `pytest_sessionfinish` run.

### Fixture resolution

* Pytest searches:

  1. Local test module.
  2. Nearest `conftest.py`.
  3. Parent `conftest.py`, all the way up.
* Allows overrides and layered setup.

---

## 6. Lifecycle Diagram

```
┌───────────────┐
│ pytest start  │
└───────┬───────┘
        ▼
Parse CLI options → pytest_addoption
        ▼
Global init       → pytest_configure
        ▼
Collect tests     → pytest_generate_tests / pytest_collection_modifyitems
        ▼
Run each test:
  - resolve fixtures
  - run setup
  - run test
  - run teardown
        ▼
Reporting phase   → pytest_runtest_logreport / pytest_sessionfinish
```

---

## 7. Running Pytest

### Run all tests

```bash
pytest
```

### Run verbosely

```bash
pytest -v
```

### Stop on first failure

```bash
pytest -x
```

### Show print/log output

```bash
pytest -s
```

---

## 8. Running Specific Sets

### By directory

```bash
pytest tests/unit/
pytest tests/gui/
```

### By file

```bash
pytest tests/test_api.py
```

### By node (test function/class)

```bash
pytest tests/test_api.py::test_login
pytest tests/test_api.py::TestAuth::test_invalid_password
```

### By keyword expression

```bash
pytest -k "login"
pytest -k "login and not slow"
```

### By markers

Define:

```python
import pytest

@pytest.mark.slow
def test_big_data():
    ...
```

Run:

```bash
pytest -m slow
pytest -m "smoke and not slow"
```

---

## 9. Common Command-Line Options

* `-v` → verbose (show test names).
* `-q` → quiet (summary only).
* `-x` → stop after first failure.
* `--maxfail=N` → stop after N failures.
* `-s` → show live output.
* `--tb=short/long/none` → traceback verbosity.
* `-k <expr>` → filter by expression.
* `-m <marker>` → run by marker.
* `--disable-warnings` → hide warnings.
* `--pdb` → drop into debugger on failure.
* `--durations=N` → show slowest tests.
* `--lf` → rerun only last failed tests.
* `--ff` → run last failed first.
* `--collect-only` → show discovered tests without running them.
* `--cov=<pkg>` → coverage (requires `pytest-cov`).

---

## 10. Advanced Expert Tips

* **Test discovery**: pytest auto-detects `test_*.py` and `*_test.py`.
* **Custom markers**: register in `pytest.ini` to avoid warnings:

  ```ini
  [pytest]
  markers =
      smoke: quick health tests
      slow: long tests
  ```
* **Fixture debugging**: run `pytest --setup-show`.
* **Parallelization**: use `pytest-xdist`:

  ```bash
  pytest -n auto
  ```
* **Rerun flaky tests**: use `pytest-rerunfailures`.
* **Continuous runs**: `pytest --maxfail=1 --lf` speeds up dev loops.
* **Plugins**: ecosystem covers Django, Flask, asyncio, Selenium, Playwright, etc.
* **Configuration hierarchy**: defaults can live in `pytest.ini`, `tox.ini`, or `pyproject.toml`.

---

## ✅ Summary

* **Fixtures** → reusable setup/teardown.
* **Hooks** → event-based customization.
* **`conftest.py`** → where fixtures/hooks live.
* **Lifecycle** → options → configure → collect → run → report.
* **Running subsets** → by dir, file, node, keyword, marker.
* **Options** → `-v`, `-k`, `-m`, `-s`, `--lf`, `--cov`, etc.
* **Expert practices** → modular conftests, custom markers, plugins, parallelization.

---

📌 With this knowledge, you can design pytest suites that scale cleanly from **tiny unit tests** to **complex E2E frameworks**—and maintain them with confidence.

---

# Pytest cheat sheet

## Test Discovery

* Files: `test_*.py` or `*_test.py`
* Functions: `test_*`
* Classes: `Test*` (without `__init__`)

---

## Fixtures

```python
import pytest

@pytest.fixture
def db():
    conn = connect()
    yield conn    # test runs here
    conn.close()
```

* **Scopes**: `function`, `class`, `module`, `package`, `session`
* **Autouse**: run automatically (no need to name it in tests)
* **Parametrization**:

  ```python
  @pytest.fixture(params=[1, 2, 3])
  def number(request): return request.param
  ```

---

## `conftest.py`

* Auto-loaded, no imports needed
* Place global fixtures/hooks in root `conftest.py`
* Place feature-specific ones in subdir `conftest.py`

---

## Hooks

* **`pytest_addoption(parser)`**: add CLI options
* **`pytest_configure(config)`**: init global state, register markers
* **`pytest_generate_tests(metafunc)`**: dynamic parametrization
* **`pytest_collection_modifyitems(config, items)`**: reorder/skip tests
* **`pytest_sessionfinish(session)`**: finalize reporting

---

## Running Tests

* All tests:

  ```bash
  pytest
  ```
* Verbose:

  ```bash
  pytest -v
  ```
* Run a directory:

  ```bash
  pytest tests/unit/
  ```
* Run a file:

  ```bash
  pytest tests/test_api.py
  ```
* Run a single test:

  ```bash
  pytest tests/test_api.py::test_login
  ```

---

## Filtering

* By keyword:

  ```bash
  pytest -k "login and not slow"
  ```
* By marker:

  ```bash
  pytest -m smoke
  ```

  ```python
  @pytest.mark.smoke
  def test_quick(): ...
  ```

---

## Useful CLI Options

* `-v` → verbose
* `-q` → quiet
* `-x` → stop on first failure
* `--maxfail=N` → stop after N failures
* `-s` → show `print()` and logs
* `--tb=short|long|none` → traceback format
* `--disable-warnings` → hide warnings
* `--pdb` → debugger on failure
* `--lf` → last failed only
* `--ff` → last failed first
* `--durations=N` → show N slowest tests
* `--cov=PACKAGE` → coverage (with `pytest-cov`)
* `--collect-only` → list tests without running

---

## Advanced Tips

* **Debug fixtures**: `pytest --setup-show`
* **Custom markers** (register in `pytest.ini`):

  ```ini
  [pytest]
  markers =
      smoke: quick checks
      slow: long tests
  ```
* **Parallel runs**: `pytest -n auto` (with `pytest-xdist`)
* **Rerun flaky tests**: `pytest-rerunfailures`
* **Continuous runs**: `pytest --lf --maxfail=1`

---
