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
import AccountScreen from "./pages/AccountScreen";
import SocialScreen from "./pages/SocialScreen";

injectGlobal(GlobalStyle);

const App = function() {
  const [user, setUser] = useState(null);
  const renderLoginScreen = (props) => (
    <LoginScreen onLogin={setUser} {...props} />
  );

  console.log('current user is', user);

  return (
    <ThemeProvider theme={theme}>
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" render={renderLoginScreen} />
          <PrivateRoute path="/tutorial" component={TutorialScreen} />
          <PrivateRoute path="/account" component={AccountScreen} />
          <PrivateRoute path="/achievements" component={AchievementsScreen} />
          <PrivateRoute path="/exchange" component={ExchangeScreen} />
          <PrivateRoute path="/social" component={SocialScreen} />
          <PrivateRoute path="/game" component={GameScreen} />
          <PrivateRoute path="/planet" component={PlanetScreen} />
          <PrivateRoute path="/unboxing" component={UnboxingScreen} />
        </Switch>
      </Router>
      {user && <Redirect to="/game" />}
    </Fragment>
  </ThemeProvider>
  )
}

render(
  <App />,
  document.getElementById('root')
);
serviceWorker.unregister();
