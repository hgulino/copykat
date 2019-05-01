import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { desktopCapturer, remote } from 'electron';
import getFormattedTime from '../utils/dateFormat';
const fs = window.require('fs');
const app = remote.app;

export default class LoggedIn extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
  };

  handleLogout = () => {
    this.props.onLogout({
      username: '',
      loggedIn: false,
    });
  };

  handleScreenshot = () => {
    let options = {
      types: ['window', 'screen'],
      thumbnailSize: {
        width: 1900,
        height: 1080,
      },
    };

    desktopCapturer.getSources(options, function(error, sources) {
      if (error) return console.log(error);

      console.log('Get Screen Shot Sources');

      for (let i = 0; i < sources.length; i++) {
        console.log(sources[i].name);
        if (
          sources[i].name === 'Entire screen' ||
          sources[i].name === 'Screen 1' ||
          sources[i].name === 'Screen 2'
        ) {
          const screenshotPath =
            app.getPath('documents') + '/screen-' + [i] + '-' + getFormattedTime() + '.png';

          fs.writeFile(screenshotPath, sources[i].thumbnail.toPNG(), function(error) {
            if (error) return console.log(error);

            console.log(`Saved screenshot to: ${screenshotPath}`);
          });
        }
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Logged in as {this.props.user.username}</h2>
        <button onClick={this.handleLogout}>Logout</button>
        <button onClick={this.handleScreenshot}>Take screenshot</button>
      </div>
    );
  }
}
