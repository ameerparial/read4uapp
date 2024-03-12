import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SideNavbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <nav className="sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              to={"dashboard"}
              className={`nav-link ${
                activeLink === "dashboard" ? "active-me" : ""
              }`}
              onClick={() => {
                setActiveLink("dashboard");
              }}
            >
              <i className="fas fa-tachometer-alt me-2"></i>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"read4u"}
              className={`nav-link ${
                activeLink === "read4u" ? "active-me" : ""
              }`}
              onClick={() => {
                setActiveLink("read4u");
              }}
            >
              <i className="fas fa-book-open me-2"></i>
              Read
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"voice-artists"}
              className={`nav-link ${
                activeLink === "voice" ? "active-me" : ""
              }`}
              onClick={() => {
                setActiveLink("voice");
              }}
            >
              <i className="fas fa-microphone me-2"></i>
              Voice Artists
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"read-by-u"}
              className={`nav-link ${activeLink === "pdfs" ? "active-me" : ""}`}
              onClick={() => {
                setActiveLink("pdfs");
              }}
            >
              <i className="fas fa-file-pdf me-2"></i>
              PDFs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"word-list"}
              className={`nav-link ${
                activeLink === "words" ? "active-me" : ""
              }`}
              onClick={() => {
                setActiveLink("words");
              }}
            >
              <i className="fas fa-highlighter me-2"></i>
              Marked Words
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"profile-setting"}
              className={`nav-link ${
                activeLink === "setting" ? "active-me" : ""
              }`}
              onClick={() => {
                setActiveLink("setting");
              }}
            >
              <i className="fas fa-cog me-2"></i>
              Setting
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"logout"}
              className={`nav-link ${
                activeLink === "logout" ? "active-me" : ""
              }`}
              onClick={() => {
                setActiveLink("logout");
              }}
            >
              <i className="fas fa-sign-out-alt me-2"></i>
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNavbar;
