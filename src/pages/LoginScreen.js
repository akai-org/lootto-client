// import Cookies from 'universal-cookie';
import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Particles from 'react-particles-js';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import useCookie from '../hooks/useCookie';

// const cookies = new Cookies();

export default function LoginScreen() {
  const [token, setToken] = useCookie('token', '');

  return (
    <Fragment>
      <Particles
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 1500
              }
            },
            line_linked: {
              enable: true,
              opacity: 0.02
            },
            move: {
              direction: 'right',
              speed: 0.06
            },
            size: {
              value: 1.5
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05
              }
            }
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: 'push'
              }
            },
            modes: {
              push: {
                particles_nb: 1
              }
            }
          },
          retina_detect: true
        }}
        style={{
          width: '100%',
          backgroundColor: `#0f2432`,
          position: 'absolute',
          zIndex: '-1'
        }}
      />
      <Layout distributed spanned narrow>
        <Logo welcome title="Lootto" subtitle="get rekt." />
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          isMobile={false}
          callback={response => {
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
