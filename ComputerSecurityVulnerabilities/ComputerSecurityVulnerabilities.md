# Computer Security Vulnerabilities

## Spectre
Spectre is a hardware vulnerability that affects most modern processors, including those from Intel, AMD, and ARM. It allows attackers to trick otherwise secure applications into leaking sensitive information, such as passwords or encryption keys, from the computer's memory.<br>

Spectre refers to one of the two original transient execution CPU vulnerabilities (the other being Meltdown), which involve microarchitectural timing side-channel attacks. These affect modern microprocessors that perform branch prediction and other forms of speculation. On most processors, the speculative execution resulting from a branch misprediction may leave observable side effects that may reveal private data to attackers. For example, if the pattern of memory accesses performed by such speculative execution depends on private data, the resulting state of the data cache constitutes a side channel through which an attacker may be able to extract information about the private data using a timing attack.<br>

Two Common Vulnerabilities and Exposures IDs related to Spectre, CVE-2017-5753 (bounds check bypass, Spectre-V1, Spectre 1.0) and CVE-2017-5715 (branch target injection, Spectre-V2), have been issued. JIT engines used for JavaScript were found to be vulnerable. A website can read data stored in the browser for another website, or the browser's memory itself.<br>

In early 2018, Intel reported that it would redesign its CPUs to help protect against the Spectre and related Meltdown vulnerabilities (especially, Spectre variant 2 and Meltdown, but not Spectre variant 1). On 8 October 2018, Intel was reported to have added hardware and firmware mitigations regarding Spectre and Meltdown vulnerabilities to its latest processors.<br>

### Mechanism
Spectre is a vulnerability that tricks a program into accessing arbitrary locations in the program's memory space. An attacker may read the content of accessed memory, and thus potentially obtain sensitive data.

Instead of a single easy-to-fix vulnerability, the Spectre white paper describes a whole class of potential vulnerabilities. They are all based on exploiting side effects of speculative execution, a common means of hiding memory latency and so speeding up execution in modern microprocessors. In particular, Spectre centers on branch prediction, which is a special case of speculative execution. Unlike the related Meltdown vulnerability disclosed at the same time, Spectre does not rely on a specific feature of a single processor's memory management and protection system, but is instead a more generalized idea.

The starting point of the white paper is that of a side-channel timing attack applied to the branch prediction machinery of modern out-of-order executing microprocessors. While at the architectural level documented in processor data books, any results of misprediction are specified to be discarded after the fact, the resulting speculative execution may still leave side effects, like loaded cache lines. These can then affect the so-called non-functional aspects of the computing environment later on. If such side effects – including but not limited to memory access timing – are visible to a malicious program, and can be engineered to depend on sensitive data held by the victim process, then these side effects can result in such data becoming discernible. This can happen despite the formal architecture-level security arrangements working as designed; in this case, lower, microarchitecture-level optimizations to code execution can leak information not essential to the correctness of normal program execution.

The Spectre paper displays the attack in four essential steps:

First, it shows that branch prediction logic in modern processors can be trained to reliably hit or miss based on the internal workings of a malicious program.
It then goes on to show that the subsequent difference between cache hits and misses can be reliably timed, so that what should have been a simple non-functional difference can in fact be subverted into a covert channel which extracts information from an unrelated process's inner workings.
Thirdly, the paper synthesizes the results with return-oriented programming exploits and other principles with a simple example program and a JavaScript snippet run under a sandboxing browser; in both cases, the entire address space of the victim process (i.e. the contents of a running program) is shown to be readable by simply exploiting speculative execution of conditional branches in code generated by a stock compiler or the JavaScript machinery present in an existing browser. The basic idea is to search existing code for places where speculation touches upon otherwise inaccessible data, manipulate the processor into a state where speculative execution has to contact that data, and then time the side effect of the processor being faster, if its by-now-prepared prefetch machinery indeed did load a cache line.
Finally, the paper concludes by generalizing the attack to any non-functional state of the victim process. It briefly discusses even such highly non-obvious non-functional effects as bus arbitration latency.
Meltdown can be used to read privileged memory in a process's address space which even the process itself would normally be unable to access (on some unprotected OSes this includes data belonging to the kernel or other processes). It was shown that under certain circumstances, the Spectre vulnerability is also capable of reading memory outside of the current processes memory space.

The Meltdown paper distinguishes the two vulnerabilities thus: "Meltdown is distinct from the Spectre Attacks in several ways, notably that Spectre requires tailoring to the victim process's software environment, but applies more broadly to CPUs and is not mitigated by KAISER."

