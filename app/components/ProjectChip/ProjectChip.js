import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme =>
  createStyles({
    active: {
      backgroundColor: '#2A97FF',
      color: theme.palette.text.primary
    },
    archived: {
      backgroundColor: '#CBCBCB',
      color: '#383838'
    },
    completed: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.text.primary
    },
    due: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.text.primary
    },
    loading: {
      borderRadius: 80
    },
    preview: {
      background: `repeating-linear-gradient(-45deg, ${
        theme.palette.action.blue.main
      }, ${theme.palette.action.blue.main} 10px, ${
        theme.palette.action.blue.light
      } 10px, ${theme.palette.action.blue.light} 20px)`,
      color: theme.palette.text.primary
    }
  })
);

export default function ProjectChip(props) {
  const { label, loading } = props;
  const classes = useStyles();

  const renderChip = () => {
    switch (label) {
      case 'active':
        return <Chip label="Active" className={classes.active} />;
      case 'due':
        return <Chip label="Due soon!" className={classes.due} />;
      case 'completed':
        return <Chip label="Complete" className={classes.completed} />;
      case 'archived':
        return <Chip label="Archived" className={classes.archived} />;
      case 'preview':
        return <Chip label="Preview" className={classes.preview} />;
      default:
        return <div />;
    }
  };

  return (
    <>
      {loading ? (
        <Skeleton
          variant="rect"
          height={32}
          width={65}
          classes={{ root: classes.loading }}
        />
      ) : (
        <>{renderChip(label)}</>
      )}
    </>
  );
}

ProjectChip.propTypes = {
  label: PropTypes.oneOf(['active', 'due', 'completed', 'archived']),
  loading: PropTypes.bool
};

ProjectChip.defaultProps = {
  label: 'archived',
  loading: true
};
