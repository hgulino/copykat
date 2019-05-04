import React from 'react';
import { Switch, Route } from 'react-router';

import Menu from './containers/MenuConnect'
import Home from './containers/HomeConnect'
import Settings from './containers/SettingsConnect'

export default (
  <Switch>
    <React.Fragment>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route exact path="/settings" component={Settings} />
    </React.Fragment>
  </Switch>
);
