import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Menu extends Component {

    render() {
        const props = this.props
        if (props.project.projectId == null) {
            return (
                <div>
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/settings">Settings</Link></button>
                </div>
            );
        } else {
            return (
                <div>
                    <button><Link to="/">Home</Link></button>
                    <button>Files</button>
                    <button>Kaban</button>
                    <button>Report</button>
                </div>
            );
        }
    }
}
