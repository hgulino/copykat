import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme =>
  createStyles({
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
    pending: {
      backgroundColor: theme.palette.success.main,
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
        return <Chip label="Active" className={classes.pending} />;
      case 'due':
        return <Chip label="Due soon!" className={classes.due} />;
      case 'completed':
        return <Chip label="Complete" className={classes.completed} />;
      case 'archived':
        return <Chip label="Archived" className={classes.archived} />;
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
        <div>{renderChip(label)}</div>
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
