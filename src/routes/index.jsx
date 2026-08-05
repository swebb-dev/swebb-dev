// index.jsx

import { createFileRoute } from '@tanstack/react-router'
import "./index.css"

import { Helmet } from "react-helmet-async";

import heroImage from "../assets/images/hero-image.jpg";
import { VscLocation } from "react-icons/vsc";
import { FiGithub } from "react-icons/fi";

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
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

        {/* 

        Current Section Order/Ideas:
        
          Hero
          About
          Education
          Projects
          Skills
          Resume
          Experience
          Contact

        */}

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
