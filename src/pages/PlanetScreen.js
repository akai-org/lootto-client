import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser';
import Navbar from '../components/Navbar';
import ColumnList from '../components/ColumnList';
import Box from '../components/Box';
import Button from '../components/Button';
import StarCount from '../components/StarCount';
import Layout from '../components/Layout';
import { withRouter } from 'react-router';
import { authorizedRequest } from '../utils/request';

const GameScreen = function(props) {
  const user = useUser();
  const [chests, setChests] = useState({ loaded: false, list: [] }); //useChests();

  if (!chests.loaded) {
    const planetId = window.location.search.split('=')[1];
    authorizedRequest(`planet/${planetId}`).then(list => {
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
      <Navbar stars={user.starsBalance} />
      <Layout distributed fitted narrow>
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
        <Link to="/game">
          <Button secondary offset>
            Powrót do mapy
          </Button>
        </Link>
      </Layout>
    </div>
  );
};

export default withRouter(GameScreen);
