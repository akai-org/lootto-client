import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Particles from '../components/Particles.js';
import Astronaut from '../components/Astronaut';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Redirect } from 'react-router-dom';
import useCookie from '../hooks/useCookie';

export default function LoginScreen(props) {
  const { history } = props;
  const [token, setToken] = useCookie('token', '');
  const [tutorialCompleted] = useCookie('tutorialCompleted', false);

  if (token) return <Redirect to="/game" />;

  return (
    <Fragment>
      <Astronaut floatFromSide />
      <Particles />
      <Layout distributed spanned narrow>
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
              console.log(response);

              setToken(response.accessToken);

              fetch(`${process.env.REACT_ENV_API}/auth`, {
                method: "POST",
                body: JSON.stringify({
                  token: response.accessToken
                })
              }).then(res => res.json())
                .then(json => {
                  console.log(json);
                  if (tutorialCompleted) {
                    history.push('/game');
                  } else {
                    history.push('/tutorial');
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
