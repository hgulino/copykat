import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
    render() {
        if (this.props.project.inProject == true) {
            return (
                <div>
                    <h2>In Project</h2>
                    <button onClick={this.props.projectClosed}>To home screen</button>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>Main Menu</h2>
                    <button onClick={this.props.projectOpened}>Open project</button>
                </div>
            );
        }
    }
}
