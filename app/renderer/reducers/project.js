import {
  SET_CURRENT_PROJECT,
  SET_DIRECTORY_PATH,
  RECEIVE_DIRECTORY_PROJECTS,
  UPDATE_DIRECTORY_PROJECTS,
  PROJECTS_LOADING
} from '../constants/types';

const initialState = {
  projectId: null,
  directory: null,
  projects: {},
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PROJECT:
      return {
        ...state,
        projectId: action.payload
      };
    case SET_DIRECTORY_PATH:
      return {
        ...state,
        directory: action.payload
      };
    case RECEIVE_DIRECTORY_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }
    case UPDATE_DIRECTORY_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false
      }
    case PROJECTS_LOADING:
      return {
        ...state,
        loading: true
      }
    default: return state
  }
}
