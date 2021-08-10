import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import appContext from "../contexts/context";

function PrivateRoute({ component: Component, ...rest }) {
  const verif = useContext(appContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        verif.isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
