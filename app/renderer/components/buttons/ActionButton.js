import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import theme from '../../theme'

const styles = () => ({
  title: {
    marginRight: 4,
    marginLeft: 4,
  },
  primary: {
    color: 'white',
    borderRadius: '30px',
    fontSize: 16,
    fontWeight: 400,
    backgroundColor: theme.palette.action.primary,
    '&:hover': {
      backgroundColor: theme.palette.action.primary,
    },
  },
  secondary: {
    color: 'white',
    borderRadius: '30px',
    fontSize: 16,
    fontWeight: 400,
    backgroundColor: theme.palette.action.secondary,
    '&:hover': {
      backgroundColor: theme.palette.action.secondary,
    },
  },
})

class ActionButton extends Component {
  render() {
    const { classes } = this.props
    return (
      <Button
        variant="contained"
        className={this.props.color === 'primary' ? classes.primary : classes.secondary}
        onClick={this.props.onClick}>
        {this.props.iconLeft}
        <span className={classes.title}>{this.props.title}</span>
        {this.props.iconRight}
      </Button>
    )
  }
}

export default withStyles(styles)(ActionButton)
