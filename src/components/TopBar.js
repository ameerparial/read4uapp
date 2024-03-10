import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import SideNavbar from "./SideNavBar";

const TopBar = ({ profileImageUrl }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="top-bar">
        <div className="first-portion">
          <button className="" type="button" onClick={handleMenuClick}>
            {isMenuOpen ? (
              <span className="navbar-toggler-icon">&#10005;</span> // Cross icon
            ) : (
              <span className="navbar-toggler-icon">&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>

        <div className="second-portion">
          <span className="username">username</span>
          <a href="#">
            <img
              src={profileImageUrl}
              alt="Profile"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          </a>
        </div>
      </div>
      {isMenuOpen && <SideNavbar />}
    </>
  );
};

export default TopBar;
