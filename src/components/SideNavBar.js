import React from "react";

const SideNavbar = () => {
  return (
    <nav className="col-md-2  sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <i className="fas fa-home me-2"></i>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-shopping-cart me-2"></i>
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-box me-2"></i>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-users me-2"></i>
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-chart-line me-2"></i>
              Reports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-plug me-2"></i>
              Integrations
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNavbar;
