import React, { Component } from 'react';

export default class Home extends Component {

    componentDidMount() {
        console.log(this.props.project.directory)
        this.props.scanDirectoryProjects(this.props.project.directory)
    }

    render() {
        const props = this.props
        return (
            <div>
                <h1>Projects</h1>
                <ul>
                    <li>
                        Project Name 1
                    </li>
                    <li>
                        Project Name 1
                    </li>
                </ul>
            </div>
        )
    }
}
