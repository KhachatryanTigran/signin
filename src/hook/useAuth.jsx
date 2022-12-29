import { React, useContext, useState, createContext } from "react";
import { AuthContext } from "../hoc/AuthProvider";
import { useSelector } from "react-redux";
const useAuth = () => {
  return useContext(AuthContext);
};

export const useAuth1 = () => {
  const { email, token, id } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};

export default useAuth;
