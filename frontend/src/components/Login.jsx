import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(0); // Default profile to Goat Mitra (0)

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleProfileChange = (event) => {
    setProfile(parseInt(event.target.value)); // Convert value to integer
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5050/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Login successful:", result);
        navigate(`/${getProfileRoute(profile)}`); // Redirect to dashboard based on profile
      } else {
        const error = await response.json();
        console.error("Error:", error.message);
        alert("Login failed: " + error.message); // Show an error message
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred"); // Show an error message
    }
  };

  const getProfileRoute = (profile) => {
    if (profile === 0) {
      return "goatfellowform";
    } else if (profile === 1) {
      return "classcards";
    } else if (profile === 2) {
      return "/";
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div
          className="col-md-1 text-center company__info"
          style={{ backgroundColor: "white" }}
        >
          <img
            src="/img/gramurja_logo.png"
            width="70"
            height="70"
            className="d-inline-block align-top mr-2"
            alt="Preamble"
          />
        </div>
        <div className="col-md-8 col-xs-12 col-sm-12 my-4 login_form">
          <div className="container-fluid my-4">
            <div className="row">
              <h2>Login</h2>
            </div>
            <div className="row my-4">
              <form onSubmit={handleSubmit} className="form-group">
                <div className="row">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form__input my-4"
                    placeholder="Email ID"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="row">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form__input my-4"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>

                <div className="m-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleProfileChange}
                    value={profile}
                  >
                    <option value={0}>Goat Mitra</option>
                    <option value={1}>Fellow Member</option>
                    <option value={2}>Gram Upadhay Management</option>
                    <option value={3}>Gram Hunar Management</option>
                  </select>
                </div>

                <div className="row bg-primary">
                  <input
                    type="submit"
                    value="Login"
                    className="btnLogin bg-success"
                  />
                </div>
              </form>

              <div className="row my-3">
                <p>
                  Don't have an account? <Link to="/register">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
