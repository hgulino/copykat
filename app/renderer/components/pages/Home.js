import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import AddIcon from '@material-ui/icons/Add'
import LinkIcon from '@material-ui/icons/Link'

import * as animationData from '../../assets/data.json'
import CreateProjectForm from '../../containers/forms/CreateProjectConnect'
import ActionButton from '../buttons/ActionButton'
import ProjectCard from '../cards/ProjectCard'
import ProjectCreateCard from '../cards/ProjectCreateCard'
import PageHeader from '../layout/PageHeader'

const shell = require('electron').shell

const styles = (theme) => ({
  main: {
    padding: '48px 20px 20px',
    margin: 'auto',
    [theme.breakpoints.only('xl')]: {
      width: 1400,
    },
    [theme.breakpoints.down('lg')]: {
      width: 1000,
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  mainEmptyState: {
    padding: '100px 20px 20px',
  },
  lottie: {
    margin: '20px',
  },
  spacer: {
    position: 'relative',
    width: 316,
  },

  button: {
    margin: theme.spacing(1),
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
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
    }

    if (Object.keys(props.project.list).length === 0) {
      return (
        <div className={classes.mainEmptyState}>
          <Grid container justify="center">
            <Grid container item justify="center" alignItems="center" spacing={2}>
              <Grid item>
                <Typography variant="h5" style={{ fontWeight: 500 }}>
                  Can't seem to find anything...
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Lottie
                  className={classes.lottie}
                  options={defaultOptions}
                  height={300}
                  isStopped={false}
                  isPaused={false}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ maxWidth: 300, textAlign: 'center' }}>
                  Create a new project or link a .copykat file to see stuff here.
                </Typography>
              </Grid>
              <Grid item container justify="center">
                <Grid item className={classes.button}>
                  <ActionButton
                    title="New project"
                    color="primary"
                    iconLeft={<AddIcon />}
                    onClick={this.openForm.bind(this)}
                  />
                </Grid>
                <Grid item className={classes.button}>
                  <ActionButton
                    title="Link project"
                    color="secondary"
                    iconLeft={<LinkIcon />}
                    onClick={this.openForm.bind(this)}
                  />
                </Grid>
              </Grid>

              <Dialog
                open={this.props.project.createProjectForm.visible}
                onClose={this.openForm.bind(this)}
                maxWidth={'xl'}
                scroll={'body'}>
                <DialogContent>
                  <CreateProjectForm />
                </DialogContent>
              </Dialog>
            </Grid>
          </Grid>
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
                  avatar={item.avatar}
                  colors={item.colors}
                  client={item.client}
                  projectPath={item.projectPath}
                  onClick={this.openProject.bind(this, item.name)}
                />
              ))}
              {projects.length > 1 ? (
                <React.Fragment>
                  <Grid item className={classes.spacer} />
                  <Grid item className={classes.spacer} />
                  <Grid item className={classes.spacer} />
                </React.Fragment>
              ) : null}
              <Dialog
                open={this.props.project.createProjectForm.visible}
                onClose={this.openForm.bind(this)}
                maxWidth={'xl'}
                scroll={'body'}>
                <DialogContent>
                  <CreateProjectForm />
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
