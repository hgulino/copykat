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
    maxWidth: 300,
    overflow: 'hidden'
  },
  container: {
    padding: '20px'
  },
  avatar: {
    height: '50px',
    width: '50px',
    fontSize: '24px',
    fontWeight: 500,
    color: '#974BC2',
    backgroundColor: '#EBC8FF',
    boxShadow: '0 0 0 2px #974BC2'
  },
  moreVertIcon: {
    color: '#CBCBCB',
    position: 'absolute',
    top: '15%',
    left: '90%',
    zIndex: '2',
    transform: 'translate(-50%, -50%)',
    '&:hover': {
      color: '#FFF',
      cursor: 'pointer'
    }
  },
  divider: {
    backgroundColor: '#CBCBCB',
    position: 'relative',
    top: '58px'
  },
  containerInfo: {
    padding: '0px 20px 20px 20px'
  },
  chipWarning: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.text.primary
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
            <Divider className={classes.divider} />
            <Grid
              container
              className={classes.container}
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid item>
                <Avatar className={classes.avatar}>CK</Avatar>
              </Grid>
            </Grid>

            <Grid
              container
              className={classes.containerInfo}
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography variant="subtitle1">Client Name</Typography>
                <Typography variant="h6">Copy Kat</Typography>
              </Grid>
              <Grid item>
                <Chip label="Due soon!" className={classes.chipWarning} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  Manage local projects efficiently through the power of
                  Electron.
                </Typography>
              </Grid>
            </Grid>
          </ButtonBase>
          <IconButton className={classes.moreVertIcon}>
            <MoreVertIcon />
          </IconButton>
        </Paper>
      </Grid>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectCard);
