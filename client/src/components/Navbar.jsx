import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // optional, for active links
import Layout from "../components/Layout";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-md main-nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Badge Buddy
        </a>

        {/* Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="nav nav-tabs w-100 justify-content-between align-items-center">
            {/* Left side */}
            <div className="d-flex web-pages">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Help
                </a>
              </li>
            </div>

            {/* Right side */}
            <div className="d-flex">
              <li className="nav-item">
                <a className="nav-link login-link" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link signup-link" href="/signup">
                  Sign Up
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
