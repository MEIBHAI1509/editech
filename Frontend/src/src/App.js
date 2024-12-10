import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import PortfolioSection from "./pages/PortfolioSection";
import ContactForm from "./pages/ContactForm";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs.jsx"
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/services" element={<PortfolioSection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
