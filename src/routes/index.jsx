// index.jsx

import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import "./index.css"

import { Helmet } from "react-helmet-async";

import heroImage from "../assets/images/hero-image.jpg";
import projectTempImg from "../assets/images/project-temp.jpg";

import project1Img from "../assets/images/burn-in-board.jpg";
import project1Img2 from "../assets/images/rmap-board.jpg";
import project1Img3 from "../assets/images/daughter-board.jpg";
import project2Img from "../assets/images/8051-board.jpg";
import project2Img2 from "../assets/images/8051-board-back.jpg";
import project3Img from "../assets/images/arduino-board.jpg";
import project3Img2 from "../assets/images/arduino-board-2.jpg";

import { VscLocation } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";

import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";

import { ProjectPopup } from "../assets/Popup/index.jsx";

const projects = [
  {
    id: "project-1",
    images: [project1Img, project1Img2, project1Img3],
    title: "Automated Chip Testing (Infleqtion Capstone)",
    description: "My senior capstone project was to create an automated chip testing apparatus to quickly and efficiently test Infleqtion's industry atom-trapping chips. Above are the three boards I designed and assembled for this project. All circuit design, hardware testing, PCB design/assembly, and Firmware was done entirely by me. The project uses a Raspberry Pi to interface with all of the hardware components.\n\nThe first board sends a high current into different chip traces on the test chip in short pulses, and using a thermal camera, we can visualize the heat dissipation through the chip in order to find any cracks in the silicon. One challenge with this process is that the bottom of the chip is not coated in Gold (Copper instead). This is because Gold reacts with the atom that's being trapped (Rubidium), and as a result, the chip will oxidize during a high current load. To get around this issue, the chip is mounted and Forming Gas (or Nitrogen) is constantly fed through the underside of the chip during this process.\n\nThe second board uses variable current sources to accurately map out a wide range of impedances (roughly 1Ω-3MΩ with <1% error across that range) between traces on the chip. This was used to ensure that nothing was shorted or open on the chip, and that each electrical connection was working as expected. The firmware automatically tries the lowest current source possible, and only steps up the current if it's safe to do so. Measurement takes roughly 0.25 seconds for each chip trace, much faster than the previous manual method.\n\nThe third board is a simple daughter board that connects the chip to the other boards, which is positioned to slot above the current burn-in apparatus.",
    shortdescription: "Shown is one of two boards we used to do automated testing on an Infleqtion Atom Chip. This board did current burn-in testing, sending high current through the chip traces for short periods and measuring the heat dissipation through the chip.",
    tags: ["Firmware", "PCB Design", "PCB Assembly", "Test Automation"],
    link: "",
  },
  {
    id: "project-2",
    images: [project2Img, project2Img2],
    title: "8051 Multi-Function System",
    description: "This project is a proof of concept for getting an old architecture to be compatible with newer hardware, as well as being a personal introduction to non-STM ARM devices. The pictures shown include only the barebones functionality of the system (Memory Interfacing, I2C, SPI, and Serial Devices working) and the only components attached are an old LCD display and a modern ADC (Analog to Digital Converter). Later, I added RFID and a newer touchscreen LCD and created a proof of concept for a 'Guess Who' game utilizing the hardware.\n\nAll the code is available on the GitHub linked below!",
    shortdescription: "Shown is a generalized version of an 8051-based Multi-function system. The system has custom support for I2C and SPI interfacing, and a future project utilized this functionality to make a 'Guess Who' game, using a Color LCD display and RFID tags.",
    tags: ["ARM Assembly", "I2C and SPI Drivers", "RFID Interfacing"],
    link: "",
  },
  {
    id: "project-3",
    images: [project3Img, project3Img2],
    title: 'Low Noise "Golden" Arduino',
    description: "This was one of my first PCB Projects. It is an attempt at mirroring the functionality of the commercial Arduino UNO. For previous versions of the project, I focused more on signal integrity and maximizing its use case. In that version, I achieved much less noise than the off-the-shelf Arduino, while offering the same functionality. In this version, the focus shifted to offering on-board functionality, such as precision Impedance Measurement, Smart LEDs, and a buzzer!",
    shortdescription: "Shown is version 2 of a custom Arduino. Version 1 focused primarily on getting the lowest noise possible, while Version 2 focused on adding functionality such as precision impedance measurement.",
    tags: ["PCB Design", "PCB Assembly", "Signal Integrity"],
    link: "",
  },
];

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  const [openItems, setOpenItems] = useState({});
  const [activeProject, setActiveProject] = useState(null);

  const toggleItem = (id) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const contactEmail = ["sean.s.webb", "proton.me"].join("@");

  return (
  <>
    <Helmet>
      <title>Sean Webb - Home</title>
    </Helmet>
    <main>
      <div id="navbar-spacer" />
      <div id="content-wrapper">
        <div id="hero" class="main-section">

          <div id="hero-image-wrapper">
            <img src={heroImage} alt="Hero Image" id="hero-image" />
          </div>

          <div id="hero-text">
            <h1>Sean Webb</h1>
            <h2>Embedded Systems Engineer</h2>
            <div id="hero-buttons">
              <div class="badge">
                <VscLocation id="location-icon" />
                <p>Longmont, CO</p>
              </div>
            </div>
          </div>

        </div>

        <div id="content-wrapper">
          <div id="about" class="main-section stacked-section">
            
            <div class="section-header">
              <h2>About</h2>
            </div>

            <div class="section-content">

              <p>
                I'm an Embedded Systems Engineering graduate student at CU Boulder. I have experience in firmware, PCB design, hardware validation, and bare-metal software. I enjoy working across the full stack of system development, and I have a growing interest in developing systems for research applications. My recent work includes developing automated testing equipment for atom trapping chips through my industry-sponsored capstone project with Infleqtion.
              </p>

              <p>
                Outside of projects, I enjoy exploring new technologies and diving into the details of how hardware and software interact. I also enjoy learning about cutting-edge physics, specifically relating to Condensed Matter Physics, Bose-Einstein Condensates, and Quantum Computing.
              </p>

            </div> 
          </div>
        </div>

        <div id="content-wrapper">
          <div id="education" class="main-section stacked-section">
            
            <div class="section-header">
              <h2>Education</h2>
            </div>

            <div class="section-content">

              <div class={`education-entry${openItems["edu-1"] ? " open" : ""}`} onClick={() => toggleItem("edu-1")}>

                <IoIosArrowDown id="down-arrow-1" class="down-arrow" />
                
                <h3>M.S. in Electrical Engineering (Embedded Systems Path)</h3>
                <p>University of Colorado Boulder</p>
                <p>Expected Graduation: May 2027</p>

                <div class="hidden-text">
                  <p>Coursework focuses on advanced Embedded Software Development, FPGA Development, PCB Design focusing on Signal Integrity, and Low-Power Embedded System Architecture.</p>
                  <div class="hidden-text-badge-wrapper">
                    <div class="hidden-text-badge">
                      <p>Embedded Systems</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>ARM Cortex-M/STM32</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>PCB Design/Assembly</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>FPGA Design</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>Low-Level Firmware</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class={`education-entry${openItems["edu-2"] ? " open" : ""}`} onClick={() => toggleItem("edu-2")}>

                <IoIosArrowDown id="down-arrow-2" class="down-arrow" />

                <h3>B.S. in Electrical and Computer Engineering</h3>
                <p>University of Colorado Boulder</p>
                <p>Graduated: May 2026</p>

                <div class="hidden-text">
                  <p>Developed a strong foundation in Embedded Systems, Computer Architecture, Operating Systems, and Low-Level Software Development. Completed an industry-sponsored capstone project with Infleqtion that focused on automated testing for neutral atom trapping hardware.</p>
                  <div class="hidden-text-badge-wrapper">
                    <div class="hidden-text-badge">
                      <p>C/C++ Development</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>Computer Architecture</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>Linux Administration</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>Verilog/SystemVerilog</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>Operating Systems</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class={`education-entry${openItems["edu-3"] ? " open" : ""}`} onClick={() => toggleItem("edu-3")}>

                <IoIosArrowDown id="down-arrow-3" class="down-arrow" />

                <h3>B.S. in Engineering Physics</h3>
                <p>University of Colorado Boulder</p>
                <p>Graduated: May 2026</p>

                <div class="hidden-text">
                  <p>Combined with a Quantum Engineering Minor, I developed a rigorous background in Electromagnetism and Quantum Mechanics. This led to opportunities to work with companies in the precision measurement space.</p>
                  <div class="hidden-text-badge-wrapper">
                    <div class="hidden-text-badge">
                      <p>Quantum Mechanics/Hardware</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>Mathematical Modeling/Simulations (Python)</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>Electromagnetism</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>Classical Mechanics</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>Chaotic Dynamics</p>
                    </div>
                  </div>
                </div>
              </div>

            </div> 
          </div>
        </div>

        <div id="content-wrapper">
        <div id="projects" class="main-section stacked-section">

          <div class="section-header">
            <h2>Projects</h2>
          </div>

          <div class="section-content">

            <div class="projects-wrapper">
              {projects.map((project) => (
                <div class="project-entry" key={project.id} onClick={() => setActiveProject(project)}>
                  <img src={project.images[0]} alt={project.title} />
                  <div class="project-text">
                    <h3>{project.title}</h3>
                  </div>
                  <div class="project-hidden-text">
                    <p>{project.shortdescription}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

        <div id="content-wrapper">
          <div id="experience" class="main-section stacked-section">
            
            <div class="section-header">
              <h2>Experience</h2>
            </div>

            <div class="section-content">

              <div class="experience-section-wrapper">
                <div class="experience-entry">
                  <div class="experience-marker">
                    <span class="experience-dot"></span>
                    <span class="experience-line"></span>
                  </div>
                  <div class="experience-content">
                    <h3>Course Assistant (MCEN 3017 - Circuits and Electronics for Mechanical Engineers)</h3>
                    <h4>University of Colorado, Boulder</h4>
                    <h5>Aug. 2026 - Present</h5>
                    <p>Help students with homework, exam prep, and lab projects, as well as grade assignments and tests.</p>
                  </div>
                </div>

                <div class="experience-entry">
                  <div class="experience-marker">
                    <span class="experience-dot"></span>
                    <span class="experience-line"></span>
                  </div>
                  <div class="experience-content">
                    <h3>Assistant Teacher</h3>
                    <h4>Partnerships for Informal Science Education in the Community (PISEC), Boulder</h4>
                    <h5>Jan. 2025 - May 2025</h5>
                    <p>Connected with local K-12 students to help engage them in inquiry-based science activities centered around physics.</p>
                  </div>
                </div>

                <div class="experience-entry">
                  <div class="experience-marker">
                    <span class="experience-dot"></span>
                    <span class="experience-line"></span>
                  </div>
                  <div class="experience-content">
                    <h3>Student Accountant</h3>
                    <h4>CU Boulder Bookstore, Boulder</h4>
                    <h5>Sep. 2023 - June 2024</h5>
                    <p>Managed billing reconciliation and financial record processing using Excel.</p>
                  </div>
                </div>

                <div class="experience-entry">
                  <div class="experience-marker">
                    <span class="experience-dot"></span>
                    <span class="experience-line"></span>
                  </div>
                  <div class="experience-content">
                    <h3>Cybersecurity Event Developer / Organizer</h3>
                    <h4>Innovation Center, Longmont</h4>
                    <h5>Aug. 2021 - May 2022</h5>
                    <p>Team development using Python, LaTeX, and GitHub.</p>
                  </div>
                </div>

                <div class="experience-entry">
                  <div class="experience-marker">
                    <span class="experience-dot"></span>
                    <span class="experience-line"></span>
                  </div>
                  <div class="experience-content">
                    <h3>AI Chatbot Developer</h3>
                    <h4>Innovation Center, Longmont</h4>
                    <h5>Aug. 2020 - May 2022</h5>
                    <p>Designed and implemented AI Chatbots using IBM Watson for business and nonprofit clients, often communicating with the business owners directly.</p>
                  </div>
                </div>
              </div>

            </div> 
          </div>
        </div>

        <div id="content-wrapper">
          <div id="contact" class="main-section stacked-section">
            
            <div class="section-header">
              <h2>Contact</h2>
            </div>

            <div class="section-content">

              <div class="contact-badges">
                <a class="badge badge-link" href={`mailto:${contactEmail}`}>
                  <FiMail />
                  <p>{contactEmail}</p>
                </a>

                <a class="badge badge-link" href="https://github.com/swebb-dev" target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                  <p>GitHub</p>
                </a>

                <a class="badge badge-link" href="https://www.linkedin.com/in/sean-webb-53930b393/" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin />
                  <p>LinkedIn</p>
                </a>
              </div>

            </div> 
          </div>
        </div>

        <ProjectPopup project={activeProject} onClose={() => setActiveProject(null)} />

      </div>
    </main>
  </>
  );
}
