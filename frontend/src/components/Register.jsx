import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

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
      const response = await fetch("http://localhost:5050/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          email,
          password,
          role:
            profile === 0
              ? "goat-mitra"
              : profile === 1
              ? "fellow-member"
              : profile === 2
              ? "up-management"
              : "hunar-management",
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        navigate("/success"); // Navigate to success page or home after successful registration
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
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
            alt="GramUrja Logo"
          />
        </div>
        <div className="col-md-8 col-xs-8 col-sm-8 my-4 login_form">
          <div className="container-fluid my-4">
            <div className="row">
              <h2>Sign Up</h2>
            </div>
            <div className="row my-4">
              <form onSubmit={handleSubmit} className="form-group">
                <div className="row">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form__input my-4"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </div>
                <div className="row">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form__input"
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
                    value="Create My Account"
                    className="btnLogin bg-success"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
