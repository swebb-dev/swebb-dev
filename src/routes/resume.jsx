import "./index.css"

import { createFileRoute } from '@tanstack/react-router'

import { Helmet } from "react-helmet-async";
import { Document, Page } from "react-pdf"
import Resume from '../assets/pdfs/Resume.pdf';

import { useState, useRef, useEffect } from "react";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { pdfjs } from "react-pdf"; // not: import pdfjs from "pdfjs-dist"

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const Route = createFileRoute('/resume')({
  component: RouteComponent,
})



function RouteComponent() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(null);
  const containerRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function handleDownload() {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Sean_Webb_Resume.pdf";
    link.click();
  }

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
  <>
      <Helmet>
        <title>Sean Webb - Resume</title>
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
            <div id="resume" class="main-section stacked-section">
              
              <div class="section-header">
                <h2>Resume</h2>
              </div>
  
              <div class="section-content">

                <div id="resume-content" ref={containerRef} style={{ width: "100%" }}>
                  <Document file={Resume} onLoadSuccess={onDocumentLoadSuccess} onLoadError={(err) => console.error("PDF load error:", err)} onClick={handleDownload}>

                    <Page pageNumber={1} width={containerWidth ? Math.min(containerWidth, 800) : undefined} />
                    <div id="resume-spacer" />
                    <Page pageNumber={2} width={containerWidth ? Math.min(containerWidth, 800) : undefined} />

                  </Document>
                </div>
  
              </div> 
            </div>
          </div>
  
        </div>
      </main>
    </>
  );
}
