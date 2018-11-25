import React from "react";
import useUser from "../hooks/useUser";
import Navbar from "../components/Navbar";
import MainMap from "../components/MainMap";
import Loading from "../components/Loading";
import useLocation from "../hooks/useLocation";

const GameScreen = props => {
  const user = useUser();
  const [location, getLocation] = useLocation();

  if (!location.coords) {
    console.log(location);
    getLocation();
  }
  return (
    <>
      <Navbar stars={user.starsBalance} />
      {location.coords ? <MainMap location={location} /> : <Loading />}
    </>
  );
};

export default GameScreen;
