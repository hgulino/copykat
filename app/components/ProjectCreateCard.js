import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
const remote = require('electron').remote;
// import jetpack from 'fs-jetpack';
const jetpack = require('fs-jetpack');
const app = remote.app;

const styles = theme => ({
  paper: {
    position: 'relative',
    maxWidth: 616,
    minHeight: 203,
    overflow: 'hidden'
  },
  container: {
    padding: '20px'
  }
});

class ProjectCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid item>
        <Paper className={classes.paper}>
          <ButtonBase
            focusRipple
            style={{
              display: 'inherit',
              cursor: 'auto',
              textAlign: 'inherit'
            }}
          >
            <Typography variant="body1">
              Manage local projects efficiently through the power of Electron.
            </Typography>
          </ButtonBase>
        </Paper>
      </Grid>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectCard);
