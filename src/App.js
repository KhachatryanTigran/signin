import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { Layout } from "./component/Layout";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
