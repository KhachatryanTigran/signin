import { LoginCustom } from "./component/LoginCustom";
import React from "react";
import { Link } from "react-router-dom";

const CustomLogin = () => {
  return (
    <>
      <LoginCustom />
      <Link className="link-btn" to="/customregister">
        Don't have an account? Register here.{" "}
      </Link>
    </>
  );
};

export default CustomLogin;
