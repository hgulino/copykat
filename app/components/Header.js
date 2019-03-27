import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  primaryBar: {
    backgroundColor: '#3E3E3E',
    borderTop: '1px solid #2A2A2A',
    borderBottom: '1px solid #2A2A2A',
    alignItems: 'center',
  }
});

function Header(props) {
  const { classes } = props;

  return (
      <AppBar
        component="div"
        className={classes.primaryBar}
        position="static"
        elevation={0}
      >
        <Tabs value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Home" />
          <Tab label="Calendar" />
          <Tab label="Settings" />
        </Tabs>
      </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
