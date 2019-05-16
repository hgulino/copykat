import React, { Component } from 'react'
import Field from '../Field'
import { formattedFileName } from '../../../utils'
import {validateInput} from '../../../utils/validations/createProjectForm'

export default class NewProjectForm extends Component {
  updateNewProjectForm = (data) => {
    this.props.updateNewProjectForm(data)
  }

  isValid() {
    const {errors, isValid } = validateInput(this.props.project.createProjectForm)

    if(!isValid) {
      this.props.updateNewProjectForm(data)
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const props = this.props
    // console.log(props.project.createProjectForm.path == '')
    // if (props.project.createProjectForm.path == '') {
    //   const fileName = formattedFileName(props.project.createProjectForm.name)
    //   this.updateNewProjectForm({ path: props.settings.metadataPath + "/" + fileName })
    // }
    props.addNewProject(props.project.createProjectForm)
  }
  render() {
    const props = this.props.project.createProjectForm
    return (
      <form onSubmit={this.onSubmit}>
        <Field
          id={'name'}
          type={'text'}
          label={'Project name:'}
          value={formattedFileName(props.name)}
          updateForm={this.updateNewProjectForm}
          error={errors.name}
        />
        <Field
          id={'path'}
          type={'dialog'}
          label={'Project path'}
          value={props.path}
          updateForm={this.updateNewProjectForm}
          error={errors.path}
        />
        <button type="submit">Create new project</button>
      </form>
    )
  }
}
