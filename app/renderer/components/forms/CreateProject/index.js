import { Avatar, Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import FolderIcon from '@material-ui/icons/Folder'
import convert from 'color-convert'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { SliderPicker } from 'react-color'

import { formattedFileName } from '../../../utils'
import validateInput from '../../../utils/validations/createProjectForm'
import Field from '../Field'
import ReactSelect from '../ReactSelect'

const { dialog } = require('electron').remote

const styles = () => ({
  rightIcon: {
    marginRight: '8px',
  },
  colorSlider: {
    width: 100,
  },
})

const getInitials = function(string) {
  var names = string.split('-'),
    initials = names[0].substring(0, 1).toUpperCase()

  if (names.length > 1) {
    initials += names[1].substring(0, 1).toUpperCase()
  }
  return initials
}

class NewProjectForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      color: '#16BEFD',
      colors: {
        primary: '#16BEFD',
        secondary: '#16BEFD',
      },
      avatar: 'CK',
      projectPath: this.props.settings.metadataPath ? this.props.settings.metadataPath : '',
      clientName: '',
      suggestions: [{ label: 'Afghanistan' }],
      errors: {},
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleChangeComplete = this.handleChangeComplete.bind(this)
    this.onChangeSelect = this.onChangeSelect.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    validateInput(this.state).then((res) => {
      if (!res.isValid) {
        const errors = res.errors
        this.setState({ errors })
      } else {
        this.setState({ errors: {} })
        this.setState({ projectPath: this.state.projectPath + '/' + this.state.name })
        this.props.addNewProject(this.state)
      }
    })
  }

  setSuggestions() {}

  onChangeSelect = (value) => {
    this.setState({ clientName: value })
  }

  onChange(e) {
    e.preventDefault()
    if (e.currentTarget.id == 'projectPath') {
      const location = dialog.showOpenDialog({
        properties: ['openDirectory'],
      })
      console.log(location)
      if (location !== undefined) {
        this.setState({ [e.currentTarget.id]: location[0] })
      }
    } else {
      this.setState({
        [e.target.id]: e.target.value,
        avatar: getInitials(e.target.value),
      })
    }
  }

  handleChangeComplete = (color) => {
    console.log(color.hex)
    this.setState({
      color: color.hex,
      colors: {
        primary: 'hsl(' + convert.hsl.hex(color.hex) + ', 100%, 70%)',
        secondary: 'hsl(' + convert.hsl.hex(color.hex) + ', 100%, 30%)',
      },
    })
  }

  render() {
    const { classes } = this.props
    const { errors, name, projectPath } = this.state
    const hsl = convert.hsl.hex(this.state.color)
    console.log(hsl)
    return (
      <form onSubmit={this.onSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <Field
              id={'name'}
              type={'text'}
              label={'Project name'}
              value={formattedFileName(name)}
              onChange={this.onChange}
              error={errors.name}
              helperText={'A unique name for your project'}
            />
          </Grid>
          <Grid item xs={6}>
            <ReactSelect value={this.state.clientName} onChange={this.onChangeSelect} />
          </Grid>
          <Grid item>
            <Avatar
              style={{
                height: '50px',
                width: '50px',
                fontSize: '24px',
                fontWeight: 500,
                color: 'hsl(' + hsl + ', 100%, 30%)',
                backgroundColor: 'hsl(' + hsl + ', 100%, 70%)',
                boxShadow: '0 0 0 2px hsl(' + hsl + ', 100%, 30%)',
              }}>
              {this.state.avatar}
            </Avatar>
          </Grid>
          <Grid item>
            <Field
              id={'projectPath'}
              type={'dialog'}
              variant={'outlined'}
              label={'Project path'}
              value={projectPath}
              onChange={this.onChange}
              error={errors.projectPath}
              helperText={'The local directory for your project'}>
              <FolderIcon className={classes.rightIcon} />
            </Field>
          </Grid>
          <Grid item>
            <SliderPicker
              className={classes.colorSlider}
              color={this.state.color}
              onChangeComplete={this.handleChangeComplete}
            />
          </Grid>
          <Grid>
            <Button type="submit">Create new project</Button>
          </Grid>
        </Grid>
      </form>
    )
  }
}

NewProjectForm.propTypes = {
  addNewProject: PropTypes.any,
  classes: PropTypes.object.isRequired,
  settings: PropTypes.any,
}

export default withStyles(styles)(NewProjectForm)
