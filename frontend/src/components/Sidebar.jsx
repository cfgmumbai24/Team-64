// Sidebar.js

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav
      style={{ height: "100vh", width: "30vh", backgroundColor: "#526D82" }}
      className="navbar navbar-dark  flex-column p-0"
    >
      <NavItem to="/">Gram Hunar</NavItem>
      <div className="navbar-nav ">
        <NavItem to="/classcards">Home</NavItem>
        <NavItem to="/attendancetable">Attendance</NavItem>
        <NavItem to="/evaluationtable">Evaluate</NavItem>
      </div>
    </nav>
  );
};

const NavItem = ({ to, children }) => {
  return (
    <Link to={to} className="nav-link text-white p-3">
      {children}
    </Link>
  );
};

export default Sidebar;
