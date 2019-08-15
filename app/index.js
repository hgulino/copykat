import './app.global.css';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import React, { Fragment } from 'react';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
