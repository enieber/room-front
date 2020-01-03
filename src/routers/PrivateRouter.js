import React from "react";
import { Route, Redirect } from "react-router-dom";

import { hasAuthentication } from "../auth";
import Home from "../home/Home";

const PrivateRoute = ({ component, ...rest }) => {
  const restrict = hasAuthentication();
  return (
    <Route
      {...rest}
      render={props =>
        restrict ? (
          <Home {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
