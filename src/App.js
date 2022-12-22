import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { useState } from "react";

import Login from "./Login";
import Register from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  };
  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
