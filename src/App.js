import React from "react";

import "./App.css";

import { Routes, NavLink, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { Layout } from "./component/Layout";
import { Singlepage } from "./Singlepage";
import { CustomLink } from "./component/CustomLink";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";
import { AboutUs } from "./AboutUs";
function App() {
  return (
    <>
      <div className="App">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/login-me"
                element={<Navigate to="/login" replace />}
              />
              <Route path="/about/*" element={<AboutUs />} />
              <Route
                path="/:id"
                element={
                  <RequireAuth>
                    <Singlepage />
                  </RequireAuth>
                }
              />

              <Route path="/id" element={<CustomLink to="/id" />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </AuthProvider>
      </div>{" "}
    </>
  );
}

export default App;
