import React from 'react';
import { Link } from 'react-router-dom';
import useWallet from '../hooks/useWallet';
import Navbar from '../components/Navbar';
import MainMap from '../components/MainMap';

const GameScreen = props => {
  const [wallet, setWallet] = useWallet();

  if (!wallet.loaded) {
    fetch(`${process.env.REACT_APP_API}/user`)
      .then(res => res.json())
      .then(data => setWallet({ ...data.wallet, loaded: true }));
  }

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
