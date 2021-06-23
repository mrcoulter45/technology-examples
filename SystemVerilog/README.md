# SystemVerilog

## Vocab
- static class member: shared property amongst all class members. This is because memory is allocated at elaboration and ptr is shared with each instance
- static class function: can only access static vars or other static functions
  - static functions and vars can be accessed before instansiating any class instances - generally bad practice
- ellaboration:
- memstr/memcpy:
- bit: 2-bit data type, can only be 0 or 1
- logic, wire, reg: 4-state data types, can be 0, 1, X, or Z
  - logic can be either wire or reg, Verilog/SV will smartly decide which it should be based on its usage.
- interface: used to transfer signals around a TB efficiently
- coverage:
  - covergroup:
  - coverpoint:
  - bin:
  - cross:
- modport:

## Notes
- Reasons SystemVerilog is used for verification over Verilog and VHDL:
  - object oriented
  - functional coverage
  - constrained randomization
  - methodology libraries exist for it (UVM) when they do not for Verilog/VHDL
- `initial` and `always` key words create threads
- SV has automatic garbage collection

## Code
// var1 is an array/register array
var0 = |(var1.or()); // will OR reduce array/register array down to 1 bit

## Object Oriented Programming
- Example of a SV class:
![](./images/sv-classes-0.PNG)
- Class extension:
![](./images/sv-classes-1.PNG)

## Randomization:
![](./images/randomization-0.PNG)
![](./images/randomization-1.PNG)
![](./images/randomization-2.PNG)
![](./images/randomization-3.PNG)

## Interface:
- Example:
![](./images/interface-0.PNG)
![](./images/interface-1.PNG)
![](./images/interface-2.PNG)
![](./images/interface-3.PNG)
![](./images/interface-4.PNG)
![](./images/interface-5.PNG)
![](./images/interface-6.PNG)
![](./images/interface-7.PNG)
![](./images/interface-8.PNG)
![](./images/interface-9.PNG)
- Interfaces are used to connect RTL (modules) and classes
![](./images/class-interface-0.PNG)
![](./images/class-interface-1.PNG)
![](./images/class-interface-2.PNG)
![](./images/class-interface-3.PNG)
![](./images/class-interface-4.PNG)

## Packages
- Namespaces:


## Tools
### EDA Playground
- place this block in every EDA Playground testbench
```
initial begin
  $dumpfile("dump.vcd");
  $dumpvars;
end
```

## Verification Academy Video
- https://verificationacademy.com/sessions/overview-and-welcome-introduction-to-the-uvm
