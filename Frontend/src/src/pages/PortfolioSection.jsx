import React from "react";
import "./PortfolioSection.css";
import { useState } from "react";

function PortfolioSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    { 
      title: "HDR", 
      description: "High Dynamic Range enhances real estate photos by combining multiple exposures to create vibrant, balanced, and detailed images that showcase properties beautifully.",
      image: "SDR-4.jpg", // Add image path for HDR project
      images: [
        "SDR-1.jpg",
        "HDR-2.jpg",
        "SDR-3.jpg",
        "HDR-4.jpg",
        "SDR-5.jpg",
        "SDR-2.jpg",
        "HDR-1.jpg",
        "SDR-6.jpg",
        "HDR-5.jpg",
        "HDR-3.jpg"
      ] 
    },
    { 
      title: "Single", 
      description: " Optimizes a single photo with precise adjustments for a polished and professional look..",
      image: "S-1.jpg", // Add image path for Single project
      images: [
        // "S-1.jpg",
        "S-2.jpg",
        "S-3.jpg",
        "S-4.jpg",
        "S-5.jpg"
      ] 
    },
    { 
      title: "Twilight", 
      description: " Captures stunning aerial views and creates captivating twilight effects for a dramatic presentation.",
      image: "TW-1.jpg", // Add image path for Twilight project
      images: [
        "TW-1.jpg",
        "TW-2.jpg",
        "TW-3.jpg",
        "TW-4.jpg"
      ] 
    },
    { 
      title: "Virtual Staging", 
      description: "Digitally furnishes empty spaces to showcase the property’s full potential.",
      image: "VS-1.jpg", // Add image path for Virtual Staging project
      images: [
        "VS-1.jpg",
        "VS-2.jpg",
        "VS-3.jpg",
        "VS-4.jpg",
        "VS-5.jpg",

      ] 
    },
    { 
      title: "Replacement", 
      description: "Replaces dull skies and patchy grass with vibrant, realistic alternatives to enhance curb appeal.",
      image: "Sky-1.jpg", // Add image path for Replacement project
      images: [
        // "Sky-1.jpg",
        "Sky-2.jpg",
        "Sky-3.jpg",
        "Sky-4.jpg"
      ] 
    },
    { 
      title: "Closeup Shot", 
      description: "Highlights intricate details and unique features of the property with sharp focus and enhanced clarity.",
      image: "CS-1.jpg", // Add image path for Closeup Shot project
      images: [
        "CS-2.jpg",
        // "CS-2.jpg",
        // "CS-2.jpg",
        // "CS-2.jpg"
      ] 
    },
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => openModal(project)}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {isModalOpen && currentProject && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>×</button>
            <h3>{currentProject.title}</h3>
            <div className="modal-images">
              {currentProject.images.map((img, index) => (
                <img key={index} src={img} alt={`project-${index}`} className="modal-image" />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PortfolioSection;
