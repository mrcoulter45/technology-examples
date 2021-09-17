# UVM

## Vocab
- UVM: Universal Verification Methodology for SystemVerilog
  - UVM is not a programming language
  - supports contrained random, coverage-driven verification
  - open-source (Apache 2.0) base class library
  - is an Accellera standard
  - is "Universal" because it is supported by all major simulated vendors
  - standardizes the verification infrastructure so that bugs are not created unnecessarily and that verification engineers are not held up by having to create their own
  - based on verification libraries/methodologies from Cadence, Mentor, and Synopsis
    - Cadence: eRM, URM, OVM
    - Mentor: AVM, OVM
    - Synopsis: RVM, VMM
- monitor:
- driver:
- TLM: Transaction Level Modelling
  -
- checker: computes expected output given a specific input of DUT that it is connected to via OOP software
- scoreboard:
- functional coverage: a list of different states of the design that need to be tested
- factory:
  - call factory method `create()` to create new objects
    - this is a wrapper function for the SystemVerilog class function new()
    - E.g. `m_my_seq = my_seq::type_id::create("m_my_seq", this);`
    - `::` is the scope resolution operator - used to refer an identifier within the scope of a class
    - this `create()` function is static
  - Class factory registration - ``uvm_component_utils(<class_name>)`
- test: instantiates and configures the UVM testbench or the "environment" in which the test will run, creates and instantiates sequences
- environment: the UVM testbench, where much of the UVM infrastructure is instantiated, should be reusable for all tests, instantiates UVM agents
- agent: drives and monitors pins of the DUT, instantiates sequencers, drivers, and monitors
- objection:
- sequence:
  - a stream of test data/transactions
  - 2 types of sequences:
    - 1. sequence that produces sequence/transaction items cannot be virtual
    - 2. sequence that controls other sequences (virtual sequence)
- sequencer:
- layered sequence:
- layered agent:
- event:
- barrier:
- UVM register layer: optional
- Accellera: a group of industry players that acts as a standards organization that supports a mix of user and vendor standards and open interfaces development in the area of electronic design automation and integrated circuit design and manufacturing
- constrained random verification:
- virtual sequence:
  - multiple agents running sequences

## Simulation Phases
- any `uvm_component` object may have functions/tasks called `<phase_name>_phase()`
- the UVM state machine will run all of these phase functions in all components that have them as specified below
- connect through start_of_simulation phases run bottom-up
- build
  - calls all constructors, all configuration defined by the test
    - build env - calls env's constructor
    - will call build_phase method of all componenets in a top-down way starting with the test
- connect
  - makes connections between the different components as needed
  - Eg. monitor --> subscriber, sequencer --> driver (sequencer is sproviding a method to the driver), etc. (objects being made available to each other via handles/references (pointers) so that they can call each other's functions)
  - connect components virtual interfaces to interface
- end_of_elaboration
  - optional
  - extra steps after building and connecting that need to happen before running
- start_of_simulation
  - optional
  - extra steps after building and connecting that need to happen before running
  - for customizing transaction objects
- run
  - transactions are generated and running, traffic happens
  - can have 12 optional sub phases - generally avoided/not recommended for use
    - may need to be used if the system has IP that has been purchased that uses these phases
    - having these phases in the verification system can break re-usability
  - defined as a SystemVerilog task, so all components with a run_phase() task will be running in parallel, simulation time is running, they do start bottom-up
  - run_phase() for each component is kicked off in fork, join-none construct
- extract
  - bottom-up
- check
  - bottom-up
- report
  - bottom-up
- final
  - top-down

## Verification Academy Videos
- https://verificationacademy.com/sessions/uvm-components-and-tests/video/654?play=1
- https://verificationacademy.com/sessions/introduction-sequences/video/669?play=1
- https://verificationacademy.com/sessions/layered-sequences/video/252?play=1

## Verification Academy Docs
- uvm_sequence_base: https://verificationacademy.com/verification-methodology-reference/uvm/docs_1.1b/html/files/seq/uvm_sequence_base-svh.html#uvm_sequence_base.start_item

## Doulos Course
- any type of design/verification engineer should be able to answer the question: "What's your coverage?"
- random stimulus generation is for creating situations that a verification engineer wouldn't have thought to/had time to create
-

### Sequences
- runs on a sequencer
- `task body` - UVM function name
  - executes when sequence runs
- factory registration is done with ``uvm_object_utils(my_sequence)``, since sequence is in the data category, not components

### Objections
- UVM component objects may run `phase.raise_objection(this);`/`phase.drop_objection(this);` which increments/decrements an objection counter. Phase is not allowed to end until objection counter is 0
- basically means the object objects to the simulation phase ending

### Driver
-

### Scoreboard
- keeps record/statistics of passes and fails

### Checker
-

### Constraints
- this is how you control randomness (control knobs)

## EDA Playgound
```
// Dump waves
initial
begin
$dumpfile("dump.vcd");
$dumpvars();
end
```

## Notes
- UVM is for making testbenches faster and in a standard way
- every UVM object extends uvm_void, empty object
- SystemC diagramming nomenclature:
  - circle: export - provides a method
  - square: port - requires a method, calls a method outside of itself
- don't use UVM field macros in ``uvm_object_utils_begin()`
- parent -> child
  - test -> env, env -> agent
- base class (super) -> class
  - uvm_component -> uvm_env
- uvm_top.run_test("test0"); - sets the UVM state machine running phases
- objections should be raised/dropped in uvm components run phase before/after the start of a sequence
E.g. - env.sv:
```
  task run_phase(uvm_phase phase);
    serial_sequence tx;
    tx = serial_sequence::type_id::create("tx");
    tx.randomize();
    tx.set_starting_phase(phase);
    phase.raise_objection(this);
    tx.start(m_sequencer);
    phase.drop_objection(this);
  endtask: run_phase
```
- do not use parameters to define an interface that will be hooked up to a virtual inteface, it will mess up usability with classes in your verification environment. Define parameters in a package, and then import the package into the design module and the verification class.
- avoid pre and post body methods, use pre and post start instead
-
```
`uvm_do() //deprecated
```
- sequence.start() is blocking

## Misc
\`uvm_do sequence macros
virtual sequence
uvm phase diagram: https://www.google.com/search?q=uvm+phase+diagram&rlz=1C1GCEB_enUS834US834&sxsrf=ALeKk03r2S622hqhesbJwLziUiLQII2aBg:1618434549732&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj36bbD0v7vAhWQZM0KHWauCoMQ_AUoAXoECAEQAw&biw=1920&bih=937#imgrc=QIf-SIndRlJwQM

## Questions
- if you have a component that extends another component and both have a phase function, which runs first?
  - all the UVM defined simulation phase functions are virtual functions. If any o fthem are overriden in a derived class, the derived classes function will run instead of the base classes function. The derived function can call `super.<phase_function>()` to run the base class function if necessary.
- should get a uvm golden reference manual
