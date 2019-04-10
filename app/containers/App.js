import React, { Component } from 'react';
import Header from '../components/Header'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PerfectScrollbar from 'react-perfect-scrollbar'

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    background: '#383838',
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  mainContent: {
    flex: 1,

    // overflow: 'auto',
    padding: '48px 36px 0'
  }
});


class App extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.appContent}>
          <Header />
          <PerfectScrollbar>
            <main className={classes.mainContent}>
              {children}
            </main>

          </PerfectScrollbar>

        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);
