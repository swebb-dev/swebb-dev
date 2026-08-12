import "./index.css"

import { createFileRoute } from '@tanstack/react-router'

import { Helmet } from "react-helmet-async";

import project1Img from "../assets/images/burn-in-board.jpg";
import project2Img from "../assets/images/8051-board.jpg";
import project3Img from "../assets/images/arduino-board.jpg";

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {
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
  
        </div>
      </main>
    </>
  );
}
