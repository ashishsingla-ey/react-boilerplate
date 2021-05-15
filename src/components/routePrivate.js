import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RoutePrivate = ({
  component: Component,
  isAuthenticated,
  to,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} {...rest} />
      ) : (
        <ToSignin {...props} />
      )
    }
  />
);

export const ToSignin = ({ location }) => (
  <Redirect
    to={{
      pathname: '/signin/username',
      search: `?return=${location.pathname}${location.search}${location.hash}`,
    }}
  />
);

RoutePrivate.propTypes = {
  component: PropTypes.any,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object,
  to: PropTypes.string,
};

export default RoutePrivate;
