import React from "react";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <div>
      <Link to="/game">Zaczynajmy!</Link>
    </div>
  );
}
