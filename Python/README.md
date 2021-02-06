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
