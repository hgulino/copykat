import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { formattedFileName } from '../../../utils'
import validateInput from '../../../utils/validations/createProjectForm'
import Field from '../Field'
import ReactSelect from '../ReactSelect'
import ColorSlider from '../ColorSlider'
import PathDialog from '../PathDialog'
import Typography from '@material-ui/core/Typography'

import ActionButton from '../../buttons/ActionButton'

const { dialog } = require('electron').remote

const styles = () => ({
  form: {},
  title: {
    margin: '30px 20px 30px',
  },
  rightIcon: {
    marginRight: '8px',
  },
  colorSlider: {},
  outlined: {
    padding: '20px',
    margin: '0px 20px 30px 20px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#CBCBCB',
    borderRadius: '8px',
  },
  demo: {
    // minWidth: '400px',
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
      color: '#006999',
      colors: {
        primary: '#66cffd',
        secondary: '#006999',
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
    this.setState({
      color: color.hex,
      colors: {
        primary: 'hsl(' + color.hsl.h + ', 100%, 85%)',
        secondary: 'hsl(' + color.hsl.h + ', 100%, 30%)',
      },
    })
  }

  render() {
    const { classes } = this.props
    const { errors, name, projectPath, colors } = this.state

    return (
      <div className={classes.form}>
        <Typography variant="h5" className={classes.title}>
          New project
        </Typography>
        <div className={classes.outlined}>
          <form onSubmit={this.onSubmit}>
            <Grid container direction="row" spacing={2}>
              <Grid container item direction="column" xs={12} md={6}>
                <Grid item>
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
                <Grid item>
                  <ReactSelect value={this.state.clientName} onChange={this.onChangeSelect} />
                </Grid>
                <Grid item>
                  <Field
                    id={'color'}
                    type={'text'}
                    label={'Color'}
                    value={this.state.color}
                    onChange={this.onChange}
                    error={errors.color}
                  />
                </Grid>
              </Grid>
              <Grid container item direction="column" className={classes.demo} xs={12} md={6} spacing={2}>
                <ColorSlider
                  color={this.state.color}
                  onChange={this.handleChangeComplete}
                  avatar={this.state.avatar}
                  colors={this.state.colors}
                  name={this.state.name}
                  path={this.state.projectPath + '\\' + this.state.name}
                  client={this.state.clientName}
                />
                <Grid item>
                  <ActionButton type="submit" title="Create new project" />
                </Grid>
              </Grid>
            </Grid>

            {/* <Grid item>
          <PathDialog
            id={'projectPath'}
            type={'dialog'}
            variant={'outlined'}
            label={'Project path'}
            value={projectPath}
            onChange={this.onChange}
            error={errors.projectPath}
            helperText={'The local directory for your project'}
          />
        </Grid> */}
          </form>
        </div>
      </div>
    )
  }
}

NewProjectForm.propTypes = {
  addNewProject: PropTypes.any,
  classes: PropTypes.object.isRequired,
  settings: PropTypes.any,
}

export default withStyles(styles)(NewProjectForm)
