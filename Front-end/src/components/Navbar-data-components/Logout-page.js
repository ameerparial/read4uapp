import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LogoutPrompt = ({ show, onHide, onConfirm }) => {
  if (!show) return null;

  return (
    <div
      className="modal show"
      style={{ display: "block" }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Logout Confirmation</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onHide}
            ></button>
          </div>
          <div className="modal-body">Are you sure you want to logout?</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onHide}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onConfirm}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LogoutComponent = () => {
  const [showLogoutPrompt, setShowLogoutPrompt] = useState(false);

  const handleLogout = () => {
    // Perform logout actions
    console.log("Logging out...");
    // For demonstration purposes, let's just hide the prompt
    setShowLogoutPrompt(false);
  };

  const handleCancel = () => {
    setShowLogoutPrompt(false);
  };

  const handleShowPrompt = () => {
    setShowLogoutPrompt(true);
  };

  return (
    <div className="container mt-5">
      <h1>Click here to logout!</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleShowPrompt}
      >
        Logout
      </button>
      <LogoutPrompt
        show={showLogoutPrompt}
        onHide={() => setShowLogoutPrompt(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
};

export default LogoutComponent;
