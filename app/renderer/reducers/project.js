import {
  CREATE_PROJECT_METADATA_FAILED,
  CREATE_PROJECT_METADATA_REQUESTED,
  CREATE_PROJECT_METADATA_SUCCEEDED,
  LOAD_CURRENT_PROJECT_FAILED,
  LOAD_CURRENT_PROJECT_REQUESTED,
  LOAD_CURRENT_PROJECT_SUCCEEDED,
  LOAD_PROJECT_METADATA_FAILED,
  LOAD_PROJECT_METADATA_REQUESTED,
  LOAD_PROJECT_METADATA_SUCCEEDED,
  SET_CURRENT_PROJECT,
  TOGGLE_CREATE_PROJECT_FORM,
} from '../constants/types'

const initialState = {
  currentProject: {
    id: null,
    loading: true,
  },
  createProjectForm: {
    visible: false,
    loading: false,
  },
  list: {},
  loading: false,
  error: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    /**  Load all projects found within the default json settings. */
    case LOAD_PROJECT_METADATA_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    /** Success! The app state now has a list of projects and
		their directories. */
    case LOAD_PROJECT_METADATA_SUCCEEDED:
      return {
        ...state,
        list: action.payload,
        loading: false,
      }
    /** Oh no! An error occured and the message is sent to the state. */
    case LOAD_PROJECT_METADATA_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    /** The user has submitted a new project form. Project name and path
		are validated before being added to the json settings. */
    case CREATE_PROJECT_METADATA_REQUESTED:
      return {
        ...state,
        list: {
          ...state.list,
          [action.project.id]: {
            id: action.project.id,
            name: action.project.name,
            avatar: action.project.avatar,
            colors: {
              primary: action.project.color.primary,
              secondary: action.project.color.secondary
            },
            projectPath: action.project.projectPath,
          },
        },
      }
    /** Success! The app state now includes the newly created project */
    case CREATE_PROJECT_METADATA_SUCCEEDED:
      return {
        ...state,
      }
    /** Oops! The user might have supplied a duplicate name for
		a project directory that already exists. */
    case CREATE_PROJECT_METADATA_FAILED:
      return {
        ...state,
      }
    /** User has selected a project to load or has reopened the app with
		this project being the last one selected. */
    case LOAD_CURRENT_PROJECT_REQUESTED:
      return {
        ...state,
        currentProject: {
          id: action.payload,
          loading: true,
          error: '',
        },
      }
    /** Success! The app has found the corresponding json file in the project
		directory. These settings have now been loaded to the app state, regardless
		of whether the files in the directory actually exist or not. */
    case LOAD_CURRENT_PROJECT_SUCCEEDED:
      return {
        ...state,
        currentProject: {
          id: action.payload,
          loading: false,
        },
      }
    /** Darn! The user might have deleted the json file of the project settings.
		An error message is sent to the app state to hopefully add some context to
		the problem. */
    case LOAD_CURRENT_PROJECT_FAILED:
      return {
        ...state,
        currentProject: {
          loading: false,
          error: action.payload,
        },
      }
    case TOGGLE_CREATE_PROJECT_FORM:
      return {
        ...state,
        createProjectForm: {
          visible: !state.createProjectForm.visible,
          loading: false,
        },
      }
    case SET_CURRENT_PROJECT:
      return {
        ...state,
        currentProject: {
          id: action.payload,
        },
      }
    default:
      return state
  }
}
