import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBack from '@material-ui/icons/ArrowBack'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(() => ({
  button: {
    color: 'white',
    borderRadius: '30px',
    fontWeight: 600,
    backgroundColor: '#5BC85B',
    '&:hover': {
      backgroundColor: '#5BC85B',
    },
  },
  iconButton: {
    borderColor: '#7B7B7B',
    borderRadius: '30px',
    backgroundColor: '#525252',
    padding: '5px',
    minWidth: '0px',
  },
}))

export default function BackButton(props) {
  const classes = useStyles()
  return (
    <Button
      variant="outlined"
      disableRipple
      classes={{
        root: classes.iconButton,
      }}
      onClick={props.onClick}>
      <ArrowBack />
    </Button>
  )
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}
