import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import CopyKatLogo from '../../icons/copykat-logo'

const styles = (theme) => ({
  paper: {
    position: 'relative',
    width: 616,
    minHeight: 203,
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #1a61ef 0%,#16befd 99%)',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 300,
      width: '100%',
    },
  },
  iconContainer: {
    padding: '50px 40px 0px 80px',
  },
  cardTitle: {
    marginBottom: '14px',
  },
  container: {
    padding: '50px',
    [theme.breakpoints.down('sm')]: {
      padding: '20px',
      marginTop: '20px',
    },
  },
})

class ProjectCreateCard extends Component {
  render() {
    const { classes } = this.props
    return (
      <Grid item>
        <Paper className={classes.paper}>
          <ButtonBase
            onClick={this.props.onClick}
            focusRipple
            style={{
              display: 'inherit',
              cursor: 'auto',
              textAlign: 'inherit',
            }}>
            <Grid container>
              <Hidden smDown>
                <Grid item xs={12} md={4} className={classes.iconContainer}>
                  <CopyKatLogo />
                </Grid>
              </Hidden>
              <Grid item md={8} className={classes.container}>
                <Typography variant="h5" className={classes.cardTitle}>
                  Create a new project
                </Typography>
                <Typography variant="subtitle2">
                  Starting a new project is easy! Plan out your development process and get
                  reminders when due dates are near.
                </Typography>
              </Grid>
            </Grid>
          </ButtonBase>
        </Paper>
      </Grid>
    )
  }
}

ProjectCreateCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProjectCreateCard)
