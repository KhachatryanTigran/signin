import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <>
      <div className="author-form-continer">
        <h2>Login</h2>
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="youreemail@gmail.com"
            id="email"
            name="email"
          />

          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            type="password"
            placeholder="***********"
            id="password"
            name="password"
          />
          <button type="submit">Log in</button>
        </form>
        <Link className="link-btn" to="/register">
          Don't have an account? Register here.{" "}
        </Link>
      </div>
    </>
  );
}

export default Login;
