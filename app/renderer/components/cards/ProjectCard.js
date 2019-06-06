import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import TooltipOverflow from '../layout/TooltipOverflow'

const styles = theme => ({
	paper: {
		position: 'relative',
		maxWidth: 300,
		overflow: 'hidden',
		// minHeight: 204,
	},
	container: {
		padding: '20px'
	},
	avatar: {
		height: '50px',
		width: '50px',
		fontSize: '24px',
		fontWeight: 500,
		color: 'var(--background-start)'
	},
	moreVertIcon: {
		color: '#CBCBCB',
		position: 'absolute',
		top: '15%',
		left: '90%',
		zIndex: '2',
		transform: 'translate(-50%, -50%)',
		'&:hover': {
			color: '#FFF',
			cursor: 'pointer'
		}
	},
	divider: {
		backgroundColor: '#CBCBCB',
		position: 'relative',
		top: '58px'
	},
	containerInfo: {
		padding: '0px 20px 20px 20px'
	},
	chipWarning: {
		backgroundColor: theme.palette.error.main,
		color: theme.palette.text.primary
	},
	typography: {
		width: "250px"
	}
});

class ProjectCard extends Component {

	render() {
		const { classes } = this.props;
		return (
			<Grid item>
				<Paper className={classes.paper} id={this.props.key}>
					<ButtonBase
						focusRipple
						style={{
							display: 'inherit',
							cursor: 'auto',
							textAlign: 'inherit',
							height: '100%'
						}}
						onClick={this.props.onClick}
					>
						<Divider className={classes.divider} />
						<Grid
							container
							className={classes.container}
							justify="space-between"
							alignItems="flex-start"
						>
							<Grid item>
								<Avatar className={classes.avatar} style={{
									'--background-start': '#974BC2',
									backgroundColor: '#EBC8FF',
									boxShadow: '0 0 0 2px #974BC2'
								}}>
									CK
								</Avatar>
							</Grid>
						</Grid>

						<Grid
							container
							className={classes.containerInfo}
							justify="space-between"
							alignItems="flex-start"
						>
							<Grid item>
								<Typography variant="subtitle1">Client Name</Typography>

								<TooltipOverflow
									title={this.props.name}
									placement="bottom"
								>
									<Typography
										variant="h6"
										noWrap
										style={{
											width: '175px'
										}}
									>
										{this.props.name}
									</Typography>
								</TooltipOverflow>
							</Grid>
							<Grid item>
								<Chip label="Due soon!" className={classes.chipWarning} />
							</Grid>
							<Grid item xs={12}>
								<TooltipOverflow title={this.props.projectPath} placement="bottom-start">
									<Typography variant="body1" noWrap className={classes.typography}>
										{this.props.projectPath}
									</Typography>
								</TooltipOverflow>
							</Grid>
						</Grid>
					</ButtonBase>
					<IconButton className={classes.moreVertIcon}>
						<MoreVertIcon />
					</IconButton>
				</Paper>
			</Grid>
		);
	}
}

ProjectCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectCard);
