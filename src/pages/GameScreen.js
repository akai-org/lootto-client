import React from 'react';
import { Link } from 'react-router-dom';
import useWallet from '../hooks/useWallet';
import Navbar from '../components/Navbar';
import config from '../config.json';
import MainMap from '../components/MainMap.js';

const GameScreen = props => {
  const [wallet, setWallet] = useWallet();

  if (!wallet.loaded) {
    console.log('ups', `${config.environment.server}/user`, wallet);
    fetch(`${config.environment.server}/user`)
      .then(res => res.json())
      .then(data => setWallet({ ...data.wallet, loaded: true }));
  }

  console.log(`${config.environment.server}/user`, wallet);

  return (
    <>
      <div>
        <Navbar stars={12} />
        <Link to="/">Wróć na stronę główną!</Link>
        <Link to="/">Osiągnięcia!</Link>
        <Link to="/">Ustawienia!</Link>
      </div>
      <MainMap location={props.location} />
    </>
  );
};

export default GameScreen;
