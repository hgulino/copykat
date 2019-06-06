import {
	SET_CURRENT_PROJECT,
	UPDATE_NEW_PROJECT_FORM,
	CREATE_PROJECT_METADATA_REQUESTED,
	TOGGLE_CREATE_PROJECT_FORM
} from '../constants/types';
import shortid from 'shortid';

export function setCurrentProject(id) {
	return {
		type: SET_CURRENT_PROJECT,
		payload: id
	}
}

export function updateNewProjectForm(data) {
	return {
		type: UPDATE_NEW_PROJECT_FORM,
		payload: data
	}
}

export function addNewProject(project) {
	return {
		type: CREATE_PROJECT_METADATA_REQUESTED,
		project: {
			id: shortid.generate(),
			...project
		}
	}
}

export function toggleCreateProjectForm() {
	return {
		type: TOGGLE_CREATE_PROJECT_FORM
	}
}