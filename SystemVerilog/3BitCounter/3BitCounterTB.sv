module counter3BitTB;
  reg clk;
  reg rst;
  wire [2:0] count;

  counter3Bit counter3Bit(
    .clk(clk),
    .rst(rst),
    .out(count)
  );

  initial  begin
    clk = 0;
    forever begin
      #5 clk = !clk;
    end
  end

  initial  begin
    $dumpfile("dump.vcd");
    $dumpvars;
    rst = 1;
    #20;
    rst = 0;
    #300;
    $finish;
  end

  covergroup cg @(posedge clk);
    a: coverpoint count {
      bins c = {3'h7 => 3'h0};
    }
  endgroup
endmodule
