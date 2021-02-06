# SystemVerilog

// var1 is an array/register array
var0 = |(var1.or()); // will OR reduce array/register array down to 1 bit

EDA Playground:
```
initial begin
  $dumpfile("dump.vcd");
  $dumpvars;
end
```

- automatic garbage collection
- static class member - shared property amongst all class members. This is because memory is allocated at elaboration and ptr is shared with each instance
- static class function - can only access static vars or other static functions
    - static functions and vars can be accessed before instansiating any class instances - generally bad practice
- ellaboration -
- memstr/memcpy -



interface -
coverage -
    covergroup -
    coverpoint -
    bin -
    cross -