Remote exploitation
While Spectre is simpler to exploit with a compiled language such as C or C++ by locally executing machine code, it can also be remotely exploited by code hosted on remote malicious web pages, for example interpreted languages like JavaScript, which run locally using a web browser. The scripted malware would then have access to all the memory mapped to the address space of the running browser.

The exploit using remote JavaScript follows a similar flow to that of a local machine code exploit: flush cache → mistrain branch predictor → timed reads (tracking hit / miss).

The clflush instruction (cache-line flush) cannot be used directly from JavaScript, so ensuring it is used requires another approach. There are several automatic cache eviction policies which the CPU may choose, and the attack relies on being able to force that eviction for the exploit to work. It was found that using a second index on the large array, which was kept several iterations behind the first index, would cause the least recently used (LRU) policy to be used. This allows the exploit to effectively clear the cache just by doing incremental reads on a large dataset. The branch predictor would then be mistrained by iterating over a very large dataset using bitwise operations for setting the index to in-range values, and then using an out-of-bounds address for the final iteration. A high-precision timer would then be required in order to determine if a set of reads led to a cache-hit or a cache-miss. While browsers like Chrome, Firefox, and Tor Browser (based on Firefox) have placed restrictions on the resolution of timers (required in Spectre exploit to determine if cache hit/miss), at the time of authoring the white paper, the Spectre author was able to create a high-precision timer using the web worker feature of HTML5.

Careful coding and analysis of the machine code executed by the just-in-time compilation (JIT) compiler was required to ensure the cache-clearing and exploitive reads were not optimized out.

## Meltdown
Meltdown is a hardware vulnerability that affects most Intel processors and allows attackers to bypass the hardware barrier between applications run by users and the computer's core memory, potentially allowing them to access sensitive information such as passwords, encryption keys, and other data stored in memory.<br>

Meltdown is one of the two original transient execution CPU vulnerabilities (the other being Spectre). Meltdown affects Intel x86 microprocessors, IBM POWER processors, and some ARM-based microprocessors. It allows a rogue process to read all memory, even when it is not authorized to do so.

Meltdown affects a wide range of systems. At the time of disclosure (2018), this included all devices running any but the most recent and patched versions of iOS, Linux, macOS, or Windows. Accordingly, many servers and cloud services were impacted, as well as a potential majority of smart devices and embedded devices using ARM-based processors (mobile devices, smart TVs, printers and others), including a wide range of networking equipment. A purely software workaround to Meltdown has been assessed as slowing computers between 5 and 30 percent in certain specialized workloads, although companies responsible for software correction of the exploit reported minimal impact from general benchmark testing.

Meltdown was issued a Common Vulnerabilities and Exposures ID of CVE-2017-5754, also known as Rogue Data Cache Load (RDCL), in January 2018. It was disclosed in conjunction with another exploit, Spectre, with which it shares some characteristics. The Meltdown and Spectre vulnerabilities are considered "catastrophic" by security analysts. The vulnerabilities are so severe that security researchers initially believed the reports to be false.

Several procedures to help protect home computers and related devices from the Meltdown and Spectre security vulnerabilities have been published. Meltdown patches may produce performance loss. Spectre patches have been reported to significantly reduce performance, especially on older computers; on the then-newest (2017) eighth-generation Core platforms, benchmark performance drops of 2–14 percent have been measured. On 18 January 2018, unwanted reboots, even for newer Intel chips, due to Meltdown and Spectre patches, were reported. Nonetheless, according to Dell: "No 'real-world' exploits of these vulnerabilities [i.e., Meltdown and Spectre] have been reported to date [26 January 2018], though researchers have produced proof-of-concepts." Further, recommended preventions include: "promptly adopting software updates, avoiding unrecognized hyperlinks and websites, not downloading files or applications from unknown sources ... following secure password protocols ... [using] security software to help protect against malware (advanced threat prevention software or anti-virus)."

On 15 March 2018, Intel reported that it will redesign its CPUs to help protect against the Meltdown and related Spectre vulnerabilities (especially, Meltdown and Spectre-V2, but not Spectre-V1), and expects to release the newly redesigned processors later in 2018. On 8 October 2018, Intel is reported to have added hardware and firmware mitigations regarding Spectre and Meltdown vulnerabilities to its latest processors.

