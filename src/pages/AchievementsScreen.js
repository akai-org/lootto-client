import React from 'react';
import { Link } from 'react-router-dom';
import useWallet from '../hooks/useWallet';
import useChests from '../hooks/useChests';
import Navbar from '../components/Navbar';
import ColumnList from '../components/ColumnList';
import Box from '../components/Box';
import Button from '../components/Button';
import StarCount from '../components/StarCount';
import Layout from '../components/Layout';
import BackButton from '../components/BackButton';
import useAchievements from '../hooks/useAchievements';
import usePopup from '../hooks/usePopup';
import { Column } from '../components/Columns';
import Grid from '../components/Grid';
import Popup from '../components/Popup';

export default function GameScreen() {
  const [achievements, setAchievements] = useAchievements();
  const [popup, setPopup] = usePopup();

  if (!achievements.loaded) {
    fetch(`${process.env.REACT_APP_API}/user/achievements`)
      .then(res => res.json())
      .then(list => {
        setAchievements({ list, loaded: true });
      });
  }

  return (
    <div>
      <Layout distributed spanned narrow>
        <BackButton />
        <h1>Osiągnięcia</h1>
        {popup.isActive ? (
          <Popup
            name={popup.name}
            description={popup.description}
            close={() => {
              setPopup({ isActive: false });
            }}
          />
        ) : (
          <div />
        )}
        <Grid autofill>
          {achievements.loaded &&
            achievements.list.map(achievement => (
              <Box
                square
                onClick={() => {
                  setPopup({
                    name: achievement.name,
                    description: achievement.description,
                    isActive: true
                  });
                }}
              >
                <img
                  src={
                    achievement.imageUrl
                      ? achievement.imageUrl
                      : getRandomImage()
                  }
                  alt={achievement.name}
                />
                {/* <div className="chest__text">
                  {achievement.name && <strong>{achievement.name}</strong>}
                </div> */}
              </Box>
            ))}
        </Grid>
      </Layout>
    </div>
  );
}

function getRandomImage() {
  const possibleChoices = [
    '/images/cup.png',
    '/images/trophy-red.png',
    '/images/trophy-purple.png'
  ];

  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}
