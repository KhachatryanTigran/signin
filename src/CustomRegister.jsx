import { Link } from "react-router-dom";
import { SignUp } from "./component/SignUp";

const CustomRegister = () => {
  return (
    <>
      {" "}
      <SignUp />
      <Link to="/custonlogin" className="link-btn">
        Already have an account?Login.{" "}
      </Link>
    </>
  );
};

export default CustomRegister;
