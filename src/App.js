import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

function App() {
  return (
    <>
      <div className="headerbar">
        <Link className="home" to="/">
          Home
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
