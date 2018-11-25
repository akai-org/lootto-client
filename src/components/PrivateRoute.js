import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [location, setLocation] = useState({});

  const options = {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 0
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      location => {
        setLocation(location);
      },
      err => {
        setLocation({ error: `ERROR(${err.code}): ${err.message}` });
      },
      options
    );
  };

  if (location.error) {
    console.log('location error', location);
    //return <Redirect to="/" />;
  }

  if (!location.coords) {
    getLocation();
    return <Route {...rest} render={props => <Loading {...props} />} />;
  }

  setTimeout(getLocation, options.timeout);
  return (
    <Route
      {...rest}
      render={props => <Component {...props} location={location} />}
    />
  );
};

export default PrivateRoute;
