import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_DIRECTORY_PROJECTS, RECIEVE_DIRECTORY_PROJECTS } from '../constants/types'
const fs = window.require('fs');

function* fetchProjects(projectPath) {
    const json = yield fs.readFile(projectPath, function (err, data) {
        if (err) { console.log(err) }
        return data
    })
    yield put({ type: RECIEVE_DIRECTORY_PROJECTS, payload: json, });
}

function* actionWatcher() {
    yield takeLatest(GET_DIRECTORY_PROJECTS, fetchProjects)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}