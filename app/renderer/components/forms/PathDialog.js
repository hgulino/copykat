import Button from '@material-ui/core/Button'
import FormHelperText from '@material-ui/core/FormHelperText'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from '@material-ui/core'

const styles = (theme) => ({
  main: {
    flex: 1,
    padding: '48px 36px 0',
  },
  helperText: {
    margin: '8px 12px 0',
  },
  error: {
    borderColor: theme.palette.error.main,
    color: theme.palette.error.main,
  },
})

class PathDialog extends Component {
  render() {
    const props = this.props
    const { classes } = this.props

    return (
      <React.Fragment>
        <Link
          id={props.id}
          component="button"
          variant="body2"
          className={props.error ? classes.error : classes.button}
          onClick={props.onChange}>
          {props.value}
        </Link>
        <FormHelperText className={classes.helperText} error={props.error ? true : false}>
          {props.error ? props.error : props.helperText}
        </FormHelperText>
      </React.Fragment>
    )
  }
}

PathDialog.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object.isRequired,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  variant: PropTypes.string,
}

export default withStyles(styles)(PathDialog)
