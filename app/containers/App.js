import React, { Component } from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    minHeight: '100vh',
    background: '#383838',
    position: 'relative'
  },
  mainContainer: {
    overflow: 'auto',
    position: 'absolute',
    top: '78px',
    bottom: 0,
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.8em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#707070',
      '&:hover': {
        backgroundColor: '#606060',
      }
    }
  }
});

class App extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        <div className={classes.mainContainer}>
          <main className={classes.mainContent}>{children}</main>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);
