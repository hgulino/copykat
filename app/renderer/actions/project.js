import {
	SET_CURRENT_PROJECT,
	UPDATE_NEW_PROJECT_FORM,
	CREATE_PROJECT_METADATA_REQUESTED

} from '../constants/types';

export function setCurrentProject() {
	return {
		type: SET_CURRENT_PROJECT
	}
}

export function updateNewProjectForm(data) {
	return {
		type: UPDATE_NEW_PROJECT_FORM,
		payload: data
	}
}

export function addNewProject(data) {
	return {
		type: CREATE_PROJECT_METADATA_REQUESTED,
		payload: data
	}
}