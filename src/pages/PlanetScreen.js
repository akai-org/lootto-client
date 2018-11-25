import React from 'react';
import useWallet from '../hooks/useWallet';
import useChests from '../hooks/useChests';
import Navbar from '../components/Navbar';
import ColumnList from '../components/ColumnList';
import Box from '../components/Box';
import Button from '../components/Button';
import StarCount from '../components/StarCount';
import Layout from '../components/Layout';
import { withRouter } from 'react-router';

const GameScreen = function(props) {
  const [wallet, setWallet] = useWallet();
  const [chests, setChests] = useChests();

  if (!chests.loaded) {
    const planetId = window.location.search.split('=')[1];
    fetch(`${process.env.REACT_APP_API}/planet/${planetId}`)
      .then(res => res.json())
      .then(list => {
        setChests({ list: list.chests, loaded: true });
      });
  }

  // if (!wallet.loaded) {
  //   fetch(`${process.env.REACT_APP_API}/user`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setWallet({ ...data.wallet, loaded: true });
  //     });
  // }

  const boxTypeToColor = type => {
    if (type === 'chest4') return '100deg';
    else if (type === 'chest3') return '200deg';
    return '0deg';
  };

  const boxTypeToPrice = type => {
    if (type === 'chest4') return 10;
    else if (type === 'chest3') return 20;
    return 5;
  };

  const boxTypeToName = type => {
    if (type === 'chest4') return 'Super Lootto';
    else if (type === 'chest3') return 'Hiper Mega Lootto';
    return 'Lootto';
  };

  console.log(chests);

  return (
    <div>
      <Layout distributed fitted narrow>
        <Navbar stars={wallet.stars} />
        <ColumnList>
          {chests.loaded &&
            chests.list.map(chest => (
              <Box
                key={chest.name}
                wide
                boxType={() => boxTypeToColor(chest.type)}
              >
                <img src="/images/Chest.png" />
                <div className="chest__text">
                  {chest.name && <strong>{boxTypeToName(chest.type)}</strong>}
                  {/* {chest.price && <span>{chest.price}</span>} */}
                  <StarCount>{boxTypeToPrice(chest.type)}</StarCount>
                </div>
                <Button
                  primary
                  small
                  narrow
                  onClick={() => {
                    props.history.push(
                      `/unboxing?type=${chest.type[chest.type.length - 1]}`
                    );
                  }}
                >
                  otwórz
                </Button>
              </Box>
            ))}
        </ColumnList>
        <Button as="input" type="submit" secondary>
          Powrót do mapy
        </Button>
      </Layout>
    </div>
  );
};

export default withRouter(GameScreen);
