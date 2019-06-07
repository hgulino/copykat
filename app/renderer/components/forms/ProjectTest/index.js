import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import FolderIcon from '@material-ui/icons/Folder'
import React, { Component } from 'react'

import { formattedFileName } from '../../../utils'
import validateInput from '../../../utils/validations/createProjectForm'
import Field from '../Field'

const { dialog } = require('electron').remote

const styles = () => ({
  rightIcon: {
    marginRight: '8px',
  },
})

class NewProjectForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      projectPath: this.props.settings.metadataPath ? this.props.settings.metadataPath : '',
      errors: {},
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
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
      this.setState({ [e.target.id]: e.target.value })
    }
  }

  render() {
    const { classes } = this.props
    const { errors, name, projectPath } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <Field
          id={'name'}
          type={'text'}
          label={'Project name'}
          value={formattedFileName(name)}
          onChange={this.onChange}
          error={errors.name}
          helperText={'A unique name for your project'}
        />
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
        <Button loading type="submit">
          Create new project
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(NewProjectForm)
