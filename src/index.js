import React, { Fragment } from "react";
import { render } from "react-dom";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { injectGlobal } from "emotion";
import { ThemeProvider } from "emotion-theming";
import theme from "./styles/theme";
import * as serviceWorker from "./serviceWorker";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import SettingsScreen from "./pages/SettingsScreen";
import AchievementsScreen from "./pages/AchievementsScreen";
import TutorialScreen from "./pages/TutorialScreen";
import GameScreen from "./pages/GameScreen";
import MapScreen from "./pages/MapScreen";
import PrivateRoute from "./components/PrivateRoute";

import GlobalStyle from "./styles/GlobalStyle";

injectGlobal(GlobalStyle);

render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
          <PrivateRoute path="/tutorial" component={TutorialScreen} />
          <PrivateRoute path="/settings" component={SettingsScreen} />
          <PrivateRoute path="/achievements" component={AchievementsScreen} />
          <PrivateRoute path="/game" component={GameScreen} />
          <PrivateRoute path="/map" component={MapScreen} />
        </Switch>
      </Router>
    </Fragment>
  </ThemeProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
