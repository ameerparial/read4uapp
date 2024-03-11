import React from "react";
import { NavLink } from "react-router-dom";

const SideNavbar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="/dashboard">
              <i className="fas fa-home me-2"></i>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <NavLink to={"orders"} className="nav-link">
              <i className="fas fa-shopping-cart me-2"></i>
              Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"products"} className="nav-link">
              <i className="fas fa-box me-2"></i>
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"customers"} className="nav-link">
              <i className="fas fa-users me-2"></i>
              Customers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"reports"} className="nav-link">
              <i className="fas fa-chart-line me-2"></i>
              Reports
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"intergrations"} className="nav-link">
              <i className="fas fa-plug me-2"></i>
              Integrations
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNavbar;
