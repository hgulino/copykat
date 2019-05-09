import * as actions from '../../app/renderer/actions/project'
import * as types from '../../app/renderer/constants/types'

describe('actions', () => {
    test('should create an action to set current project', () => {
        const expectedAction = {
            type: types.SET_CURRENT_PROJECT
        }
        expect(actions.setCurrentProject()).toEqual(expectedAction)
    })

    test('should create an action to set app metadata path', () => {
        const path = 'C:/test'
        const expectedAction = {
            type: types.SET_APP_METADATA_PATH,
            payload: path
        }
        expect(actions.setAppMetadataPath(path)).toEqual(expectedAction)
    })
})