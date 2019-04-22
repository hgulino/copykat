import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import theme from './theme';
import './app.global.css';

const store = configureStore();

render(
  <React.Fragment>
    <MuiThemeProvider theme={theme}>
      <AppContainer>
        <Root store={store} history={history} />
      </AppContainer>
    </MuiThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/Root').default;
    render(
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <AppContainer>
            <NextRoot store={store} history={history} />
          </AppContainer>
        </MuiThemeProvider>
      </React.Fragment>,
      document.getElementById('root')
    );
  });
}
