// import Cookies from 'universal-cookie';
import React, { Fragment } from "react";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import Button from "../components/Button";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import useCookie from "../hooks/useCookie";
import useWallet from "../hooks/useWallet";

import Particles from "../components/Particles.js";

// const cookies = new Cookies();

export default function ExchangeScreen() {
  const [token, setToken] = useCookie("token", "");

  const [wallet, setWallet] = useWallet();

  if (!wallet.loaded) {
    fetch(`${process.env.REACT_APP_API}/user`)
      .then(res => res.json())
      .then(data => setWallet({ ...data.wallet, loaded: true }));
  }

  return (
    <Fragment>
      <Particles />
      <Layout distributed spanned narrow>
        <Logo
          welcome
          title="Lootto"
          subtitle={`You have ${wallet.stars} stars`}
        />
      </Layout>
    </Fragment>
  );
}
