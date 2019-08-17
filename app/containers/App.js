import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CssBaseline } from '@material-ui/core';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    );
  }
}
