import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/register");
  };

  const handleSignOutClick = () => {
    setIsLoggedIn(false);
    // Perform additional sign-out logic here if needed
  };

  return (
    <div>
      <nav
        style={{
          backgroundColor: "#526D82",
          paddingLeft: "50px",
          paddingRight: "50px",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
        className="navbar navbar-expand-lg navbar-dark "
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Gram Urja
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              {!isLoggedIn ? (
                <>
                  <button
                    style={{ backgroundColor: "#F1EEDC" }}
                    className="btn me-2"
                    onClick={handleLoginClick}
                  >
                    Login
                  </button>
                  <button
                    style={{ backgroundColor: "#F1EEDC", color: "black" }}
                    className="btn "
                    onClick={handleSignUpClick}
                  >
                    Sign-Up
                  </button>
                </>
              ) : (
                <button className="btn btn-danger" onClick={handleSignOutClick}>
                  Sign-Out
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
