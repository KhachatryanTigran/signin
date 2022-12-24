import React from "react";
import { useMatch, Link } from "react-router-dom";
export const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <div>
      <Link to={to} style={{ color: match ? "red" : "green" }} {...props}>
        {children}
      </Link>
      <h1>creatpoest edit</h1>
    </div>
  );
};
