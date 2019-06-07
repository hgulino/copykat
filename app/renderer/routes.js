import React from 'react'
import { Route } from 'react-router'
import { CSSTransition } from 'react-transition-group'

import App from './components/layout/App'
import Files from './containers/FilesConnect'
import Home from './containers/HomeConnect'
import Settings from './containers/SettingsConnect'

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/settings', name: 'Settings', Component: Settings },
  { path: '/files', name: 'Files', Component: Files },
]

export default (
  <App>
    {routes.map(({ path, Component }) => (
      <Route key={path} exact path={path}>
        {({ match }) => (
          <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
            <div className="page">
              <Component />
            </div>
          </CSSTransition>
        )}
      </Route>
    ))}
  </App>
)
