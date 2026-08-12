// index.jsx

import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import "./index.css"

import { Helmet } from "react-helmet-async";

import heroImage from "../assets/images/hero-image.jpg";
import projectTempImg from "../assets/images/project-temp.jpg";

import project1Img from "../assets/images/burn-in-board.jpg";
import project2Img from "../assets/images/8051-board.jpg";
import project3Img from "../assets/images/arduino-board.jpg";

import { VscLocation } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";

import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  const [openItems, setOpenItems] = useState({});

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

              <div class={`education-entry${openItems["edu-1"] ? " open" : ""}`}
                onClick={() => toggleItem("edu-1")}>

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

              <div class={`education-entry${openItems["edu-2"] ? " open" : ""}`}
                onClick={() => toggleItem("edu-2")}>

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

              <div class={`education-entry${openItems["edu-3"] ? " open" : ""}`}
                onClick={() => toggleItem("edu-3")}>

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
                <div class="project-entry">
                  <img src={project1Img} alt="" />
                  <div class="project-text">
                    <h3>Automated Chip Testing (Infleqtion Capstone)</h3>
                  </div>
                  <div class="project-hidden-text">
                    <p>Shown is one of two boards we used to do automated testing on an Infleqtion Atom Chip. This board did current burn-in testing, sending high current through the chip traces for short periods and measuring the heat dissipation through the chip.</p>
                  </div>
                </div>

                <div class="project-entry">
                  <img src={project2Img} alt="" />
                  <div class="project-text">
                    <h3>8051 Multi-Function System</h3>
                  </div>
                  <div class="project-hidden-text">
                    <p>Shown is a generalized version of an 8051-based Multi-function system. The system has custom support for I2C and SPI interfacing, and a future project utilized this functionality to make a 'Guess Who' game, using a Color LCD display and RFID tags.</p>
                  </div>
                </div>

                <div class="project-entry">
                  <img src={project3Img} alt="" />
                  <div class="project-text">
                    <h3>Low Noise "Golden" Arduino</h3>
                  </div>
                  <div class="project-hidden-text">
                    <p>Shown is version 2 of a custom Arduino. Version 1 focused primarily on getting the lowest noise possible, while Version 2 focused on adding functionality such as precision impedance measurement.</p>
                  </div>
                </div>
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

      </div>
    </main>
  </>
  );
}
