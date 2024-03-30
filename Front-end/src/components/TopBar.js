import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const TopBar = ({ username, profileImageUrl, setHamStatus }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setHamStatus(!isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="top-fixed top-bar">
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
          <span className="username">{username}</span>
          <NavLink to="profile-setting">
            <img
              src={profileImageUrl}
              alt="Profile"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "2px solid white",
              }}
            />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TopBar;