### Overview
Meltdown exploits a race condition, inherent in the design of many modern CPUs. This occurs between memory access and privilege checking during instruction processing. Additionally, combined with a cache side-channel attack, this vulnerability allows a process to bypass the normal privilege checks that isolate the exploit process from accessing data belonging to the operating system and other running processes. The vulnerability allows an unauthorized process to read data from any address that is mapped to the current process's memory space. Since instruction pipelining is in the affected processors, the data from an unauthorized address will almost always be temporarily loaded into the CPU's cache during out-of-order execution—from which the data can be recovered. This can occur even if the original read instruction fails due to privilege checking, or if it never produces a readable result.

Since many operating systems map physical memory, kernel processes, and other running user space processes into the address space of every process, Meltdown effectively makes it possible for a rogue process to read any physical, kernel or other processes' mapped memory—regardless of whether it should be able to do so. Defenses against Meltdown would require avoiding the use of memory mapping in a manner vulnerable to such exploits (i.e. a software-based solution) or avoidance of the underlying race condition (i.e. a modification to the CPUs' microcode or execution path).

The vulnerability is viable on any operating system in which privileged data is mapped into virtual memory for unprivileged processes—which includes many present-day operating systems. Meltdown could potentially impact a wider range of computers than presently identified, as there is little to no variation in the microprocessor families used by these computers.

A Meltdown attack cannot be detected if it is carried out.

### Mechanism
Meltdown relies on a CPU race condition that can arise between instruction execution and privilege checking. Put briefly, the instruction execution leaves side effects that constitute information not hidden to the process by the privilege check. The process carrying out Meltdown then uses these side effects to infer the values of memory mapped data, bypassing the privilege check. The following provides an overview of the exploit, and the memory mapping that is its target. The attack is described in terms of an Intel processor running Microsoft Windows or Linux, the main test targets used in the original paper, but it also affects other processors and operating systems, including macOS (aka OS X), iOS, and Android.

Background – modern CPU design
Modern computer processors use a variety of techniques to gain high levels of efficiency. Four widely used features are particularly relevant to Meltdown:

Virtual (paged) memory, also known as memory mapping – used to make memory access more efficient and to control which processes can access which areas of memory.
A modern computer usually runs many processes in parallel. In an operating system such as Windows or Linux, each process is given the impression that it alone has complete use of the computer's physical memory, and may do with it as it likes. In reality it will be allocated memory to use from the physical memory, which acts as a "pool" of available memory, when it first tries to use any given memory address (by trying to read or write to it). This allows multiple processes, including the kernel or operating system itself, to co-habit on the same system, but retain their individual activity and integrity without being affected by other running processes, and without being vulnerable to interference or unauthorized data leaks caused by a rogue process.

Privilege levels, or protection domains – provide a means by which the operating system can control which processes are authorized to read which areas of virtual memory.
As virtual memory permits a computer to refer to vastly more memory than it will ever physically contain, the system can be greatly sped up by "mapping" every process and their in-use memory – in effect all memory of all active processes – into every process's virtual memory. In some systems all physical memory is mapped as well, for further speed and efficiency. This is usually considered safe, because the operating system can rely on privilege controls built into the processor itself, to limit which areas of memory any given process is permitted to access. An attempt to access authorized memory will immediately succeed, and an attempt to access unauthorized memory will cause an exception and void the read instruction, which will fail. Either the calling process or the operating system directs what will happen if an attempt is made to read from unauthorized memory – typically it causes an error condition and the process that attempted to execute the read will be terminated. As unauthorized reads are usually not part of normal program execution, it is much faster to use this approach than to pause the process every time it executes some function that requires privileged memory to be accessed, to allow that memory to be mapped into a readable address space.

Instruction pipelining and speculative execution – used to allow instructions to execute in the most efficient manner possible – if necessary allowing them to run out of order or in parallel across various processing units within the CPU – so long as the final outcome is correct.
Modern processors commonly contain numerous separate execution units, and a scheduler that decodes instructions and decides, at the time they are executed, the most efficient way to execute them. This might involve the decision that two instructions can execute at the same time, or even out of order, on different execution units (known as "instruction pipelining"). So long as the correct outcome is still achieved, this maximizes efficiency by keeping all of the processor's execution units in use as much as possible. Some instructions, such as conditional branches, will lead to one of two different outcomes, depending on a condition. For example, if a value is 0, it will take one action, and otherwise will take a different action. In some cases, the CPU may not yet know which branch to take. This may be because a value is uncached. Rather than wait to learn the correct option, the CPU may proceed immediately (speculative execution). If so, it can either guess the correct option (predictive execution) or even take both (eager execution). If it executes the incorrect option, the CPU will attempt to discard all effects of its incorrect guess. (See also: Branch predictor)

