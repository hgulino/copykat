import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
const remote = require('electron').remote;
const window = remote.getCurrentWindow();

const styles = theme => ({
  windowBar: {
    height: '28px',
    backgroundColor: '#383838'
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

function MinimizeIcon() {
  return (
    <SvgIcon>
      <rect x="5.88" y="11.44" width="12.25" height="1.13" />
    </SvgIcon>
  );
}

function MaximizeIcon() {
  return (
    <SvgIcon>
      <path d="M7.92,8.49H5.2v9.75H16.08V15.51H18.8V5.76H7.92Zm7,8.62H6.32V9.62H15v7.49ZM9.05,6.89h8.63v7.49h-1.6V8.49h-7Z" />
    </SvgIcon>
  );
}

function CloseIcon() {
  return (
    <SvgIcon>
      <polygon points="17.52 7.28 16.72 6.48 12 11.2 7.28 6.48 6.48 7.28 11.2 12 6.48 16.72 7.28 17.52 12 12.8 16.72 17.52 17.52 16.72 12.8 12 17.52 7.28" />
    </SvgIcon>
  );
}

function Header(props) {
  const { classes } = props;

  function minimize() {
    window.minimize();
  }
  function maximize() {
    if (!window.isMaximized()) {
      window.maximize();
    } else {
      window.unmaximize();
    }
  }
  function close() {
    window.close();
  }

  return (
    <React.Fragment>
      <Grid container justify="space-between" className={classes.windowBar}>
        <Grid item className={classes.dragable}>
          <div className={classes.iconContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72.245"
              height="17.108"
              viewBox="0 0 72.245 17.108"
            >
              <g
                id="Group_25"
                data-name="Group 25"
                transform="translate(-39.797 -79.292)"
              >
                <text
                  id="copy_kat"
                  data-name="copy kat"
                  transform="translate(60.042 91.292)"
                  fill="#cbcbcb"
                  fontSize="12"
                  fontFamily="Montserrat-SemiBold, Montserrat"
                  fontWeight="600"
                  letterSpacing="-0.01em"
                >
                  <tspan x="0" y="0">
                    copy kat
                  </tspan>
                </text>
                <g
                  id="Group_24"
                  data-name="Group 24"
                  transform="translate(39.797 80.241)"
                >
                  <path
                    id="Path_12"
                    data-name="Path 12"
                    d="M47.871,100.6A8.1,8.1,0,0,1,39.8,92.525v-.181a18.255,18.255,0,0,0,7.8-4.082c2.232-2.023,2.96-3.988,4.354-3.81,1.9.242,3.11,4.165,3.447,5.262a14.29,14.29,0,0,1,.544,2.631v.181A8.1,8.1,0,0,1,47.871,100.6Z"
                    transform="translate(-39.797 -84.439)"
                    fill="#cbcbcb"
                  />
                  <path
                    id="Path_13"
                    data-name="Path 13"
                    d="M47.871,100.6a8.1,8.1,0,0,0,8.074-8.074v-.181a18.255,18.255,0,0,1-7.8-4.082c-2.232-2.023-2.96-3.988-4.354-3.81-1.9.242-3.11,4.165-3.447,5.262a14.29,14.29,0,0,0-.544,2.631v.181A8.1,8.1,0,0,0,47.871,100.6Z"
                    transform="translate(-39.797 -84.439)"
                    fill="#cbcbcb"
                  />
                </g>
              </g>
            </svg>
          </div>
        </Grid>
        <Grid item>
          <ButtonBase
            className={classNames(
              classes.windowButtonBase,
              classes.minMaxButton
            )}
            onClick={minimize}
          >
            <MinimizeIcon />
          </ButtonBase>
          <ButtonBase
            className={classNames(
              classes.windowButtonBase,
              classes.minMaxButton
            )}
            onClick={maximize}
          >
            <MaximizeIcon />
          </ButtonBase>
          <ButtonBase
            className={classNames(
              classes.windowButtonBase,
              classes.closeButton
            )}
            onClick={close}
          >
            <CloseIcon />
          </ButtonBase>
        </Grid>
      </Grid>
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
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
