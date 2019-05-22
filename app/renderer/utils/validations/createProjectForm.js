import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'
import fs from 'fs'

export default async function validateInput(data) {

  function checkDirectory(projectPath, errors) {
    return new Promise(resolve => {
      fs.access(projectPath + '/' + data.name, fs.F_OK, (err) => {

        if (!err) {
          resolve(errors.projectPath = 'Path exists')
        } else {
          resolve()
        }
      })
    });
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
