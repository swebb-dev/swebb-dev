import "./index.css"

import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";

import { Helmet } from "react-helmet-async";

import project1Img from "../assets/images/burn-in-board.jpg";
import project1Img2 from "../assets/images/rmap-board.jpg";
import project1Img3 from "../assets/images/daughter-board.jpg";
import project2Img from "../assets/images/8051-board.jpg";
import project3Img from "../assets/images/arduino-board.jpg";

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
    images: [project2Img],
    title: "8051 Multi-Function System",
    description: "This page is currently being worked on.",
    shortdescription: "Shown is a generalized version of an 8051-based Multi-function system. The system has custom support for I2C and SPI interfacing, and a future project utilized this functionality to make a 'Guess Who' game, using a Color LCD display and RFID tags.",
    tags: ["ARM Assembly", "I2C and SPI Drivers", "RFID Interfacing"],
    link: "",
  },
  {
    id: "project-3",
    images: [project3Img],
    title: 'Low Noise "Golden" Arduino',
    description: "This page is currently being worked on.",
    shortdescription: "Shown is version 2 of a custom Arduino. Version 1 focused primarily on getting the lowest noise possible, while Version 2 focused on adding functionality such as precision impedance measurement.",
    tags: ["PCB Design", "Signal Integrity"],
    link: "",
  },
];

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {

  const [openItems, setOpenItems] = useState({});
  const [activeProject, setActiveProject] = useState(null);

  return (
  <>
      <Helmet>
        <title>Sean Webb - Projects</title>
      </Helmet>
      <main>
        <div id="navbar-spacer" />
        <div id="content-wrapper">

          <div id="hero" class="main-section">
  
            <div id="hero-text">
              <h1>Sean Webb</h1>
              <h2>Embedded Systems Engineer</h2>
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

          <ProjectPopup project={activeProject} onClose={() => setActiveProject(null)} />
  
        </div>
      </main>
    </>
  );
}
