import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import useUser from "../hooks/useUser";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useUser();
  if (!user) {
    return <Redirect to='/'></Redirect>;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default PrivateRoute;
