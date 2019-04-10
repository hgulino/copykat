import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Content from './Content';
import routes from '../constants/routes';
// const fs = window.require('fs');

const styles = theme => ({

});

class Home extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Content />
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Home);
