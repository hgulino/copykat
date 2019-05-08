import {
  SET_CURRENT_PROJECT,
  SET_DIRECTORY_PATH,
  GET_DIRECTORY_PROJECTS,
  PROJECTS_LOADING
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

export function getDirectoryProjects(path) {
  return {
    type: GET_DIRECTORY_PROJECTS,
    path: path
  }
}

export function loadingProjects() {
  return {
    type: PROJECTS_LOADING,
  }
}
