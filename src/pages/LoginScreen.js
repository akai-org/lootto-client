import React, { Fragment } from "react";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Particles from "../components/Particles.js";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import useCookie from '../hooks/useCookie';

export default function LoginScreen(props) {
  const { history } = props;
  const [, setToken] = useCookie("token", "");
  const [tutorialCompleted] = useCookie("tutorialCompleted", false);

  return (
    <Fragment>
      <Particles />
      <Layout distributed spanned narrow>
        <Logo welcome title="Lootto" subtitle="Rozpocznij z nami kosmiczną eksplorację Lootto." />
        <FacebookLogin
          appId="352388892232894"
          autoLoad={true}
          fields="name,email,picture"
          isMobile={false}
          callback={response => {
            if (response.accessToken) {
              setToken(response.accessToken);

              if (tutorialCompleted) {
                history.push("/game");
              } else {
                history.push("/tutorial");
              }
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
