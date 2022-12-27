import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <h2>{error.statusText || "Something losse"}</h2>
        {/* // error.data include first object added to json({first},{second}) */}
        <h2>{error.data.reason}</h2> <h2>{error.data.message}</h2>
      </div>
    );
  }
  return <div> no router error or you can throw new error</div>;
};

export default ErrorPage;
