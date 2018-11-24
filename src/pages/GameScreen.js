import React from 'react';
import { Link } from 'react-router-dom';
import useWallet from '../hooks/useWallet';
import Navbar from '../components/Navbar';
import MainMap from '../components/MainMap';
import Loading from '../components/Loading';

const GameScreen = props => {
  const [wallet, setWallet] = useWallet();

  if (!wallet.loaded) {
    fetch(`${process.env.REACT_APP_API}/user`)
      .then(res => res.json())
      .then(data => setWallet({ ...data.wallet, loaded: true }));
  }

  return (
    <>
      <Navbar stars={12} />
      <MainMap location={props.location} />
    </>
  );
};
//      <MainMap location={props.location} />

export default GameScreen;
