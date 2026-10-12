Vue.component('panel-list', {
    props: ['panels'],
    template: `
    <div class="card-grid">
        <div v-for="panel in panels" data-aos="flip-up" data-aos-anchor-placement="center-bottom">
            <div class="card">
                <div class="card-img" v-if="panel.image" v-bind:style="'background-image:url(img/' + panel.image + ')'"></div>
                <div class="card-body">
                    <a v-bind:href="'http://'+panel.link" target="_blank" v-if="panel.link">{{ panel.name }}</a>
                    <a v-if="!panel.link">{{ panel.name }}</a>
                    <p v-if="panel.subtitle" class="card-body-subtitle">{{ panel.subtitle }}</p>
                    <p v-html = "panel.description"></p>
                </div>
            </div>
        </div>
    </div>`
});

Vue.component('item-showcase', {
    props: ['items'],
    template: `
    <div class="showcase-grid">
        <div v-for="(item, index) in items" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <div class="showcase-item" v-bind:class="{'reverse': index % 2 == 1}">
                <div class="showcase-img" v-if="item.image" v-bind:style="'background-image:url(img/' + item.image + ')'"></div>
                <div class="showcase-body">
                    <a v-bind:href="'http://'+item.link" target="_blank" v-if="item.link"><h3>{{ item.name }}</h3></a>
                    <a v-if="!item.link"><h3>{{ item.name }}</h3></a>
                    <p v-if="item.subtitle" style="color: gray; margin: 5px 0px">{{ item.subtitle }}</p>
                    <p v-html = "item.description"></p>
                    <div v-if="item.links">
                        <a v-for="link in item.links" v-bind:href="'http://'+link.link" target="_blank" class="showcase-link">
                            {{ link.name }}
                            <span>&#8599;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
});

let proj_showcase = new Vue(
{
    el: '#projects-showcase',
    data:
    {
        items: [
            // {
            //     name: "Flying Programmable Gate Array",
            //     subtitle: "FPGA on a drone",
            //     description: "I'm designing and building a custom flight computer based around a Xilinx Spartan-7 FPGA. The system features onboard sensor fusion, closed-loop control, and optical flow for lateral position tracking. The FPGA architecture is optimized for low-latency real-time processing, with dedicated hardware modules for sensor interfacing and control algorithms.",
            //     link: "github.com/knosmos/fpga-drone",
            //     image: "fpga-drone.jpg",
            // },
            {
                name: "Grate Gatsby",
                subtitle: "Tunable MEMS diffraction grating",
                description: "We designed and fabricated a tunable optical diffraction grating based on MEMS comb-drive electrostatic actuation. The device was built on a 10-micron SOI wafer with a 3-micron DRIE process, and can dynamically adjust its diffraction properties for applications in spectroscopy and beam steering. This tiny chip took like a hundred hours of fabrication and $5k of MIT.nano resources to make.",
                link: "github.com/knosmos/grate-gatsby",
                image: "grate-gatsby-chip.jpg",
                links: [
                    {
                        name: "Technical Paper",
                        link: "jieruei.github.io/assets/grate-gatsby.pdf"
                    },
                    {
                        name: "Project Repository",
                        link: "github.com/knosmos/grate-gatsby"
                    },
                    {
                        name: "Project Presentation",
                        link: "docs.google.com/presentation/d/e/2PACX-1vQXB0M1xmewHRNvFU4T3vgQ8k_zZIwviEbwVnmHmlpDbTlaOk5E5B1BzpE7vICLoAxJymx_KQaP-qTi/pub?start=false&loop=false&delayms=3000"
                    }
                ]
            },
            {
                name: "An Image is Worth 16×16 Tiles",
                subtitle: "Multicore parallel computer vision accelerator",
                description: "We developed a quadcore processor specialized for computer vision workloads. It uses parallel processor cores, takes advantage of massively parallel combinational memory reads, and exploits parallelizable properties of image processing tasks. We implemented this system on a Spartan-7 FPGA and validated performance on multiple computer vision pipelines, demonstrating ~17x speedup.",
                link: "github.com/knosmos/peep",
                image: "peep.png",
                links: [
                    {
                        name: "Project Repository",
                        link: "github.com/knosmos/peep"
                    },
                    {
                        name: "Technical Paper",
                        link: "jieruei.github.io/assets/peep.pdf"
                    }
                ]
            },
            {
                name: "MapIT",
                subtitle: "Mapping MIT's many labyrinths",
                description: "As part of the AppDev@MIT initiative, I lead development of a room-scale searchable indoor map of the entire MIT campus. It's used by hundreds of members of the MIT community, leveraging computer vision to analyze 900 floorplans and 40000+ rooms. We built it with Vite/Express/React, and deployed it with Jenkins and Docker on AWS EC2.",
                link: "mitmapit.org",
                image: "mapit-2.png",
                links: [
                    {
                        name: "Project Website",
                        link: "mitmapit.org"
                    },
                    {
                        name: "Developer Blog",
                        link: "appdev-blog.vercel.app/posts/mapit-labeling"
                    }
                ]
            },
            {
                name: "Wirehead",
                subtitle: "2nd Place, HackMIT",
                description: "Built in 24 hours, Wirehead is an end-to-end PCB design automation tool with LLM RAG datasheet analyses and an AI-informed constrained mixed-integer linear programming layout engine. It's designed to drastically reduce the time required to design simple custom PCBs for hardware hackers and embedded systems engineers.",
                link: "plume.hackmit.org/project/wmcby-lozhz-hqeuj-njzoc",
                image: "hackmit_win.jpg",
                links: [
                    {
                        name: "Project Page",
                        link: "plume.hackmit.org/project/wmcby-lozhz-hqeuj-njzoc"
                    },
                    {
                        name: "Project Repository",
                        link: "github.com/knosmos/wirehead"
                    }
                ]
            },
            {
                name: "Poser",
                subtitle: "Robotic manipulation of jointed objects",
                description: "We developed a bimanual robotic system capable of manipulating jointed objects, such as articulated humanoid mannequins. It runs RGBD pose estimation, antipodal grasp computation, compliant controllers, and trajectory optimization algorithms to execute precise manipulation tasks.",
                image: "poser.png",
                links: [
                    {
                        name: "Technical Paper",
                        link: "jieruei.github.io/assets/poser.pdf"
                    },
                    {
                        name: "Project Video",
                        link: "youtube.com/watch?v=0zt8CV0h6kI"
                    }
                ]
            },
            {
                name: "TESS is LIT",
                subtitle: "Exoplanet triage with few-shot transformers",
                description: "Vision transformers typically require millions of training examples. This makes them difficult to apply to tasks like TESS exoplanet detection, where only a tiny fraction of the training data may contain objects of interest. We propose Loss Informed Tuning (LIT), a novel fine-tuning method that leverages reconstruction loss as a signal to improve few-shot learning performance.",
                image: "tess-data.png",
                links: [
                    {
                        name: "Writeup",
                        link: "knosmos.github.io/tess-is-lit"
                    }
                ]
            },
            {
                name: "Radian Mk II",
                subtitle: "2nd Place, Robocup World Championships",
                description: "An autonomous soccer robot with realtime omnidirectional infrared ball tracking, precision scoring algorithms, and Bluetooth-enabled multi-agent strategizing and coordination.",
                image: "radian_2023.jpg",
                link: "soccer-robotics.github.io",
                links: [
                    {
                        name: "Team Website",
                        link: "soccer-robotics.github.io"
                    },
                    {
                        name: "Technical Paper",
                        link: "soccer-robotics.github.io/assets/Radian_2023_TDP.pdf"
                    }
                ]
            },
        ]
    }
});

let proj = new Vue(
{
    el: '#projects-grid',
    data:
    {
        projects: [
            {
                name: "Turtles All The Way Down",
                description: "Recursive pixel art pattern built with 5-micron photolithography on silicon wafer",
                image: "turtle-3view.jpg",
            },
            // {
            //     name: "Grate Gatsby",
            //     description: "Tunable optical diffraction grating with MEMS comb-drive electrostatic actuation built with a 10-micron SOI process",
            //     image: "grate-gatsby.jpg",
            //     link: "github.com/knosmos/grate-gatsby"
            // },
            {
                name: "Sphinx Flight Computer",
                description: "STM32H750 flight computer and power system for VTVL landers, with integrated IMU, altimeter, GPS, and LoRa communications",
                image: "sphinx_integrated.jpg"
            },
            // {
            //     name: "CPT Practice Platform",
            //     description: "Platform for hosting Kahoot-style competitive programming tournaments with custom problems, 1000+ solution submissions, and 15k+ monthly page views",
            //     link: "phscpt.pythonanywhere.com",
            //     image: "cptplatform.png"
            // },
            {
                name: "Please Listen Carefully As Our Menu Options Have Changed",
                description: "Metasurface varifocal acoustic lensing Keplerian telescope for directional audio projection",
                image: "please-listen.jpg",
                link: "docs.google.com/presentation/d/e/2PACX-1vSD6SdgqdLQ3Ox6F1usWn3tKaqY73g3L0eQCw3PgcIIRVDfBaj9C7lA-s6tVQZHMIdgNfg4yQmHzRzX/pub?start=false&loop=false&delayms=3000&slide=id.g39195cc7aa6_0_358"
            },
            {
                name: "Please Read Instructions Carefully Before Use",
                description: "MakeMIT 1st Place (Entertainment): Automatic lens system with intelligent target tracking and holographic feedback",
                image: "please-read.jpg",
                link: "devpost.com/software/please-read-instructions-carefully-before-use"
            },
            {
                name: "Robowordle",
                description: "Using computer vision and a 3D printer to robotically play a phone-based word game",
                link: "github.com/knosmos/robowordle",
                image: "wordle_thumb.png"
            },
            {
                name: "CMDPXL",
                description: "Terminal-based image and pixel art editor. Somehow my most popular project ever. Featured by GitHub.",
                link: "github.com/knosmos/cmdpxl",
                image: "cmdpxl.png"
            },
            {
                name: "Stack Overflow",
                description: "Self-driving block-stacking robot: winner of MIT Mobile Autonomous Systems Laboratory 2025",
                link: "maslab.mit.edu/2025/wiki/team08",
                image: "maslab.png"
            },
            // {
            //     name: "Rhythmvision",
            //     description: "Rhythm game with browser ML-driven pose estimation",
            //     link: "knosmos.github.io/rhythmvision",
            //     image: "rhythmvision3.png"
            // },
            {
                name: "Hummingbird",
                description: "A custom STM32-based flight controller for autonomous gliders",
                link: "github.com/knosmos/hummingbird",
                image: "hummingbird-pcb.jpg"
            },
            {
                name: "DC3Modifier",
                description: "One-click machine learning crystal classification for atomistic simulations",
                link: "github.com/DC3-Freitas/DC3-package",
                image: "dc3-ovito.png"
            },
        ]
    }
});

let exp_showcase = new Vue(
{
    el: '#experience-showcase',
    data:
    {
        items: [
            {
                name: 'Citadel Securities',
                subtitle: 'Software Engineering Intern',
                description: "Modern high-frequency trading is so fast that CPUs can't keep up: the operating system gets in the way. Instead, ultra-low-latency trading systems are built on FPGAs that process market data and execute trades on the order of nanoseconds. I work on some of the systems and optimization algorithms that make this kind of trading possible.",
                link: 'www.citadelsecurities.com',
                image: '425park.jpg'
            },
            {
                name: 'Freitas Research Group',
                subtitle: 'Undergraduate Researcher',
                description: "I leverage E(3)-equivariant graph convolutional neural networks to characterize chromium diffusion rates in advanced metal 3D printing, and wield SLURM to run large-scale simulations on high-performance compute clusters. Pictured is a visualization of our GNN-based phase prediction and interface tracking system. Our prior work on graph neural networks for crystal structure classification ran 10x faster and with 11% higher accuracy than existing data-driven methods.",
                link: 'freitas.mit.edu',
                image: 'freitas-crystal-growth.gif',
                links: [
                    {
                        name: "Group Website",
                        link: "freitas.mit.edu"
                    },
                ]
            },
            {
                name: "Space Propulsion Laboratory",
                subtitle: "Software Engineer",
                description: "I develop mission control software and conduct S-band SDR testing for STEP-1, a CubeSat demonstrator of a novel electrospray propulsion engine. Closer to the hardware, I'm developing high-redundancy firmware for STEP-1's onboard payload controller to interface with sensors and propulsion systems.",
                image: "step1.jpg",
                link: 'spacepropulsion.mit.edu',
                links: [
                    {
                        name: "Group Website",
                        link: "spacepropulsion.mit.edu"
                    }
                ]
            },
            {
                name: 'World Wildlife Fund',
                subtitle: 'AI/ML Intern',
                description: "I worked with WWF's Senior Director of Innovation Startups to build the world's first ML model for projecting climate impacts on global livestock production. Alongside WWF's lead data scientist, I also developed GCP cloud infrastructure with Terraform, pipelining underwater sensor data from across Mexico for a Google-backed mangrove monitoring project.",
                link: 'wwf.panda.org/',
                image: 'wwf2.jpg',
                links: [
                    {
                        name: "Article in MIT PKG Center",
                        link: "pkgcenter.mit.edu/2025/09/19/social-impact-internships-jieruei-chang-28/"
                    },
                    {
                        name: "Technical Report",
                        link: "jieruei.github.io/assets/cattlelogue.pdf"
                    }
                ]
            },
            {
                name: 'MIT Rocket Team',
                subtitle: 'Avionics Lead',
                description: "I lead a team of four in the development of an STM32 flight computer and firmware for SPHINX, an autonomous VTVL propulsive lander pathfinder. I also design distributed extensible CANbus sensor/actuator networks for control and instrumentation on a thrust-vectoring liquid-fueled engine.",
                link: 'rocketry.mit.edu',
                image: 'papyrus.webp',
                links: [
                    {
                        name: "Team Website",
                        link: "rocketry.mit.edu"
                    },
                ]
            },
            {
                name: 'Appier',
                subtitle: 'Software Engineering Intern (Backend)',
                description: "On Appier's AIXON Backend Engineering team, I leveraged zero-shot machine learning, computer vision, and retrieval-augmented generation pipelines to build website characterization systems. I gained lots of free snacks and a taste of work in a fast-paced industry environment.",
                link: 'www.appier.com/en/products/aixon',
                image: 'appier2.jpg',
                links: [
                    {
                        name: "Final Presentation",
                        link: "jieruei.github.io/assets/appier.pdf"
                    }
                ]
            },
            {
                name: 'Applied Computing and Multimedia Lab',
                subtitle: 'Research Intern',
                description: 'I worked on semi-supervised techniques to help diagnose respiratory diseases under the guidance of Prof. Ching-Chun Huang. Leveraging time-series RNNs and twin-network cross supervision, my model could produce accurate respiratory sound classifications even if only 1/16 of its dataset was labeled. "Semi-Supervised Pulmonary Auscultation Analysis with Cross Pseudo Supervision" was a best paper finalist at the 2023 IEEE MIT Undergraduate Research Technology Conference.',
                link: 'jieruei.github.io/assets/PulmonaryAuscultationPaper.pdf',
                image: 'research.png',
                links: [
                    {
                        name: "Paper",
                        link: "ieeexplore.ieee.org/document/10535006"
                    },
                ]
            }
        ]
    }
});

let exp = new Vue(
{
    el: '#experience-grid',
    data:
    {
        items: [
            {
                name: 'MIT Arcturus',
                subtitle: 'Software Engineer',
                description: "On the autonomy team, I led the development of a LiDAR-based autonomous boat docking system using point cloud registration, with ROS integration and Gazebo simulations.",
                link: 'arcturus.mit.edu',
                image: 'arcturus.jpg'
            },
            {
                name: 'Design Build Fly',
                subtitle: 'Avionics Lead',
                description: "On MIT's aircraft build team, I worked on avionics systems, designed a custom STM32-based flight controller for autonomous navigation, and got carbon fiber dust all over the shop floor.",
                link: 'web.mit.edu/dbf/www/',
                image: 'dbf_proto2.jpg'
            },
            {
                name: 'Princeton Autonomous Vehicle Engineering',
                subtitle: 'GPS/RC + Computer Vision Specialist',
                description: 'On Princeton University\'s PAVE team, I built GPS/remote-control systems and designed high-performance computer vision models for autonomous electric boat navigation.',
                link: 'princetonelectricspeedboating.com',
                image: 'pave_splash2.jpg'
            },
        ]
    }
});

let classes = new Vue(
    {
        el: '#classes',
        data: {
            classes: [
                {
                    num: "6.2050",
                    name: "Digital Systems Laboratory",
                    desc: "FPGA-based digital system design using SystemVerilog. As a final project, we chose to tackle an image processing GPU with a four-stage highly-customized RISC core architecture on a Spartan-7. Probably the most intensive but interesting class I've taken at MIT.",
                },
                {
                    num: "6.2600",
                    name: "Micro/Nano Processing Technology",
                    desc: "Wet and dry etching, chemical and physical deposition, lithography, thermal processes, and device and materials characterization. Working in the world's most advanced university cleanroom is an insanely cool and exhausting and rewarding experience.",
                },
                {
                    num: "6.2080",
                    name: "Semiconductor Electronic Circuits",
                    desc: "Chip design class. Design, analysis, and layout of analog circuits. Diodes, transistors, amplifiers, op-amps. The tooling is awful but you do get to design an actual chip for fabrication by TSMC.",
                },
                {
                    num: "6.5951",
                    name: "Secure Hardware Design",
                    desc: "AKA malware class. Attack hardware on the microarchitectural level. Cache side channels, speculative execution, Rowhammer, physical attacks, formal verification."
                }
            ]
        },
    }
)

let footer = new Vue({
    el: '#footer',
    data:
    {
        currentYear: new Date().getUTCFullYear()
    }
});

let about = new Vue({
    el: '#mit-text',
    data:
    {
        mitText: ""
    }
})

function rand(a) {
    return a[Math.floor(Math.random() * a.length)];
}

function updateMITText() {
    let locations = ["Maine", "Missouri", "Montana", "Madrid", "Malaysia", "Mexico", "Mongolia", "Madagascar", "Martian", "Marsupial", "Minneapolis"];
    let buildings = ["Institute", "Igloo", "Icehouse", "Infirmary", "Incubator", "Incinerator", "Inquisition"];
    let specialties = ["Trucking", "Telemarketing", "Trombones", "Topography", "Trainspotting", "Trigonometry", "Tailors", "Tetris", "Tofu", "Tetrapods", "Tetrahedra", "Teacups"];
    about.mitText = `${rand(locations)} ${rand(buildings)} of ${rand(specialties)}`;
}

updateMITText();
let textHidden = false;

document.addEventListener("scroll", function() {
    if ((document.getElementById("about").getBoundingClientRect().bottom < 0 
        || document.getElementById("mit-text").getBoundingClientRect().top > window.innerHeight)
    ) {
        if (!textHidden) {
            updateMITText();
            textHidden = true;
        }
    }
    else {
        textHidden = false;
    }
});