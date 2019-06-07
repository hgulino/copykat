import fs from 'fs'
import isEmpty from 'lodash/isEmpty'
import Validator from 'validator'

export default async function validateInput(data) {
  function checkDirectory(projectPath, errors) {
    return new Promise((resolve) => {
      fs.access(projectPath + '/' + data.name, fs.F_OK, (err) => {
        if (!err) {
          resolve((errors.projectPath = 'This directory already exists'))
        } else {
          resolve()
        }
      })
    })
  }

  const errors = {}

  if (Validator.isEmpty(data.name)) {
    errors.name = 'This field is required'
  }

  if (Validator.isEmpty(data.projectPath)) {
    errors.projectPath = 'This field is required'
  }

  await checkDirectory(data.projectPath, errors)

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
