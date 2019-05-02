import React from 'react';
import { Switch, Route } from 'react-router';

import HeaderMenu from './containers/HeaderMenu'

export default (
  <Switch>
    <Route exact path="/" component={HeaderMenu} />
    <Route exact path="/project" component={HeaderMenu} />
  </Switch>
);
