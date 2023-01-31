import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthLogin";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const signIn = async () => {
    const res = await auth.login(email, password);
    console.log("==res===", res);
    if (res !== true) setError(res);
    navigate("/");
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="Login-box-text">Login</h2>
        <h3>{error}</h3>
        <div className="login-formGroup">
          <div>
            <label className="login-formGroup_label">Email</label>
          </div>
          <div>
            <input
              type="text"
              className="login-inputs"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </div>
        </div>
        <div className="login-formGroup">
          <div>
            <label className="login-formGroup_label">Password</label>
          </div>
          <div>
            <input
              type="password"
              className="login-inputs"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>
        </div>
        <div className="login-formGroup">
          <div className="btnSigin-div">
            <button onClick={signIn} className="btnLogin">
              Login
            </button>
          </div>
          <div className="signUp-div">
            <Link className="signUp-text">Sign Up?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
