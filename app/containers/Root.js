import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Routes from '../Routes';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    store: PropTypes.shape({}).isRequired
  };

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}
