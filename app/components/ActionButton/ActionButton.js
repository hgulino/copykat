import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import { createStyles, Button, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    button: {
      '&:hover': {
        backgroundColor: props =>
          props.color === 'primary'
            ? theme.palette.action.green.dark
            : theme.palette.action.blue.dark
      },
      backgroundColor: props =>
        props.color === 'primary'
          ? theme.palette.action.green.main
          : theme.palette.action.blue.main,
      borderRadius: '30px',
      boxShadow: '0px 2px 3px 0px rgba(0,0,0,0.2)',
      color: theme.palette.text.primary,
      fontSize: 16,
      fontWeight: 500
    },
    buttonProgress: {
      color: props =>
        props.color === 'primary'
          ? theme.palette.action.green.main
          : theme.palette.action.blue.main,
      left: '50%',
      marginLeft: -12,
      marginTop: -12,
      position: 'absolute',
      top: '50%'
    },
    root: {
      alignItems: 'center',
      display: 'flex'
    },
    titlePadding: {
      paddingLeft: 6,
      paddingRight: 6
    },
    titlePaddingLeft: {
      paddingLeft: 4,
      paddingRight: 8
    },
    titlePaddingRight: {
      paddingLeft: 8,
      paddingRight: 4
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative'
    }
  })
);

export default function ActionButton(props) {
  const {
    color,
    disabled,
    iconLeft,
    iconRight,
    loading,
    onClick,
    title,
    type
  } = props;

  const styleProps = { color };
  const classes = useStyles(styleProps);

  let { titlePadding } = classes;

  if (iconLeft) {
    titlePadding = classes.titlePaddingLeft;
  } else if (iconRight) {
    titlePadding = classes.titlePaddingRight;
  }

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          className={classes.button}
          disabled={disabled || loading}
          onClick={onClick}
          size="small"
          type={type}
          variant="contained"
        >
          {iconLeft}
          <span className={titlePadding}>{title}</span>
          {iconRight}
        </Button>
        {loading && (
          <CircularProgress
            className={classes.buttonProgress}
            size={24}
            thickness={5}
          />
        )}
      </div>
    </div>
  );
}

ActionButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  disabled: PropTypes.bool,
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  type: PropTypes.string
};

ActionButton.defaultProps = {
  disabled: false,
  iconLeft: null,
  iconRight: null,
  loading: false,
  onClick: null,
  type: null
};
