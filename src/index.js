import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import theme from './styles/theme';
import * as serviceWorker from './serviceWorker';
import LoginScreen from './pages/LoginScreen';
import SettingsScreen from './pages/SettingsScreen';
import AchievementsScreen from './pages/AchievementsScreen';
import TutorialScreen from './pages/TutorialScreen';
import GameScreen from './pages/GameScreen';
import PlanetScreen from './pages/PlanetScreen';
import PrivateRoute from './components/PrivateRoute';
import GlobalStyle from './styles/GlobalStyle';
import ExchangeScreen from './pages/ExchangeScreen';

injectGlobal(GlobalStyle);

render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={PlanetScreen} />
          <PrivateRoute path="/tutorial" component={TutorialScreen} />
          <PrivateRoute path="/settings" component={SettingsScreen} />
          <PrivateRoute path="/achievements" component={AchievementsScreen} />
          <PrivateRoute path="/exchange" component={ExchangeScreen} />
          <PrivateRoute path="/game" component={GameScreen} />
          <PrivateRoute path="/planet" component={PlanetScreen} />
        </Switch>
      </Router>
    </Fragment>
  </ThemeProvider>,
  document.getElementById('root')
);
serviceWorker.unregister();
