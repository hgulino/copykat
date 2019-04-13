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
import ProjectCard from './ProjectCard';
import ProjectCreateCard from './ProjectCreateCard';
const remote = require('electron').remote;
// import jetpack from 'fs-jetpack';
const jetpack = require('fs-jetpack');
const app = remote.app;

const styles = theme => ({
  main: {
    flex: 1,
    padding: '48px 36px 0'
  }
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
      <div className={classes.main}>
        <Grid container justify="center" spacing={16}>
          <ProjectCreateCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Grid>
      </div>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
