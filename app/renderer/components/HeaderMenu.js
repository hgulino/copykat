import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
    render() {
        if (this.props.router.location == "/") {
            return (
                <div>
                    <h2>In Project</h2>
                    <button>Project 1</button>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>Main Menu</h2>
                    <button>Logout</button>
                </div>
            );
        }
    }
}
