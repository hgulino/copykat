import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = theme => ({
	main: {
		flex: 1,
		padding: '48px 36px 0'
	},
	helperText: {
		margin: '8px 12px 0'
	},
	error: {
		borderColor: theme.palette.error.main,
		color: theme.palette.error.main
	}
});

class Field extends Component {
	render() {
		const props = this.props
		const { classes } = this.props
		const theme = this.props

		switch (props.type) {
			case "text":
				return (
					<React.Fragment>
						<TextField
							id={props.id}
							label={props.label}
							className={classes.textField}
							value={props.value}
							onChange={props.onChange}
							margin="normal"
							variant="outlined"
							error={props.error ? true : false}
							helperText={props.error ? props.error : props.helperText}
						/>
					</React.Fragment>
				)
			case "dialog":
				return (
					<React.Fragment>
						<div>{props.value}</div>
						<Button
							id={props.id}
							variant={props.variant}
							size="small"
							className={props.error ? classes.error : classes.button}
							onClick={props.onChange}
						>
							{props.children}
							{props.label}
						</Button>
						<FormHelperText className={classes.helperText} error={props.error ? true : false}>{props.error ? props.error : props.helperText}</FormHelperText>
					</React.Fragment>
				)

			default:
				return (
					<div>
						<label>{props.label}</label>
						<input
							id={props.id}
							type="text"
							onChange={props.onChange}
							value={props.value} />
						{props.error && <span className="help-block">{props.error}</span>}
					</div>
				)
		}

	}
};

export default withStyles(styles)(Field);