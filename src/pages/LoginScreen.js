// import Cookies from 'universal-cookie';
import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Particles from '../components/Particles.js';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import useCookie from '../hooks/useCookie';

// const cookies = new Cookies();

export default function LoginScreen() {
  const [token, setToken] = useCookie('token', '');

  return (
    <Fragment>
      <Particles />
      <Layout distributed spanned narrow>
        <Logo welcome title="Lootto" subtitle="get good. or get rekt." />
        <FacebookLogin
          appId="352388892232894"
          autoLoad={true}
          fields="name,email,picture"
          isMobile={false}
          callback={response => {
            console.log(response);
            setToken(response.accessToken);
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
