import React, { Component } from 'react'
import NewProjectForm from '../containers/forms/NewProjectConnect'

const shell = require('electron').shell

export default class Home extends Component {
  componentDidMount() {
    this.props.setAppMetadataPath(this.props.settings.metadataPath)
  }

  openProject(path) {
    shell.openItem(path)
  }

  render() {
    const props = this.props

    if (props.project.list.length == 0) {
      return (
        <div>
          <h1>Projects</h1>
          <div>Can't seem to find anything...</div>
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
        <div>
          <h1>Projects</h1>
          <ul>
            {projects.map((item, key) => (
              <li key={key}>
                {item.name}
                <button onClick={this.openProject.bind(this, item.projectPath)}>open</button>
              </li>
            ))}
          </ul>
          <br />
          <NewProjectForm />
        </div>
      )
    }
  }
}
