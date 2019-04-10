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
import Calendar from './Calendar';
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
  // calendar: {
  //   height: '500px'
  // },
});

class Content extends Component {
  componentDidMount() {
    // window.addEventListener('mouseup', this._onDragLeave);
    // window.addEventListener('dragenter', this._onDragEnter);
    window.addEventListener('dragover', this._onDragOver);
    window.addEventListener('drop', this._onDrop);
  }
  _onDrop(e) {
    e.preventDefault();
    e.stopPropagation();

    for (let f of e.dataTransfer.files) {
      console.log('File(s) you dragged here: ', f.path);
    }
  }
  _onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  render() {
    console.log(
      jetpack.read(app.getPath('documents') + '/CopyKat/metadata.json', 'json')
    );
    console.log(app.getName());

    const { classes } = this.props;
    return (
      <Grid container justify="center" spacing={24}>
        <Grid item>
          <Paper id="dragbox" className={classes.paper}>
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
        </Grid>{' '}
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
        </Grid>{' '}
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
        </Grid>{' '}
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
        </Grid>{' '}
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
        </Grid>{' '}
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
        </Grid>{' '}
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
        </Grid>{' '}
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
      </Grid>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
