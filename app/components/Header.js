import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const styles = theme => ({
  windowBar: {
    backgroundColor: '#383838',
    position: 'static'
  },
  primaryBar: {
    backgroundColor: '#3E3E3E',
    borderTop: '1px solid #2A2A2A',
    borderBottom: '1px solid #2A2A2A',
    alignItems: 'center'
  }
});

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.windowBar}>
      {/* <WindowActions /> */}
      <AppBar
        component="div"
        className={classes.primaryBar}
        position="static"
        elevation={0}
      >
        <Tabs value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Home" component={Link} to={routes.HOME} />
          <Tab label="Calendar" component={Link} to={routes.CALENDAR} />
          <Tab label="Settings" component={Link} to={routes.SETTINGS} />
        </Tabs>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
