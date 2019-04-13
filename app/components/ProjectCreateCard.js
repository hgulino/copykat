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
    width: 616,
    minHeight: 203,
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #1a61ef 0%,#16befd 99%)',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 300,
      width: '100%'
    }
  },
  iconContainer: {
    padding: '50px'
  },
  container: {
    padding: '50px',
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
            <Grid container>
              <Grid item xs={12} md={4} className={classes.iconContainer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="149.897"
                  height="100"
                  viewBox="0 0 149.897 150"
                >
                  <g
                    id="Group_23"
                    data-name="Group 23"
                    transform="translate(-55.019 -56.439)"
                  >
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M129.968,206.439A75.169,75.169,0,0,1,55.019,131.49v-1.683c19.065-4.878,47.076-14.921,72.423-37.9,20.716-18.778,27.476-37.015,40.422-35.368,17.663,2.245,28.868,38.665,32,48.842a132.665,132.665,0,0,1,5.053,24.422v1.683A75.169,75.169,0,0,1,129.968,206.439Z"
                      transform="translate(0)"
                      fill="#98e8ff"
                    />
                    <path
                      id="Path_11"
                      data-name="Path 11"
                      d="M129.968,206.439a75.169,75.169,0,0,0,74.949-74.949v-1.683c-19.065-4.878-47.076-14.921-72.423-37.9C111.778,73.133,105.018,54.9,92.072,56.542c-17.663,2.245-28.869,38.665-32,48.842a132.67,132.67,0,0,0-5.053,24.422v1.683A75.169,75.169,0,0,0,129.968,206.439Z"
                      transform="translate(0)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </Grid>
              <Grid item md={8} className={classes.container}>
                <Typography variant="h5">Create a new project</Typography>
                <Typography variant="subtitle1">
                  Starting a new project is easy! Plan out your development
                  process and get reminders when due dates are near.
                </Typography>
              </Grid>
            </Grid>
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
