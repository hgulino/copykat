import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import FolderIcon from '@material-ui/icons/Folder'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { formattedFileName } from '../../../utils'
import validateInput from '../../../utils/validations/createProjectForm'
import Field from '../Field'

import { SliderPicker } from 'react-color'
import { Avatar, Grid } from '@material-ui/core'
import ReactSelect from '../ReactSelect'

const { dialog } = require('electron').remote

const styles = () => ({
  rightIcon: {
    marginRight: '8px',
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
      avatar: 'CK',
      projectPath: this.props.settings.metadataPath ? this.props.settings.metadataPath : '',
      clientName: '',
      suggestions: [
        { label: 'Afghanistan' },
        { label: 'Aland Islands' },
        { label: 'Albania' },
        { label: 'Algeria' },
        { label: 'American Samoa' },
        { label: 'Andorra' },
        { label: 'Angola' },
        { label: 'Anguilla' },
        { label: 'Antarctica' },
        { label: 'Antigua and Barbuda' },
        { label: 'Argentina' },
        { label: 'Armenia' },
        { label: 'Aruba' },
        { label: 'Australia' },
        { label: 'Austria' },
        { label: 'Azerbaijan' },
        { label: 'Bahamas' },
        { label: 'Bahrain' },
        { label: 'Bangladesh' },
        { label: 'Barbados' },
        { label: 'Belarus' },
        { label: 'Belgium' },
        { label: 'Belize' },
        { label: 'Benin' },
        { label: 'Bermuda' },
        { label: 'Bhutan' },
        { label: 'Bolivia, Plurinational State of' },
        { label: 'Bonaire, Sint Eustatius and Saba' },
        { label: 'Bosnia and Herzegovina' },
        { label: 'Botswana' },
        { label: 'Bouvet Island' },
        { label: 'Brazil' },
        { label: 'British Indian Ocean Territory' },
        { label: 'Brunei Darussalam' },
      ],
      errors: {},
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleChangeComplete = this.handleChangeComplete.bind(this)
    this.rgbToHsl = this.rgbToHsl.bind(this)
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
    this.setState({ color: color.hex })
  }

  rgbToHsl(r, g, b) {
    ;(r /= 255), (g /= 255), (b /= 255)
    var max = Math.max(r, g, b),
      min = Math.min(r, g, b)
    var h,
      s,
      l = (max + min) / 2

    if (max === min) {
      h = s = 0 // achromatic
    } else {
      var d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
        default:
          break
      }
      h /= 6
    }

    return [h, s, l]
  }

  render() {
    const { classes } = this.props
    const { errors, name, projectPath } = this.state
    const r = parseInt(this.state.color.substr(1, 2), 16)
    const g = parseInt(this.state.color.substr(3, 2), 16)
    const b = parseInt(this.state.color.substr(5, 2), 16)
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
            <ReactSelect />
          </Grid>
          <Grid item>
            <Avatar
              style={{
                height: '50px',
                width: '50px',
                fontSize: '24px',
                fontWeight: 500,
                color: 'hsl(' + this.rgbToHsl(r, g, b)[0] * 360 + ', 100%, 30%)',
                backgroundColor: 'hsl(' + this.rgbToHsl(r, g, b)[0] * 360 + ', 100%, 70%)',
                boxShadow: '0 0 0 2px hsl(' + this.rgbToHsl(r, g, b)[0] * 360 + ', 100%, 30%)',
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
            <SliderPicker color={this.state.color} onChangeComplete={this.handleChangeComplete} />
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
