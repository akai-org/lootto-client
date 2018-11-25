import React from "react";
import { Link } from "react-router-dom";
import useWallet from "../hooks/useWallet";
import useChests from "../hooks/useChests";
import Navbar from "../components/Navbar";
import ColumnList from "../components/ColumnList";
import Box from "../components/Box";
import Button from "../components/Button";
import StarCount from "../components/StarCount";
import Layout from "../components/Layout";

export default function GameScreen() {
  const [wallet, setWallet] = useWallet();
  const [chests, setChests] = useChests();

  if (!chests.loaded) {
    fetch(`${process.env.REACT_APP_API}/planet`)
      .then(res => res.json())
      .then(list => {
        setChests({ list, loaded: true });
      });
  }

  // if (!wallet.loaded) {
  //   fetch(`${process.env.REACT_APP_API}/user`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setWallet({ ...data.wallet, loaded: true });
  //     });
  // }

  console.log(chests);

  return (
    <div>
      <Layout distributed fitted narrow>
        <Navbar stars={wallet.stars} />
        <ColumnList>
          {chests.loaded &&
            chests.list.map(chest => (
              <Box wide>
                <img src="/images/Chest.png" />
                <div className="chest__text">
                  {chest.name && <strong>{chest.name}</strong>}
                  {/* {chest.price && <span>{chest.price}</span>} */}
                  <StarCount>5</StarCount>
                </div>
                <Button
                  primary
                  small
                  narrow
                  onClick={() =>
                    (window.location.href =
                      window.location.origin + "/unboxing")
                  }
                >
                  otwórz
                </Button>
              </Box>
            ))}
        </ColumnList>
        <Button as="input" type="submit" secondary>
          Zaloguj się przez facebook
        </Button>
      </Layout>
    </div>
  );
}
