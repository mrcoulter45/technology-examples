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
