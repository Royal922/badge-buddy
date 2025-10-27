import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // optional, for active links

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-md main-nav">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Badge Buddy
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="nav nav-tabs w-100 justify-content-between align-items-center">

            <div className="d-flex web-pages">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Help
                </NavLink>
              </li>
            </div>

            <div className="d-flex">
              <li className="nav-item">
                <NavLink to="/login" className={({ isActive }) => `nav-link login-link ${isActive ? "" : ""}`} isActive={() => false}>
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/signup" className={({ isActive }) => `nav-link signup-link ${isActive ? "" : ""}`} isActive={() => false}>
                  Sign Up
                </NavLink>
              </li>
            </div>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
