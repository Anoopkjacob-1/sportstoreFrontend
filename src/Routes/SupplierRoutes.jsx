import React from "react";
import { Route, Redirect } from "react-router-dom";


export const SupplierRoute = ({
  component: Component,
  ...rest
}) => {
  return (
  
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("loginid")&& localStorage.getItem("role")==="supplier") {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
