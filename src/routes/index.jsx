// index.jsx

import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import "./index.css"

import { Helmet } from "react-helmet-async";

import heroImage from "../assets/images/hero-image.jpg";
import projectTempImg from "../assets/images/project-temp.jpg";

import { VscLocation } from "react-icons/vsc";
import { FiGithub } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
              {/* <FiGithub id="github-icon" /><a href="https://github.com/swebb-dev" target="_blank" rel="noopener noreferrer"><p>GitHub</p></a> */ /* Maybe I just put the github icon elsewhere. */}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce.
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
                  <p>This is some hidden text for the first education entry.</p>
                  <div class="hidden-text-badge-wrapper">
                    <div class="hidden-text-badge">
                      <p>C/C++ Development</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>PCB Design</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>PCB Assembly</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class={`education-entry${openItems["edu-2"] ? " open" : ""}`}
                onClick={() => toggleItem("edu-2")}>

                <IoIosArrowDown id="down-arrow-2" class="down-arrow" />

                <h3>B.S. in Computer Engineering</h3>
                <p>University of Colorado Boulder</p>
                <p>Graduated: May 2026</p>

                <div class="hidden-text">
                  <p>This is some hidden text for the second education entry.</p>
                  <div class="hidden-text-badge-wrapper">
                    <div class="hidden-text-badge">
                      <p>Python Development</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>Circuit Design</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>Waveform Analysis</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>ARM/NIOS-II Development</p>
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
                  <p>This is some hidden text for the third education entry.</p>
                  <div class="hidden-text-badge-wrapper">
                    <div class="hidden-text-badge">
                      <p>Quantum Mechanics</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>Python Simulations</p>
                    </div>
                    <div class="hidden-text-badge">
                      <p>Electromagnetism</p>
                    </div>
                  </div>
                </div>
              </div>

            </div> 
          </div>
        </div>

        {/* 

        Current Section Order/Ideas:
        
          Hero
          About
          Education
          Projects
          Resume
          Experience
          Contact

        */}

        <div id="content-wrapper">
          <div id="projects" class="main-section stacked-section">
            
            <div class="section-header">
              <h2>Projects</h2>
            </div>

            <div class="section-content">

              <div class="projects-wrapper">
                <div class="project-entry">
                  <img src={projectTempImg} alt="" />
                  <div class="project-text">
                    <h3>Project 1</h3>
                  </div>
                  <div class="project-hidden-text">
                    <p>This is a description of Project 1.</p>
                  </div>
                </div>

                <div class="project-entry">
                  <img src={projectTempImg} alt="" />
                  <div class="project-text">
                    <h3>Project 2</h3>
                  </div>
                  <div class="project-hidden-text">
                    <p>This is a description of Project 2.</p>
                  </div>
                </div>

                <div class="project-entry">
                  <img src={projectTempImg} alt="" />
                  <div class="project-text">
                    <h3>Project 3</h3>
                  </div>
                  <div class="project-hidden-text">
                    <p>This is a description of Project 3.</p>
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

              

            </div> 
          </div>
        </div>
      </div>


      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <p>sss</p>
    </main>
  </>
  );
}
