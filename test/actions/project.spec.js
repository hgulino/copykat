import * as actions from '../../app/renderer/actions/project'
import * as types from '../../app/renderer/constants/types'

describe('actions', () => {
    test('should create an action to set current project', () => {
        const expectedAction = {
            type: types.SET_CURRENT_PROJECT
        }
        expect(actions.setCurrentProject()).toEqual(expectedAction)
    })
})