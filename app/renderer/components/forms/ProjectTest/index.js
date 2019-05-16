import React, { Component } from 'react'
import Field from '../Field'
import { formattedFileName } from '../../../utils'
import validateInput from '../../../utils/validations/createProjectForm'
const { dialog } = require('electron').remote


export default class NewProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      projectPath: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.addNewProject(this.state)
    }
  }

  onChange(e) {
    e.preventDefault()
    if (e.target.type == 'button') {
      const location = dialog.showOpenDialog({
        properties: ['openDirectory']
      })
      if (location !== undefined) {
        this.setState({ [e.target.id]: location[0] })
      }
    } else {
      this.setState({ [e.target.id]: e.target.value })
    }
  }

  render() {
    const { errors, name, projectPath, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <Field
          id={'name'}
          type={'text'}
          label={'Project name:'}
          value={formattedFileName(name)}
          onChange={this.onChange}
          error={errors.name}
        />
        <Field
          id={'projectPath'}
          type={'dialog'}
          label={'Project path'}
          value={projectPath}
          onChange={this.onChange}
          error={errors.projectPath}
        />
        <button type="submit">Create new project</button>
      </form>
    )
  }
}
