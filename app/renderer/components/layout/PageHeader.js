import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import ArrowBack from '@material-ui/icons/ArrowBack'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import React, { Component } from 'react'

const styles = (theme) => ({
  content: {
    padding: 40,
    [theme.breakpoints.up('lg')]: {
      width: 1000,
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  paper: {
    position: 'relative',
    width: 800,
    overflow: 'hidden',
    minHeight: 204,
  },
  button: {
    color: 'white',
    borderRadius: '30px',
    fontWeight: 600,
    backgroundColor: '#5BC85B',
    '&:hover': {
      backgroundColor: '#5BC85B',
    },
  },
  iconButton: {
    borderColor: '#7B7B7B',
    borderRadius: '30px',
    backgroundColor: '#525252',
    padding: '5px',
    minWidth: '0px',
  },
  sortButton: {
    borderColor: '#7B7B7B',
    borderRadius: '30px',
    backgroundColor: '#525252',
    padding: '10px, 5px',
    minWidth: '0px',
  },
  outlined: {
    padding: '20px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#CBCBCB',
    borderRadius: '8px',
  },
  paddingRight: {
    paddingRight: 25,
  },
  paddingBottom: {
    paddingBottom: 25,
  },
})

class PageHeader extends Component {
  render() {
    const { classes } = this.props
    return (
      <Grid className={classes.content} container direction="column" justify="center">
        <Grid item className={classes.paddingBottom}>
          <Grid container direction="row" justify="space-between" className={classes.main}>
            <Grid item>
              <Grid container direction="row" justify="center" alignItems="center">
                {this.props.closeProject ? (
                  <Grid item className={classes.paddingRight}>
                    <Button
                      variant="outlined"
                      disableRipple
                      classes={{ root: classes.iconButton }}
                      onClick={this.props.closeProject.bind(this)}>
                      <ArrowBack />
                    </Button>
                  </Grid>
                ) : (
                  <div />
                )}
                {this.props.currentProject ? (
                  <Grid item className={classes.paddingRight}>
                    <Typography variant="h1">{this.props.currentProject.id}</Typography>
                  </Grid>
                ) : (
                  <Grid item className={classes.paddingRight}>
                    <Typography variant="h1">Here is a list of your projects!</Typography>
                  </Grid>
                )}
                <Grid>
                  <Button variant="contained" className={classes.button}>
                    <AddIcon />
                    Add new folder
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" justify="center" alignItems="center">
                <Grid item className={classes.paddingRight}>
                  <Typography variant="body2">Sort by</Typography>
                </Grid>
                <Grid item>
                  <Button variant="outlined" disableRipple classes={{ root: classes.sortButton }}>
                    Name
                    <KeyboardArrowDown />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(PageHeader)
