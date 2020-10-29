force clk 1 0ns, 0 1ns -repeat 2ns
force rst 1
run 10 ns
force rst 0
run 100ns
