import { React, useContext, useState, createContext } from "react";
import { AuthContext } from "../hoc/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
