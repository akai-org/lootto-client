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
import GameScreen from "./pages/GameScreen";
import MapScreen from "./pages/MapScreen";
import PrivateRoute from "./components/PrivateRoute";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,700');
  
  html {
    margin: 0;
  }

  body {
    color: ${theme.color.text.base};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weight.base};
    margin: 0;
    overflow-x: hidden;  
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${theme.color.text.primary};
    line-height: ${theme.font.lineHeight.caption}
  }

  h1 {
    font-size: ${theme.font.size.heading.primary};
  }

  h2 {
    font-size: ${theme.font.size.heading.secondary};
  }

  h3 {
    font-size: ${theme.font.size.heading.tertiary};
  }

  p {
    line-height: ${theme.font.lineHeight.text}; 
    color: ${theme.color.text.primary};
    margin: 1em 0 1.5em;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    line-height: inherit;
  }

  img {
    height: auto;
    max-width: 100%;
  }
`;

render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
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
