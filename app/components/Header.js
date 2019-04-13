import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
import WindowActions from './WindowActions';
const remote = require('electron').remote;
const window = remote.getCurrentWindow();

const styles = theme => ({
  windowBar: {
    backgroundColor: '#383838',
    position: 'static'
  },
  dragable: {
    flex: '1',
    '-webkit-app-region': 'drag'
  },
  iconContainer: {
    height: '12px',
    marginLeft: '8px',
    marginTop: '6px'
  },
  windowButtonBase: {
    width: '46px',
    height: '28px',
    color: '#FFF',
    cursor: 'default'
  },
  minMaxButton: {
    '&:hover': {
      backgroundColor: '#525252'
    }
  },
  closeButton: {
    '&:hover': {
      backgroundColor: theme.palette.error.main
    }
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
      <WindowActions />
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
