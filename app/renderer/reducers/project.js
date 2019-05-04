import {
  SET_CURRENT_PROJECT,
  SET_DIRECTORY_PATH
} from '../constants/types';

const initialState = {
  projectId: null,
  directory: null
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
      }
    default: return state
  }
}
