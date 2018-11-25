import React, { Fragment, useContext } from "react";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Particles from "../components/Particles.js";
import Astronaut from "../components/Astronaut";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Redirect } from "react-router-dom";
import useCookie from "../hooks/useCookie";
import useUser from "../hooks/useUser";

import UserContext from "../contexts/UserContext";
import { authorizedRequest } from "../utils/request";

export default function LoginScreen(props) {
  const { history, onLogin } = props;
  const [token, setToken] = useCookie("token", "");
  const [tutorialCompleted] = useCookie("tutorialCompleted", false);

  const user = useUser();

  if (user) {
    return <Redirect to='/game' />
  }

  return (
    <Fragment>
      <Astronaut floatFromSide />
      <Particles />
      <Layout distributed fitted narrow>
        <Logo
          welcome
          title="Lootto"
          subtitle="Witamy w grze miejskiej wykorzystującej goelokalizację, inspirowanej Lotto, w której wygrasz prawdziwe pieniądze i będziesz się świetnie bawić z przyjaciółmi!"
        />
        <FacebookLogin
          appId="352388892232894"
          autoLoad={true}
          fields="name,email,picture"
          isMobile={false}
          callback={response => {
            if (response.accessToken) {
              setToken(response.accessToken);
              authorizedRequest('auth', { method: 'POST', body: {
                access_token: response.accessToken
              }}).then(user => {
                  onLogin(user);
                  if (tutorialCompleted) {
                    history.push("/game");
                  } else {
                    history.push("/tutorial");
                  }
                });
            }
          }}
          render={renderProps => (
            <Button
              as="input"
              type="submit"
              primary
              onClick={renderProps.onClick}
            >
              Zaloguj się przez facebook
            </Button>
          )}
        />
      </Layout>
    </Fragment>
  );
}

LoginScreen.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

LoginScreen.contextType = UserContext;
