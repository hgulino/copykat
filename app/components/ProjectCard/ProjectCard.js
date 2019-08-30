import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  ButtonBase,
  Typography,
  IconButton,
  Divider,
  Avatar,
  Menu,
  MenuItem
} from '@material-ui/core';
import Confetti from 'react-confetti';
import { MoreVert as MoreVertIcon } from '@material-ui/icons';
import Skeleton from '@material-ui/lab/Skeleton';
import OverflowTooltip from '../OverflowTooltip';
import ProjectChip from '../ProjectChip';

const useStyles = makeStyles(
  createStyles({
    avatar: {
      color: 'var(--background-start)',
      fontSize: '24px',
      fontWeight: 500,
      height: '50px',
      width: '50px'
    },

    container: {
      padding: '20px'
    },
    containerInfo: {
      padding: '0px 20px 20px 20px'
    },
    divider: {
      backgroundColor: '#CBCBCB',
      position: 'relative',
      top: '58px'
    },
    moreVertIcon: {
      '&:hover': {
        color: '#FFF',
        cursor: 'pointer'
      },
      color: '#CBCBCB',
      left: '90%',
      position: 'absolute',
      top: '15%',
      transform: 'translate(-50%, -50%)',
      zIndex: '2'
    },
    paper: {
      maxWidth: 300,
      overflow: 'hidden',
      position: 'relative'
      // minHeight: 204,
    },
    typography: {
      width: '250px'
    }
  })
);

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? children : wrapper(children);

export default function ProjectCard(props) {
  const {
    projectName,
    onClick,
    colors,
    avatar,
    client,
    projectPath,
    loading,
    preview,
    status
  } = props;
  const classes = useStyles();
  const [hovering, handleMouseHover] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Grid item>
      <Paper className={classes.paper}>
        <ConditionalWrapper
          condition={preview === true || loading === true}
          wrapper={children => (
            <ButtonBase
              focusRipple
              style={{
                cursor: 'auto',
                display: 'inherit',
                height: '100%',
                textAlign: 'inherit'
              }}
              onClick={onClick}
            >
              {children}
            </ButtonBase>
          )}
        >
          <ConditionalWrapper
            condition={status !== 'completed'}
            wrapper={children => (
              <div
                onMouseEnter={() => handleMouseHover(true)}
                onMouseLeave={() => handleMouseHover(false)}
              >
                {hovering && <Confetti numberOfPieces={80} />}
                {children}
              </div>
            )}
          >
            {loading ? <div /> : <Divider className={classes.divider} />}

            <Grid
              container
              className={classes.container}
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid item>
                {loading ? (
                  <Skeleton variant="circle" width={50} height={50} />
                ) : (
                  <Avatar
                    className={classes.avatar}
                    style={{
                      '--background-start': colors.secondary,
                      backgroundColor: colors.primary,
                      boxShadow: `0 0 0 2px ${colors.secondary}`
                    }}
                  >
                    {avatar}
                  </Avatar>
                )}
              </Grid>
            </Grid>

            <Grid
              container
              className={classes.containerInfo}
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid item>
                {loading ? (
                  <Skeleton
                    variant="rect"
                    height={14}
                    width={65}
                    style={{ marginBottom: 12, marginTop: 8 }}
                  />
                ) : (
                  <Typography variant="subtitle1">{client}</Typography>
                )}

                {loading ? (
                  <Skeleton
                    variant="rect"
                    height={20}
                    width={130}
                    style={{ marginBottom: 8 }}
                  />
                ) : (
                  <OverflowTooltip
                    variant="h6"
                    noWrap
                    style={{
                      width: '175px'
                    }}
                    title={projectName}
                    placement="bottom"
                  >
                    {projectName}
                  </OverflowTooltip>
                )}
              </Grid>
              <Grid item>
                <ProjectChip
                  label={preview ? 'preview' : status}
                  loading={loading}
                />
              </Grid>
              <Grid item xs={12}>
                {loading ? (
                  <Skeleton variant="rect" height={12} width={130} />
                ) : (
                  <OverflowTooltip
                    title={projectPath}
                    variant="body2"
                    noWrap
                    placement="bottom-start"
                    typeClassName={classes.typography}
                  >
                    {projectPath}
                  </OverflowTooltip>
                )}
              </Grid>
            </Grid>
          </ConditionalWrapper>
        </ConditionalWrapper>

        {loading ? (
          <div />
        ) : (
          <div>
            <IconButton
              className={classes.moreVertIcon}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                horizontal: 'left',
                vertical: 'top'
              }}
              transformOrigin={{
                horizontal: 'center',
                vertical: 'center'
              }}
            >
              <MenuItem onClick={handleClose}>Copy as Template</MenuItem>
              {status === 'archived' ? (
                <MenuItem onClick={handleClose}>Unarchive</MenuItem>
              ) : (
                <MenuItem onClick={handleClose}>Archive</MenuItem>
              )}
              <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
          </div>
        )}
      </Paper>
    </Grid>
  );
}

ProjectCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  client: PropTypes.string,
  colors: PropTypes.object,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  preview: PropTypes.bool,
  projectName: PropTypes.string.isRequired,
  projectPath: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['active', 'due', 'completed', 'archived'])
};

ProjectCard.defaultProps = {
  client: null,
  colors: {
    primary: '#ce93d8',
    secondary: '#8e24aa'
  },
  loading: false,
  onClick: () => {},
  preview: false,
  status: 'archived'
};
