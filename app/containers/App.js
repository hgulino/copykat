import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
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
