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
                  This page is currently being worked on.
                </p>

                <p>
                  
                </p>
  
              </div> 
            </div>
          </div>
  
        </div>
      </main>
    </>
  );
}
