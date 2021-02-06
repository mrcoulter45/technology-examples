# Verilog

Port Rules:
  when instantiating a module
    .var_other_module(var_current_module)
    inputs - wires or regs
    outputs - must be wires
  inside of a module when declaring signals inputs or outputs:
    inputs leave as input - act as wires
    outputs can be wires or regs

Using parameters to create constant in verilog - https://stackoverflow.com/questions/21246782/using-parameters-to-create-constant-in-verilog
  Eg. - `{{{DATA_WIDTH-1{1'b0}},{1'b1}}} // where DATA_WIDTH = 8 -> 8'b00000001`
  initialize a number to zero: `reg [WIDTH-1:0] count = {WIDTH{1'b0}}`

Packages:
  inside - classes/software
  outside - rtl

Defining arrays:
  `logic [1:0] array0 [0:3];` // logic [<individual reg bit width>] <array name> [<num elements in array (0:n)>];

Generates:
  - generates may be used to generate always blocks
  - generate block cannot be used inside a always block, must be outside

Defining a module with parameters:
```
module <module-name> #(<PARAM_0> = -1, <PARAM_1> = -1) (
  input [PARAM_0-1:0] data,
  input valid,
  input [PARAM_1-1:0] user,
  output error
);
  ...
endmodule
```

Declaring a module with parameters:
```
<module-name> #(.PARAM_0 (PARAM_0), .PARAM_1(PARAM_1)) <module-instance-name> (
  .data (data),
  .valid (valid),
  .user (user),
  .error (error)
);
```

Macros:
```
`define val 10
var_a = `val + 40;
```
