// Popup/index.jsx

import { useEffect, useState } from "react";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

export function ProjectPopup({ project, onClose }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const images = project.images ?? [];
  const hasMultiple = images.length > 1;

  const prevImage = (e) => {
    e.stopPropagation();
    setImageIndex((i) => (i - 1 + images.length) % images.length);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setImageIndex((i) => (i + 1) % images.length);
  };

  // so it's a little less cumbersome to add new projects
  return (
    <div class="popup-overlay" onClick={onClose}>
      <div class="popup-content" onClick={(e) => e.stopPropagation()}>
        <button class="popup-close" onClick={onClose}>
          <IoClose />
        </button>

        <div class="popup-carousel">
          <img src={images[imageIndex]} alt={`${project.title} ${imageIndex + 1}`} class="popup-image"/>

          {hasMultiple && (
            <>
              <button class="carousel-arrow carousel-arrow-left" onClick={prevImage}>
                <IoChevronBack />
              </button>
              <button class="carousel-arrow carousel-arrow-right" onClick={nextImage}>
                <IoChevronForward />
              </button>

              <div class="carousel-dots">
                {images.map((_, i) => (
                  <span
                    key={i}
                    class={`carousel-dot${i === imageIndex ? " active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setImageIndex(i);
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div class="popup-text">
          <h3>{project.title}</h3>
          <span style={{ whiteSpace: "pre-line" }}>{project.description}</span>

          <div class="tag-link-holder-thing">
            {project.tags?.length > 0 && (
                <div class="popup-tags">
                {project.tags.map((tag) => (
                    <span class="popup-tag" key={tag}>{tag}</span>
                ))}
                </div>
            )}

            <div class="popup-holder">
                {project.link && (
                    <a class="popup-link" href={project.link} target="_blank" rel="noopener noreferrer" >
                    View Project
                    </a>
                )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}