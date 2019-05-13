import React, { Component } from 'react'
import Field from '../Field'

export default class NewProjectForm extends Component {
  updateNewProjectForm = (data) => {
    this.props.updateNewProjectForm(data)
  }
  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.props.project.createProjectForm)
    this.props.addNewProject(this.props.project.createProjectForm)
  }
  render() {
    const props = this.props.project.createProjectForm
    return (
      <form onSubmit={this.onSubmit}>
        <Field
          id={'name'}
          type={'text'}
          label={'Project name:'}
          value={props.name}
          updateForm={this.updateNewProjectForm}
        />
        <Field
          id={'path'}
          type={'dialog'}
          label={'Project path'}
          value={props.path}
          updateForm={this.updateNewProjectForm}
        />
        <button type="submit">Create new project</button>
      </form>
    )
  }
}
