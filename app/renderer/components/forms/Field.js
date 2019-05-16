import React, { Component } from 'react'

export default class Field extends Component {
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
							onChange={props.onChange}
							value={props.value} />
						{props.error && <span className="help-block">{props.error}</span>}
					</div>
				)
			case "dialog":
				return (
					<div>
						<div>{props.value}</div>
						<button id={props.id} type="button" onClick={props.onChange}>{props.label}</button>
						{props.error && <span className="help-block">{props.error}</span>}
					</div>
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