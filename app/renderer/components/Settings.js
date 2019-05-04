import React, { Component } from 'react';
const { dialog } = require('electron').remote;

export default class Settings extends Component {

    render() {
        const props = this.props
        function openPath(e) {
            e.preventDefault()
            const path = dialog.showOpenDialog({
                properties: ['openDirectory']
            })
            if (path !== undefined) {
                props.setDirectoryPath(path[0])
            }
        };
        return (
            <div>
                <br />
                <h4>The current directory is {props.project.directory}</h4>
                <button onClick={openPath}>Change save path</button>
            </div>
        )
    }
}