CPU cache – a modest amount of memory within the CPU used to ensure it can work at high speed, to speed up memory access, and to facilitate "intelligent" execution of instructions in an efficient manner.
From the perspective of a CPU, the computer's physical memory is slow to access. Also the instructions a CPU runs are very often repetitive, or access the same or similar memory numerous times. To maximize efficient use of the CPU's resources, modern CPUs often have a modest amount of very fast on-chip memory, known as CPU cache. When data is accessed or an instruction is read from physical memory, a copy of that information is routinely saved in the CPU cache at the same time. If the CPU later needs the same instruction or memory contents again, it can obtain it with minimal delay from its own cache rather than waiting for a request related to physical memory to take place.

Meltdown exploit
Ordinarily, the mechanisms described above are considered secure. They provide the basis for most modern operating systems and processors. Meltdown exploits the way these features interact to bypass the CPU's fundamental privilege controls and access privileged and sensitive data from the operating system and other processes. To understand Meltdown, consider the data that is mapped in virtual memory (much of which the process is not supposed to be able to access) and how the CPU responds when a process attempts to access unauthorized memory. The process is running on a vulnerable version of Windows, Linux, or macOS, on a 64-bit processor of a vulnerable type. This is a very common combination across almost all desktop computers, notebooks, laptops, servers and mobile devices.

The CPU encounters an instruction accessing the value, A, at an address forbidden to the process by the virtual memory system and the privilege check. Because of speculative execution, the instruction is scheduled and dispatched to an execution unit. This execution unit then schedules both the privilege check and the memory access.
The CPU encounters an instruction accessing address Base+A, with Base chosen by the attacker. This instruction is also scheduled and dispatched to an execution unit.
The privilege check informs the execution unit that the address of the value, A, involved in the access is forbidden to the process (per the information stored by the virtual memory system), and thus the instruction should fail and subsequent instructions should have no effect. Because these instructions were speculatively executed, however, the data at Base+A may have been cached before the privilege check – and may not have been undone by the execution unit (or any other part of the CPU). If this is indeed the case, the mere act of caching constitutes a leak of information in and of itself. At this point, Meltdown intervenes.
The process executes a timing attack by executing instructions referencing memory operands directly. To be effective, the operands of these instructions must be at addresses which cover the possible address, Base+A, of the rejected instruction's operand. Because the data at the address referred to by the rejected instruction, Base+A, was cached nevertheless, an instruction referencing the same address directly will execute faster. The process can detect this timing difference and determine the address, Base+A, that was calculated for the rejected instruction – and thus determine the value A at the forbidden memory address.
Meltdown uses this technique in sequence to read every address of interest at high speed, and depending on other running processes, the result may contain passwords, encryption data, and any other sensitive information, from any address of any process that exists in its memory map. In practice, because cache side-channel attacks are slow, it is faster to extract data one bit at a time (only 2 × 8 = 16 cache attacks needed to read a byte, rather than 256 steps if it tried to read all 8 bits at once).

## Stack Sealing
A report has been presented to Arm which shows that Secure software executing on Armv8-M processors may be vulnerable to attacks generated from the Non-secure state; if the Secure software does not properly manage the Secure stacks when the stacks are created, or when performing non-standard transitioning between states or modes, for example, creating a fake exception return stack frame to deprivilege an interrupt. The mitigation for this vulnerability is purely in software and is referred as Stack Sealing. It is only necessary in Armv8-M processors where the TrustZone security extension is being used, i.e. there is code running in both Secure and Non-secure states. No changes to hardware are required.

### What is the impact of this vulnerability?
This vulnerability could allow a malicious agent to trigger a stack underflow in the Secure world software without immediately triggering a fault exception in the Secure world. This change could lead to incorrect operation of the Secure code execution, which could cause Denial of Service from the Secure code or incorrect operation of the platform.

If the attack is targeted on stack underflow, the vulnerability is dependent on the uninitialized data at the top of the stack. If the attack is targeted on an alternate Secure stack that has been used, the consequence depends on the data previously written to the stack. This might include data previously passed from the Non-secure world to the Secure world, and can therefore be affected by the malicious agent.

### What is the software mitigation for secure software to run on Armv8-M cores?
Software that executes on Armv8-M based processors with security extensions to isolate between the Secure and Non-secure states, and where a malicious agent may run their own code in the Non-secure world, require that all Secure stacks are sealed.

