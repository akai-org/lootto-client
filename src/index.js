import React, { Fragment, useState } from 'react';
import { render } from 'react-dom';
import { Switch, Redirect } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import theme from './styles/theme';
import * as serviceWorker from './serviceWorker';
import LoginScreen from './pages/LoginScreen';
import AchievementsScreen from './pages/AchievementsScreen';
import TutorialScreen from './pages/TutorialScreen';
import GameScreen from './pages/GameScreen';
import PrivateRoute from './components/PrivateRoute';
import GlobalStyle from './styles/GlobalStyle';
import ExchangeScreen from './pages/ExchangeScreen';
import UnboxingScreen from './pages/UnboxingScreen';
import PlanetScreen from './pages/PlanetScreen';
import AccountScreen from './pages/AccountScreen';
import SocialScreen from './pages/SocialScreen';
import RewardScreen from './pages/RewardScreen';
import UserContext from './contexts/UserContext';

injectGlobal(GlobalStyle);

const dev = process.env.NODE_ENV == 'development';
const defaultUser = {
  moneyBalance: 36,
  starsBalance: 14,
  experience: 0,
  powerUps: [],
  achievements: [],
  facebookId: '2227976820757967',
  name: 'Piotr Ptak',
  email: 'piotr.a.ptak@icloud.com',
  __v: 0
};

const App = function() {
  const [user, setUser] = useState(dev ? defaultUser : null);
  const renderMainPage = props => <LoginScreen onLogin={setUser} {...props} />;

  const onExchange = (starsGiven, moneyTaken) => {
    if (moneyTaken > user.moneyBalance) return;
    setUser({
      ...user,
      starsBalance: user.starsBalance + starsGiven,
      moneyBalance: user.moneyBalance - moneyTaken
    });
  };
  const renderExchangePage = props => (
    <ExchangeScreen onExchange={onExchange} {...props} />
  );

  const onBalanceChange = moneyBalance => {
    console.log('balance:', moneyBalance);
    setUser({ ...user, moneyBalance });
  };
  const renderAccountPage = props => (
    <AccountScreen onBalanceChange={onBalanceChange} {...props} />
  );

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={user}>
        <Fragment>
          <Router>
            <Switch>
              <Route exact path="/" component={LoginScreen} />
              <PrivateRoute path="/tutorial" component={TutorialScreen} />
              <PrivateRoute path="/account" component={renderAccountPage} />
              <PrivateRoute
                path="/achievements"
                component={AchievementsScreen}
              />
              <PrivateRoute path="/exchange" component={renderExchangePage} />
              <PrivateRoute path="/social" component={SocialScreen} />
              <PrivateRoute path="/game" component={GameScreen} />
              <PrivateRoute path="/planet" component={PlanetScreen} />
              <PrivateRoute path="/unboxing" component={UnboxingScreen} />
              <PrivateRoute path="/reward" component={RewardScreen} />
            </Switch>
          </Router>
        </Fragment>
      </UserContext.Provider>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById('root'));
serviceWorker.unregister();
