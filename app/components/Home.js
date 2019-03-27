import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Navigator from './Navigator';
import Content from './Content';
import Header from './Header';
import routes from '../constants/routes';
// const fs = window.require('fs');

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  mainContent: {
    flex: 1,
    padding: '48px 36px 0',
    background: '#383838'
  },
});

const drawerWidth = 256;

class Home extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  // console.log(fs.readFile(path.resolve(__dirname, 'settings.json'), 'UTF-8', callback))

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appContent}>
        <Header />
          <main className={classes.mainContent}>
            <Content />
          </main>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.objectOf.isRequired
};

export default withStyles(styles, { withTheme: true })(Home);
