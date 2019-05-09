import {
  SET_CURRENT_PROJECT,
  SET_APP_METADATA_PATH
} from '../constants/types';

export function setCurrentProject() {
  return {
    type: SET_CURRENT_PROJECT
  }
}

export function setAppMetadataPath(path) {
  return {
    type: SET_APP_METADATA_PATH,
    payload: path
  }
}