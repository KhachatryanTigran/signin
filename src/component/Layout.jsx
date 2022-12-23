import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <div className="headerbar">
        <Link className="home" to="/">
          Home
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
      <Outlet />
    </>
  );
};
