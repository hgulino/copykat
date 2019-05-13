import React, { Component } from 'react'
const { dialog } = require('electron').remote

export default class Field extends Component {

	onChange = (e) => {
		this.props.updateForm({ [event.target.id]: e.target.value })
	};

	openPath = (e) => {
		e.preventDefault()
		const path = dialog.showOpenDialog({
			properties: ['openDirectory']
		})
		if (path !== undefined) {
			this.props.updateForm({ path: path[0] })
		}
	};

	render() {
		const props = this.props

		switch (props.type) {
			case "text":
				return (
					<div>
						<label>{props.label}</label>
						<input
							id={props.id}
							type={props.type}
							onChange={this.onChange}
							value={props.value} />
					</div>
				)
			case "dialog":
				return (
					<div>
						<button onClick={this.openPath}>{props.label}</button>
					</div>
				)

			default:
				return (
					<div>
						<label>{props.label}</label>
						<input
							id={props.id}
							type="text"
							onChange={this.onChange}
							value={props.value} />
					</div>
				)
		}

	}
};