module counter3Bit (
  input wire clk,
  input wire rst,
  output reg [2:0] out
);

  reg a;
  reg b;
  reg c;

  reg a_reg;
  reg b_reg;
  reg c_reg;

  always @(*) begin
    if (rst) begin
      a = 0;
      b = 0;
      c = 0;
    end else begin
      a = (a_reg & ~b_reg) | (a_reg & ~c_reg) | (~a_reg & b_reg & c_reg);
      b = b_reg ^ c_reg;
      c = ~c_reg;
    end
  end

  always @(posedge clk) begin
    a_reg <= a;
    b_reg <= b;
    c_reg <= c;
    out <= {a, b, c};
  end

endmodule
