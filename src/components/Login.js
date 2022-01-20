import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = (e) => {
    e.preventDefault();

    //firebase auth
  };

  const registerHandler = (e) => {
    e.preventDefault();

    //firebase auth
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          className="login__logo"
          alt="logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email:</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password:</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signInHandler} className="login__singinButton">
            Sign In
          </button>
        </form>
        <p>By signing-in you agree to Amazon's Conditions of Use & Sale.</p>
        <button onClick={registerHandler} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
