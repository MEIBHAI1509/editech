import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-company">
          <h4>About Us</h4>
          <p>
          We are a trusted real estate editing agency, connecting buyers and sellers with exceptional properties. Explore our editing  services for your dream home or investment.
          </p>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Address: Salem, TamilNadu, India.</p>
          <p>Email: editech1324@gmail.com</p>
          <p>Phone: +91 79040 62552</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61570390797987" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" /> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/invites/contact/?igsh=1fuenzu83khyi&utm_content=toq0rp" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" /> Instagram
              </a>
            </li>
            <li>
              <a href="https://wa.me/7904062552" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="social-icon" /> Whatsapp
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/editech-shanmathi-70a95a340?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdqOV6Y45Qe2aY9x%2FxpPaSg%3D%3D " target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Real Estate Editing Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
