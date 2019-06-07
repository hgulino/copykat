import shortid from 'shortid'

import {
  CREATE_PROJECT_METADATA_REQUESTED,
  SET_CURRENT_PROJECT,
  TOGGLE_CREATE_PROJECT_FORM,
} from '../constants/types'

export function setCurrentProject(id) {
  return {
    type: SET_CURRENT_PROJECT,
    payload: id,
  }
}

export function addNewProject(project) {
  return {
    type: CREATE_PROJECT_METADATA_REQUESTED,
    project: {
      id: shortid.generate(),
      ...project,
    },
  }
}

export function toggleCreateProjectForm() {
  return {
    type: TOGGLE_CREATE_PROJECT_FORM,
  }
}
