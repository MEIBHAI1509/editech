import React from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";


function HeroSection() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/services"); // Navigate to the Services page
  };
  // const handleGetStarted = () => {
  //   const servicesSection = document.getElementById("services");
  //   if (servicesSection) {
  //     servicesSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Editech</h1>
        <p className="hero-description">
          Your trusted partner for Real Estate Editing Services.
        </p>
        <p className="hero-subtext">
          Transforming your property images with HDR, virtual staging, sky replacement, and more!
        </p>
        <button className="cta-button"  onClick={handleGetStarted}>Get Started</button>
      </div>
      <div className="background-animation">
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
      </div>
    </section>
  );
}

export default HeroSection;
