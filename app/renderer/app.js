import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createMemoryHistory } from 'history';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import routes from './routes';
import configureStore from './store';
import { setAppMetadataPath } from './actions/settings'
import CssBaseline from '@material-ui/core/CssBaseline';

const app = require('electron').remote.app

const initialState = {};
const routerHistory = createMemoryHistory();
const store = configureStore(initialState, routerHistory);

const rootElement = document.querySelector(document.currentScript.getAttribute('data-container'));

// Scan localstorage for default path. If null, default to user's Documents folder
if (!localStorage.redux) {
  store.dispatch(setAppMetadataPath(app.getPath("documents")));
}

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <CssBaseline/>
    <Provider store={store}>
      <ConnectedRouter history={routerHistory}>{routes}</ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  rootElement,
);
