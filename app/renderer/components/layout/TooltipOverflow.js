import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ArrowTooltip from './misc/ArrowTooltip'


function isTextOverflow(element) {
	return element.clientWidth < element.scrollWidth
}

class OverflowTooltip extends Component {
	constructor(props) {
		super(props)

		this.state = {
			overflow: false
		}
	}

	componentDidMount() {
		this.checkOverflow()
	}

	componentWillReceiveProps() {
		this.setState({ overflow: false })
	}

	componentDidUpdate() {
		this.checkOverflow()
	}

	checkOverflow() {
		const element = ReactDOM.findDOMNode(this)

		const overflow = isTextOverflow(element)
		if (overflow !== this.state.overflow) {
			this.setState({ overflow: overflow })
		}
	}

	render() {
		if (this.state.overflow) {
			return (
				<ArrowTooltip title={this.props.title} placement={this.props.placement}>
					{this.props.children}
				</ArrowTooltip>
			)
		} else {
			return (
				this.props.children
			)
		}
	}
}

export default OverflowTooltip