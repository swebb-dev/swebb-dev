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
                  Even since I was a kid, I always had a curiousity for how things worked.
                </p>

                <p>
                  I started out as a software kid. I learned Python when I was eight and figured I'd probably spend my career writing software. Somewhere along the way, however, I got more interested in what was happening deeper inside the system. Questions such as 'How can my computer handle multiple applications at the same time?' and 'Why is RAM so much faster than my HDD?' arose, sparking my interest in Hardware, Firmware, and eventually Embedded Systems.
                </p>

                <p>
                  Today, that curiosity is what I enjoy most about my field. Being able to work across the whole system always ensures that there's always something new to learn. I like starting with a vague idea and a rough back-of-the-napkin sketch, refining a circuit diagram, designing the board, writing the firmware, and finally getting the whole system to behave as expected. I've found that I'm happiest when I can dig into a problem from multiple angles, rather than being confined to just one part of the stack.
                </p>

                <p>
                  My Capstone Project involved designing an automated testing apparatus for Infleqtion's rubidium atom-trapping chips. Although my official title was 'Hardware Lead,' I ended up fully designing the circuits, boards, and low-level software for the project, as well as leading the project's development in general. We ended up receiving the 'Quantum Forge Innovation Award' for our work.
                </p>
  
                <p>
                  Outside of engineering, Physics is my second love. I find Condensed Matter Physics, Bose-Einstein Condensates, Aerospace, and Quantum Computing fascinating, and I have a particular soft spot for technology that feels like it's expanding the bubble of human knowledge.
                </p>

              </div> 
            </div>
          </div>
  
        </div>
      </main>
    </>
  );
}
