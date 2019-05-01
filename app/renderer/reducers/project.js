import {
  PROJECT_OPENED,
  PROJECT_CLOSED
} from '../constants/actionTypes';

const initialState = {
  inProject: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_OPENED:
      return {
        ...state,
        inProject: true
      };
    case PROJECT_CLOSED:
      return {
        ...state,
        inProject: false
      }
    default: return state
  }
}
