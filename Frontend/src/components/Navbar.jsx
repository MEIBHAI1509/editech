import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  
  return (
    <nav>
      <div className="logo">
        {/* Add your logo */}
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul>
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="nav-link" activeClassName="active-link">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link" activeClassName="active-link">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link" activeClassName="active-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
