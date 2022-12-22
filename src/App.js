import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  return (
    <Routes>
      <Route exact path="./Home.jsx" component={Home}></Route>
      <Route exact path="./Login.jsx" component={Login}></Route>
      <Route exact path="./Register.jsx" component={Register}></Route>
    </Routes>
  );
}

export default App;
