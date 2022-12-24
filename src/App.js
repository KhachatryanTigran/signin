import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

import { Routes, NavLink, Route, Link, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { Layout } from "./component/Layout";
import { Singlepage } from "./Singlepage";
import { CustomLink } from "./component/CustomLink";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/login-me"
              element={<Navigate to="/login" replace />}
            />
            <Route path="/:id" element={<Singlepage />} />
            <Route path="/id" element={<CustomLink to="/id" />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </div>{" "}
    </>
  );
}

export default App;
