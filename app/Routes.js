import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CalendarPage from './containers/CalendarPage';
import SettingsPage from './containers/SettingsPage';

export default () => (
  <App>
    <Switch>
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.CALENDAR} component={CalendarPage} />
      <Route exact path={routes.SETTINGS} component={SettingsPage} />
    </Switch>
  </App>
);
