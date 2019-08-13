import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    title: props =>
      props.iconLeft ? { marginLeft: 4 } : { marginLeft: 4, marginRight: 4 },
    button: {
      color: theme.palette.text.primary,
      borderRadius: '30px',
      fontSize: 16,
      fontWeight: 500,
      backgroundColor: props =>
        props.color === 'primary'
          ? theme.palette.action.green.main
          : theme.palette.action.blue.main,
      '&:hover': {
        backgroundColor: props =>
          props.color === 'primary'
            ? theme.palette.action.green.dark
            : theme.palette.action.blue.dark
      }
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative'
    },
    buttonProgress: {
      color: props =>
        props.color === 'primary'
          ? theme.palette.action.green.main
          : theme.palette.action.blue.main,
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12
    }
  })
);

export default function ActionButton(props) {
  const {
    color,
    disabled,
    iconLeft,
    iconRight,
    onClick,
    loading,
    title,
    type
  } = props;

  const styleProps = { color, iconLeft };
  const classes = useStyles(styleProps);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          type={type}
          className={classes.button}
          onClick={onClick}
          disabled={disabled || loading}
        >
          {iconLeft}
          <span className={classes.title}>{title}</span>
          {iconRight}
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            thickness={5}
            className={classes.buttonProgress}
          />
        )}
      </div>
    </div>
  );
}

ActionButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  iconLeft: PropTypes.shape({}),
  iconRight: PropTypes.shape({}),
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  type: PropTypes.string
};

ActionButton.defaultProps = {
  disabled: false,
  loading: false,
  iconLeft: null,
  iconRight: null,
  onClick: null,
  type: null
};
