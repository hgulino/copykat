import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip'

function arrowGenerator(color) {
	return {
		'&[x-placement*="bottom"] $arrow': {
			top: 0,
			left: 0,
			marginTop: '-0.95em',
			width: '3em',
			height: '1em',
			'&::before': {
				borderWidth: '0 1em 1em 1em',
				borderColor: `transparent transparent ${color} transparent`,
			},
		},
		'&[x-placement*="top"] $arrow': {
			bottom: 0,
			left: 0,
			marginBottom: '-0.95em',
			width: '3em',
			height: '1em',
			'&::before': {
				borderWidth: '1em 1em 0 1em',
				borderColor: `${color} transparent transparent transparent`,
			},
		},
		'&[x-placement*="right"] $arrow': {
			left: 0,
			marginLeft: '-0.95em',
			height: '3em',
			width: '1em',
			'&::before': {
				borderWidth: '1em 1em 1em 0',
				borderColor: `transparent ${color} transparent transparent`,
			},
		},
		'&[x-placement*="left"] $arrow': {
			right: 0,
			marginRight: '-0.95em',
			height: '3em',
			width: '1em',
			'&::before': {
				borderWidth: '1em 0 1em 1em',
				borderColor: `transparent transparent transparent ${color}`,
			},
		},
	};
}

const styles = theme => ({
	arrow: {
		position: 'absolute',
		fontSize: 6,
		width: '3em',
		height: '3em',
		'&::before': {
			content: '""',
			margin: 'auto',
			display: 'block',
			width: 0,
			height: 0,
			borderStyle: 'solid',
		},
	},
	popper: arrowGenerator(theme.palette.common.black),
	tooltip: {
		backgroundColor: theme.palette.common.black
	},
})

class ArrowTooltip extends Component {
	state = {
		arrowRef: null,
	};

	handleArrowRef = node => {
		this.setState({
			arrowRef: node,
		});
	};
	render() {
		const { classes, ...other } = this.props;

		return (
			<Tooltip
				classes={{
					popper: classes.popper,
					tooltip: classes.tooltip
				}}
				PopperProps={{
					popperOptions: {
						modifiers: {
							arrow: {
								enabled: Boolean(this.state.arrowRef),
								element: this.state.arrowRef,
							},
						},
					},
				}}
				placement={this.props.placement}
				enterDelay={500}
				leaveDelay={200}
				{...other}
				title={
					<React.Fragment>
						{this.props.title}
						<span className={classes.arrow} ref={this.handleArrowRef} />
					</React.Fragment>
				}
			/>);
	}
}

export default withStyles(styles)(ArrowTooltip)