Secure state software that runs on an Arm Cortex®-M23, Cortex-M33, Cortex-M35P, or Cortex-M55 processors, and any Secure state software that runs on an Armv8-M based processor which has implemented the Security extensions developed under license from Arm, should be reviewed to determine whether that software may be vulnerable to the attack described on this page and in the Armv8-M Secure Stack Sealing advisory notice.

Note that this technique is already accounted for in the architecture, and the relevant data value for Stack Sealing is declared. Arm has now issued improved software guidance to mitigate the Secure Stack Sealing vulnerability.

## Log4j
### What Is Log4j?
Log4j is an open-source logging framework maintained by Apache, a software foundation. It’s a Java-based utility, making it a popular service used on Java-based systems and applications. When the Log4j zero-day was disclosed, organizations were scrambling to understand how it might impact them.

Within a few days, cybersecurity experts collaborated to begin compiling a list of software that the Log4j vulnerability affected as well as those that it didn’t. Although this list helped companies better assess their environments for impacted systems and applications, security teams were sitting ducks for a few days, at the mercy of the technology vendors, waiting for them to produce security patches that would remediate the flaw. As a result, organizations were being urged to take down any internet-facing, non-business-critical systems to prevent them from being exploited while security teams waited for those system updates to be released.

It shouldn’t come as a surprise that after its discovery, security researchers saw millions of attempted exploits, many of which turned into successful denial-of-service (DoS) attacks. It didn’t take long for a new variant of ransomware that leveraged the exploit to be developed either. This is the primary reason why security teams rushed to take many of their systems impacted by this zero-day offline. Leaving any system or application found to be vulnerable exposed was like playing a game of roulette.

Due to the obvious severity and publicity around this particular zero-day, vendors were quick to publish security fixes and the patching began. Unfortunately for many IT and security teams, this massive project occurred right around the holidays in the last few weeks of December.

### How Does the Log4j Exploit Work?
As mentioned previously, cybersecurity experts considered the Log4j exploit critical due to the ease of exploitation and the fact that no authentication was required to perform it. Add the prevalence of the vulnerability of public-facing systems to this and you have yourself a major cause for concern.

Log4j is used to log messages within software and has the ability to communicate with other services on a system. This communication functionality is where the vulnerability exists, providing an opening for an attacker to inject malicious code into the logs so it can be executed on the system.

The vulnerability was first discovered in a version of the game Minecraft. Malicious individuals learned that the game’s chat was being logged using Log4j and, if they entered malicious code into the chat, it led to remote code execution (RCE). Remote code execution is a type of cyberattack that allows an individual to execute code on a backend system, remotely.

Upon this discovery, a world of opportunities opened up as hackers and security researchers alike began to test how far they could take this potential flaw. And so began the mass network scanning activity required to find potentially vulnerable systems and then perform POCs (proof of concepts) of the exploit.

It didn’t take long for official POC code to surface on GitHub, an open-source coding community where members can share and collaborate on coding projects. The software community uses it to develop programs. For cybersecurity experts, however, it’s used to share scripts and programs related to securing or exploiting various systems or vulnerabilities. This includes POC code, or exploit code, typically with instructions, that publicizes how to exploit a specific vulnerability.

In the case of Log4j, a GitHub user published a Log4j POC for LDAP (Lightweight Directory Access Protocol) remote code execution. If you recall, RCE attacks result in malicious code being executed on a remote system, and the exploit is leveraging the LDAP service, which is a protocol used for cross-platform directory services authentication. In simpler terms, it’s what enables a remote directory (typically Microsoft Active Directory) to be searched and used for authentication purposes to an internal service.

To perform the exploit using the popular POC code on GitHub, all an attacker has to do is run the provided script on their system to deploy an HTTP server and fake LDAP server, then inject the crafted malicious payload into a text field on a vulnerable platform. This can be within a chat, like in the Minecraft exploit, or as simple as pasting the command into the username field of a login form with a random password.

You might be wondering, “What’s so special about the crafted payload?” The payload is ultimately what exploits the Log4j vulnerability. It does so by using JNDI, Java Naming and Directory Interface, a feature that enables a user to fetch and load Java objects from a server. Although this is a secure functionality, the Log4j flaw allows an attacker to input their own JNDI lookups, where they then direct the server to their fake LDAP server. From here, the attacker now has control of the remote system and can execute malware, exfiltrate sensitive information like passwords, and more.