import {
  PROJECT_OPENED,
  PROJECT_CLOSED
} from '../constants/actionTypes';

export function projectOpened() {
  return {
      type: PROJECT_OPENED
  }
}

export function projectClosed() {
  return {
      type: PROJECT_CLOSED
  }
}
