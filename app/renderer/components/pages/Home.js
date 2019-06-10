import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'

import NewProjectForm from '../../containers/forms/NewProjectConnectect'
import ProjectCard from '../cards/ProjectCardd'
import ProjectCreateCard from '../cards/ProjectCreateCardd'
import PageHeader from '../layout/PageHeaderr'
import ClientDropdown from '../forms/ClientDropdown';

const shell = require('electron').shell

const styles = () => ({
  main: {
    padding: '48px 20px 20px',
  },
  spacer: {
    position: 'relative',
    width: 316,
  },
  outlined: {
    padding: '20px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#CBCBCB',
    borderRadius: '8px'
  },
})

class Home extends Component {
  componentDidMount() {
    this.props.setCurrentProject(null)
    this.props.setAppMetadataPath(this.props.settings.metadataPath)
  }

  openProjectInFolder(path) {
    shell.openItem(path)
  }

  openProject(id) {
    this.props.setCurrentProject(id)
    this.props.push('/files')
  }

  openForm() {
    this.props.toggleCreateProjectForm()
  }

  render() {
    const props = this.props
    const { classes } = this.props

    if (props.project.list.length == 0) {
      return (
        <div>
          <h1>Projects</h1>
          <p>Can't seem to find anything...</p>
          <br />
          <NewProjectForm />
        </div>
      )
    } else {
      var json = props.project.list
      var projects = []
      Object.keys(json).forEach(function(key) {
        projects.push(json[key])
      })

      return (
        <div className={classes.main}>
          <Grid container justify="center">
            <PageHeader />
            <Grid container item justify="center" spacing={2}>
              <ProjectCreateCard onClick={this.openForm.bind(this)} />
              {projects.map((item, key) => (
                <ProjectCard
                  key={key}
                  name={item.name}
                  projectPath={item.projectPath}
                  onClick={this.openProject.bind(this, item.name)}
                />
              ))}
              <Grid item className={classes.spacer} />
              <Grid item className={classes.spacer} />
              <Grid item className={classes.spacer} />
              <Dialog
                open={this.props.project.createProjectForm.visible}
                onClose={this.openForm.bind(this)}>
                <DialogContent>
                  <Typography variant="h5">New project creation</Typography>
                  <div className={classes.outlined}>
                    <NewProjectForm />
                  </div>
                </DialogContent>
              </Dialog>
            </Grid>
          </Grid>
        </div>
      )
    }
  }
}

export default withStyles(styles)(Home)
