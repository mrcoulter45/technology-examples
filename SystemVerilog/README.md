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
- virtual interface: can hold a reference to an interface

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

## Notes
- modu inst0 (.a, .b, .c); - will assign to a value with the same name in the module
- you have vars and nets, registers are vars and wires are nets, but logic can be used for all. Logic is 4 state
- use always_comb over always @(\*), always_comb will also run the combinational block even if a function includes variables not visable to the combinational block
- static variables will hold the same value through the entire simulation
- automatic variables can change values
- function has to execute in 0 time, returns a value
- task can execute in longer than 0 time (waits, suspends), tasks have connections, statements are sequential by default, begin/end not needed
- j = i++; // assign i to j, then increment i
- j = ++i; // increment i, then assign i to j

fork join
dynamic cast
event
functional coverage
associative array
queue
class handle
inside
