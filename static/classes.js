let classes = new Vue(
    {
        el: '#classes',
        data: {
            classes: [
                {
                    num: "6.6010",
                    name: "Analysis and Design of Digital Integrated Circuits (Graduate)",
                    desc: "VLSI. Digital ASIC design on Intel 16nm process. Theory, design, layout, analog and digital simulation, verification. Logic, clock, and memory optimization. Modern IC design flows."
                },
                {
                    num: "6.6410",
                    name: "Quantum Computation (Graduate)",
                    desc: "Physics of information processing; quantum algorithms, communication, cryptography. Taught by Peter Shor of Shor's Algorithm fame."
                },
                {
                    num: "6.2050",
                    name: "Digital Systems Laboratory",
                    desc: "FPGA-based digital system design using SystemVerilog. We built an image processing GPU with a four-stage core architecture on a Spartan-7. Probably the most intensive but interesting class I've taken at MIT.",
                    grade: "A",
                },
                {
                    num: "6.2600",
                    name: "Micro/Nano Processing Technology",
                    desc: "Wet and dry etching, chemical and physical deposition, lithography, thermal processes, and device and materials characterization. Working in the world's most advanced university cleanroom is an insanely cool and exhausting and rewarding experience.",
                    grade: "A+",
                },
                {
                    num: "6.2080",
                    name: "Semiconductor Electronic Circuits",
                    desc: "Chip design class. Design, analysis, and layout of analog circuits. Diodes, transistors, amplifiers, op-amps. The tooling is awful but you do get to design an actual chip for fabrication by TSMC.",
                    grade: "A",
                },
                {
                    num: "6.4210",
                    name: "Robotic Manipulation",
                    desc: "Kinematics, dynamics, and control of robotic manipulators. Motion planning, grasping, perception.",
                    grade: "A+",
                },
                {
                    num: "6.7960",
                    name: "Deep Learning (Graduate)",
                    desc: "MLP, CNN, RNN, transformers, autoencoders, graph neural networks, diffusion models. Taught partially by the guy who invented ResNet. Fast-paced.",
                    grade: "A",
                },
                {
                    num: "6.5951",
                    name: "Secure Hardware Design",
                    desc: "Write malware targeting hardware on the microarchitectural level. Cache side channels, speculative execution, Rowhammer, physical attacks, formal verification.",
                    grade: "A"
                },
                {
                    num: "21M.389",
                    name: "Studies in Advanced Music Technology and Computation",
                    desc: "Audio signal processing. Acoustic simulation and processing algorithms; 3D audio, classifiers for sound events, speech recognition, machine learning, denoising, localization and beamforming."
                },
                {
                    num: "6.2000",
                    name: "Circuits and Electronics",
                    desc: "Linear systems. Dynamics of first/second-order networks; analysis and design in the time and frequency domains. Bode plots, transfer functions, op-amps.",
                    grade: "A-",
                },
                {
                    num: "18.701",
                    name: "Algebra I",
                    desc: "Groups, rings, fields, vector spaces, linear transformations. Terrifyingly hard. Every class an increasingly large pile of bananas appeared on the professor's lectern.",
                    grade: "Listener",
                },
                {
                    num: "6.1910",
                    name: "Computation Structures",
                    desc: "Computer architecture. CMOS, cache design, pipelining, introduction to operating systems. We built a 5-stage pipelined RISC processor for MNIST inference from the ground up.",
                    grade: "A",
                },
                {
                    num: "6.1903",
                    name: "Low-Level Programming with C and Assembly",
                    desc: "C programming, assembly language, computer organization, memory hierarchy, performance optimization.",
                    grade: "A",
                },
                {
                    num: "6.1210",
                    name: "Introduction to Algorithms",
                    desc: "Data structures and algorithms. Sorting, searching, graph algorithms, dynamic programming.",
                    grade: "A",
                },
                {
                    num: "6.9600",
                    name: "Mobile Autonomous Systems Laboratory",
                    desc: "Full-stack hardware for autonomous mobile robots. Computer vision, path planning, sensor fusion, control systems, embedded systems, mechanical design. 1st place in final competition. Teaching assistant for 2026 course.",
                    grade: "Pass",
                },
                {
                    num: "6.1200",
                    name: "Mathematics for Computer Science",
                    desc: "Discrete math, probability, graph theory, and too many induction proofs.",
                    grade: "A",
                },
                {
                    num: "6.3000",
                    name: "Signal Processing",
                    desc: "All-you-can-eat fourier transforms.",
                    grade: "A",
                },
                {
                    num: "6.1010",
                    name: "Fundamentals of Programming",
                    desc: "Garden variety Python programming. Clean code and unit tests.",
                    grade: "A+",
                },
                {
                    num: "3.091",
                    name: "Introduction to Solid State Chemistry",
                    desc: "Crystal structures, band theory, semiconductors, and other solid state fundamentals. Was pretty useful as background for research in materials science.",
                    grade: "A",
                }
            ]
        }
    }
);

let humanities = new Vue(
    {
        el: '#humanities',
        data: {
            classes: [
                {
                    num: "21W.778",
                    name: "Science Journalism",
                    desc: "Technical science for a general audience. I got to interview some really cool people and published articles on topics ranging from deep brain stimulation to reinforcement learning.",
                    grade: "A-",
                },
                {
                    num: "21M.421",
                    name: "MIT Symphony Orchestra",
                    desc: "Violin performance in a full symphony orchestra. My favorite piece was the Enigma Variations by Elgar.",
                    grade: "A",
                },
                {
                    num: "21M.030",
                    name: "Musics of the World",
                    desc: "Ethnomusicological survey of global musical traditions, from African drumming to Indian classical music to Indonesian gamelan.",
                    grade: "A",
                },
                {
                    num: "3.985",
                    name: "Archaeological Science",
                    desc: "Archaeology as an anthropological science. 14C dating, ice core and palynological analysis, GIS and other remote sensing techniques for site location, organic residue analysis.",
                    grade: "A",
                },
                {
                    num: "21M.370",
                    name: "Digital Instrument Design",
                    desc: "The intersection of hardware, software, user experience (UI/UX), and musical expression. Design, construction, and performance of custom electronic instruments and synthesizers."
                },
                {
                    num: "STS.004",
                    name: "Intersections: Science, Technology, and the World",
                    desc: "Introduction to the history of science and technology, and their interactions with society and politics."
                }
            ]
        }
    }
);

let footer = new Vue({
    el: '#footer',
    data:
    {
        currentYear: new Date().getUTCFullYear()
    }
});