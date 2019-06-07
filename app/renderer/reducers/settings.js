import { SET_APP_METADATA_PATH } from '../constants/types'

const initialState = {
  metadataPath: '',
  darkTheme: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_METADATA_PATH:
      return {
        ...state,
        metadataPath: action.payload,
      }
    default:
      return state
  }
}
