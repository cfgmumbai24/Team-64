import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const handleUserIDChange = (event) => {
    setUserID(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    // For example, you can check if the userID and password are correct
    // If correct, navigate to a different page, otherwise show an error message
    console.log("User ID:", userID);
    console.log("Password:", password);
    navigate("/dashboard"); // Redirect to a different page after successful login
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-1 text-center company__info" style={{ backgroundColor: "white" }}>
            <img
              src="/img/gramurja_logo.png"
              width="70"
              height="70"
              className="d-inline-block align-top mr-2"
              alt="Preamble"
            />
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 my-4 login_form">
            <div className="container-fluid my-4 ">
              <div className="row">
                <h2>Login</h2>
              </div>
              <div className="row my-4">
                <form onSubmit={handleSubmit} className="form-group">
                  <div className="row">
                    <input
                      type="text"
                      name="userID"
                      id="userID"
                      className="form__input my-4"
                      placeholder="User ID"
                      value={userID}
                      onChange={handleUserIDChange}
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
    </>
  );
}

export default Login;
