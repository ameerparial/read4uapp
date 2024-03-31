import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import ImageIcon from "../../images/favicon.ico";

function NavBar({ css }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className={`${css}`}>
        <nav className="container navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand ms-3" href="/">
            <img src={ImageIcon} width={"30px"} height={"30px"} />
            <span
              style={{
                textDecoration: "0.1px underline",
                color: css === "home-top-nav-before" ? "#022249" : "white",
              }}
            >
              Read4U
            </span>
          </a>
          <button
            className="navbar-toggler me-3 bg-dark"
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-expanded={isNavOpen ? "true" : "false"}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              "collapse navbar-collapse justify-content-md-end" +
              (isNavOpen ? " show" : "")
            }
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item me-3">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Home
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link"
                  href="#services"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Services
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link"
                  href="#demo"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Demo
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link"
                  href="#about"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  About
                </a>
              </li>
            </ul>
            <NavLink to={"/login"} className={"btn"}>
              Get Started
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
