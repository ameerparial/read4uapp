import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

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
          <a href="#">
            <img
              src={profileImageUrl}
              alt="Profile"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid white",
              }}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default TopBar;
