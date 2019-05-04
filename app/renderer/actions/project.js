import {
  SET_CURRENT_PROJECT,
  SET_DIRECTORY_PATH,
  GET_DIRECTORY_PROJECTS
} from '../constants/types';

export function setCurrentProject() {
  return {
      type: SET_CURRENT_PROJECT
  }
}

export function setDirectoryPath(path) {
  return {
      type: SET_DIRECTORY_PATH,
      payload: path
  }
}

export function scanDirectoryProjects() {
  return {
    type: GET_DIRECTORY_PROJECTS
  }
}
