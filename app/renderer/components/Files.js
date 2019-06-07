import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'

import PageHeader from './layout/PageHeader'

const styles = () => ({
  content: {
    padding: '48px 0 0',
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

class Files extends Component {
  closeProject() {
    this.props.push('/')
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.content}>
        <Grid container direction="column" justify="center">
          <Grid container item justify="center" className={classes.paddingBottom}>
            <PageHeader
              currentProject={this.props.project.currentProject}
              closeProject={this.closeProject.bind(this)}
            />
            <Grid container item justify="center">
              <Paper className={classes.paper}>
                <Grid container>
                  <Grid item />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Files)
