import React from "react";
import useUser from "../hooks/useUser";
import Navbar from "../components/Navbar";
import MainMap from "../components/MainMap";
import useLocation from "../hooks/useLocation";

const GameScreen = props => {
  const user = useUser();
  const [location, getLocation] = useLocation();

  return (
    <>
      <Navbar stars={user.starsBalance} />
      <MainMap location={location} />
    </>
  );
};

export default GameScreen;
