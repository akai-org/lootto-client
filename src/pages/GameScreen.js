import React from "react";
import useUser from "../hooks/useUser";
import Navbar from "../components/Navbar";
import MainMap from "../components/MainMap";

const GameScreen = props => {
  const user = useUser();

  return (
    <>
      <Navbar stars={user.starsBalance} />
      <MainMap location={props.location} />
    </>
  );
};

export default GameScreen;
