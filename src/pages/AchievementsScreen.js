import React from 'react';
import { Link } from 'react-router-dom';
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
import Title from '../components/Title';
import Popup from '../components/Popup';
import { authorizedRequest } from '../utils/request';

export default function GameScreen() {
  const [achievements, setAchievements] = useAchievements();
  const [popup, setPopup] = usePopup();

  if (!achievements.loaded) {
    authorizedRequest('user/achievements').then(list => {
      setAchievements({ list, loaded: true });
    });
  }

  return (
    <div>
      <Layout distributed spanned narrow>
        <BackButton />
        <Title medium>Osiągnięcia</Title>
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
            achievements.list.map((achievement, index) => {
              const initialProps = {
                key: index,
                square: true,
                onClick: () => {
                  setPopup({
                    name: achievement.name,
                    description: achievement.description,
                    isActive: true,
                    selectedAchievement: index
                  });
                },
                selected: popup.selectedAchievement === index
              };
              console.log(initialProps);
              return (
                <Box {...initialProps}>
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
              );
            })}
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
