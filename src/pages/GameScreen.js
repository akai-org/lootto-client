import React from "react";
import { Link } from "react-router-dom";
import useWallet from "../hooks/useWallet";
import Navbar from "../components/Navbar";

export default function GameScreen() {
  const [wallet, setWallet] = useWallet();

  if (!wallet.loaded) {
    fetch(`${process.env.REACT_APP_API}/user`)
      .then(res => res.json())
      .then(data => setWallet({ ...data.wallet, loaded: true }));
  }

  return (
    <div>
      <Navbar stars={wallet.stars} />
      <Link to="/">Wróć na stronę główną!</Link>
      <Link to="/">Osiągnięcia!</Link>
      <Link to="/">Ustawienia!</Link>
    </div>
  );
}
