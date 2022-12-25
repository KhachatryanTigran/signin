import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";

const setActive = ({ isActive }) => (isActive ? "active-link " : "not-Active ");
export const Layout = () => {
  return (
    <>
      <header className="header">
        <NavLink to="/" className={setActive}>
          {" "}
          Home
        </NavLink>
        <NavLink to="/about" className={setActive}>
          About Us
        </NavLink>
        <NavLink to="/login" className={setActive}>
          Login
        </NavLink>

        <NavLink to="/register" className={setActive}>
          Register
        </NavLink>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer>2022 our footer can be here 2023</footer>
    </>
  );
};

// <NavLink
//           to="/"
//           className={({ isActive }) => (isActive ? "activ-link" : "")}
//         >
//           {" "}
//           Home
//         </NavLink>
//         <NavLink
//           to="/login"
//           className={({ isActive }) => (isActive ? "activ-link" : "")}
//         >
//           Login
//         </NavLink>
//         <NavLink
//           to="/register"
//           className={({ isActive }) => (isActive ? "activ-link" : "")}
//         >
//           Register
//         </NavLink>
