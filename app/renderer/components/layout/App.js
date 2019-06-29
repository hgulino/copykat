import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Header from '../../containers/HeaderConnect'

const styles = () => ({
  root: {
    minHeight: '100vh',
    background: '#383838',
    position: 'relative',
  },
  mainContainer: {
    overflow: 'auto',
    position: 'absolute',
    top: '50px',
    bottom: 0,
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.8em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#707070',
      '&:hover': {
        backgroundColor: '#606060',
      },
    },
    '.page': {
      overflowY: 'auto',
      position: 'fixed',
      top: '50px',
      bottom: 0,
      width: '100%',
      height: '100%'
    },
    '.page-enter': {
      opacity: 0.01,
      transform: 'scale(1.1)',
    },
    '.page-enter-active': {
      opacity: 1,
      transform: 'scale(1)',
      transition: 'opacity 300ms, transform 300ms',
    },
    '.page-exit': {
      opacity: 1,
      transform: 'scale(1)',
    },
    '.page-exit-active': {
      opacity: 0.01,
      transform: 'scale(1.1)',
      transition: 'opacity 300ms, transform 300ms',
    },
  },
})

class App extends Component {
  render() {
    const { classes, children } = this.props
    return (
      <div className={classes.root}>
        <Header />
        <main>{children}</main>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(App)
