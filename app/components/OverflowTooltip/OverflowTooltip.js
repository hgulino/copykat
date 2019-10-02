import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip, Typography } from '@material-ui/core';

function arrowGenerator(color) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      '&::before': {
        borderColor: `transparent transparent ${color} transparent`,
        borderWidth: '0 1em 1em 1em'
      },
      height: '1em',
      left: 0,
      marginTop: '-0.95em',
      top: 0,
      width: '2em'
    },
    '&[x-placement*="left"] $arrow': {
      '&::before': {
        borderColor: `transparent transparent transparent ${color}`,
        borderWidth: '1em 0 1em 1em'
      },
      height: '2em',
      marginRight: '-0.95em',
      right: 0,
      width: '1em'
    },
    '&[x-placement*="right"] $arrow': {
      '&::before': {
        borderColor: `transparent ${color} transparent transparent`,
        borderWidth: '1em 1em 1em 0'
      },
      height: '2em',
      left: 0,
      marginLeft: '-0.95em',
      width: '1em'
    },
    '&[x-placement*="top"] $arrow': {
      '&::before': {
        borderColor: `${color} transparent transparent transparent`,
        borderWidth: '1em 1em 0 1em'
      },
      bottom: 0,
      height: '1em',
      left: 0,
      marginBottom: '-0.95em',
      width: '2em'
    }
  };
}

const useStylesArrow = makeStyles({
  arrow: {
    '&::before': {
      borderStyle: 'solid',
      content: '""',
      display: 'block',
      height: 0,
      margin: 'auto',
      width: 0
    },
    fontSize: 6,
    position: 'absolute'
  },
  popper: arrowGenerator('rgba(0, 0, 0, 0.9)'),
  tooltip: {
    position: 'relative'
  }
});

function ArrowTooltip(props) {
  const { arrow, ...classes } = useStylesArrow();
  const [arrowRef, setArrowRef] = React.useState(null);
  const { title } = props;

  return (
    <Tooltip
      classes={classes}
      PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              element: arrowRef,
              enabled: Boolean(arrowRef)
            }
          }
        }
      }}
      {...props}
      title={
        <React.Fragment>
          {title}
          <span className={arrow} ref={setArrowRef} />
        </React.Fragment>
      }
    />
  );
}

ArrowTooltip.propTypes = {
  title: PropTypes.node.isRequired
};

export default function OverflowTooltip(props) {
  const {
    title,
    children,
    placement,
    typeClassName,
    variant,
    noWrap,
    style,
    overflowCount
  } = props;
  const [allowTooltip, setAllowTooltip] = useState(false);

  useEffect(() => {
    if (!allowTooltip && title.length + 1 > overflowCount) {
      setAllowTooltip(true);
    }
  }, []);

  if (allowTooltip) {
    return (
      <ArrowTooltip title={title} placement={placement}>
        <Typography
          className={typeClassName}
          variant={variant}
          noWrap={noWrap}
          style={style}
        >
          {children}
        </Typography>
      </ArrowTooltip>
    );
  }
  return (
    <Typography
      className={typeClassName}
      variant={variant}
      noWrap={noWrap}
      style={style}
    >
      {children}
    </Typography>
  );
}

OverflowTooltip.propTypes = {
  children: PropTypes.node,
  noWrap: PropTypes.bool,
  overflowCount: PropTypes.number,
  placement: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  typeClassName: PropTypes.string,
  variant: PropTypes.string
};

OverflowTooltip.defaultProps = {
  children: null,
  noWrap: false,
  overflowCount: 20,
  placement: null,
  style: null,
  title: 'New template',
  typeClassName: null,
  variant: null
};
