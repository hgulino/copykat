import {
	SET_CURRENT_PROJECT,
	UPDATE_NEW_PROJECT_FORM,
	CREATE_PROJECT_METADATA_REQUESTED

} from '../constants/types';
import shortid from 'shortid';

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

export function addNewProject(project) {
	return {
		type: CREATE_PROJECT_METADATA_REQUESTED,
		project: {
			id: shortid.generate(),
			...project
		}
	}
}