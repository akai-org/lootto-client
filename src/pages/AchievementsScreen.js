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
import { Column } from '../components/Columns';
import Grid from '../components/Grid';

export default function GameScreen() {
  const [achievements, setAchievements] = useAchievements();

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
        <Grid autofill>
          {achievements.loaded &&
            achievements.list.map(achievement => (
              <Box square>
                <img src="/images/Chest.png" />
                <div className="chest__text">
                  {achievement.name && <strong>{achievement.name}</strong>}
                </div>
              </Box>
            ))}
        </Grid>
        <Button as="input" type="submit" secondary>
          Zaloguj się przez facebook
        </Button>
      </Layout>
    </div>
  );
}
