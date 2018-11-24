import React from 'react';
import { Link } from 'react-router-dom';
import useWallet from '../hooks/useWallet';
import useChests from '../hooks/useChests';
import Navbar from '../components/Navbar';
import Chest from '../components/Chest';

export default function GameScreen() {
  const [wallet, setWallet] = useWallet();
  const [chests, setChests] = useChests();

  if (!chests.loaded) {
    const pointId = 4;
    fetch(`${process.env.REACT_APP_API}/point/${pointId}`)
      .then(res => res.json())
      .then(data => setChests({ ...data.chests, loaded: true }));
  }

  if (!wallet.loaded) {
    fetch(`${process.env.REACT_APP_API}/user`)
      .then(res => res.json())
      .then(data => setWallet({ ...data.wallet, loaded: true }));
  }

  return (
    <div>
      <Navbar stars={wallet.stars} />
      {chests.map(chest => (
        <Chest />
      ))}
    </div>
  );
}
