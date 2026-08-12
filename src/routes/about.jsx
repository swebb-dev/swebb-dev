import "./index.css"

import { createFileRoute } from '@tanstack/react-router'

import { Helmet } from "react-helmet-async";

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
      <Helmet>
        <title>Sean Webb - About</title>
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
  
        </div>
      </main>
    </>
  );
}
