import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

export default function GameScreen() {

  return (
    <div>
      <Navbar stars={12}></Navbar>
      <Link to="/">Wróć na stronę główną!</Link>
      <Link to="/">Osiągnięcia!</Link>
      <Link to="/">Ustawienia!</Link>
    </div>
  );
}
