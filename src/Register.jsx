import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
function Register(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="author-form-continer">
        <h2>Register</h2>
        <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Full name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Full name"
            id="name"
            name="name"
          />

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
        <Link to="/login" className="link-btn">
          Already have an account?Login.{" "}
        </Link>
      </div>
    </>
  );
}

export default Register;
