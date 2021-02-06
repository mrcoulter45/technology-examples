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
