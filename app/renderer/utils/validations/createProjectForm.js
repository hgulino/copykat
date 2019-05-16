import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'
import fs from 'fs'

export default function validateInput(data) {
	let errors = {}
	console.log(data)

	if (Validator.isEmpty(data.name)) {
		errors.name = 'This field is required'
	}

	if (Validator.isEmpty(data.projectPath)) {
		errors.projectPath = 'This field is required'
	}

	fs.access(data.projectPath, fs.constants.F_OK, (err) => {
		if (err) {
			errors.projectPath = 'This directory already exists'
		}
	});

	return {
		errors,
		isValid: isEmpty(errors)
	}
}