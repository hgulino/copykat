import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const styles = () => ({
  windowBar: {
    backgroundColor: '#383838',
    position: 'static',
  },
  primaryBar: {
    backgroundColor: '#3E3E3E',
    borderTop: '1px solid #2A2A2A',
    borderBottom: '1px solid #2A2A2A',
    alignItems: 'center',
  },
})

class Header extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.windowBar}>
        <AppBar component="div" className={classes.primaryBar} position="static" elevation={0}>
          {this.props.project.currentProject.id !== null ? (
            <Tabs
              value={this.props.router.location.pathname}
              indicatorColor="primary"
              textColor="primary">
              <Tab label="Home" value="/" component={Link} to={'/'} />
              <Tab label="Files" value="/files" component={Link} to={'/files'} />
              <Tab label="Kaban" value="/kaban" component={Link} to={'/kaban'} />
              <Tab label="Report" value="/report" component={Link} to={'/report'} />
            </Tabs>
          ) : (
            <Tabs
              value={this.props.router.location.pathname}
              indicatorColor="primary"
              textColor="primary">
              <Tab label="Home" value="/" component={Link} to={'/'} />
              <Tab label="Settings" value="/settings" component={Link} to={'/settings'} />
            </Tabs>
          )}
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
