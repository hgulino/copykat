import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_DIRECTORY_PROJECTS, RECEIVE_DIRECTORY_PROJECTS, JSON_DOES_NOT_EXIST, UPDATE_DIRECTORY_PROJECTS, PROJECTS_LOADING } from '../constants/types'
const fs = window.require('fs');

function* fetchProjects(action) {
    const path = action.path + "/metadata.json"
    console.log("The file " + path + " exists: " + fs.existsSync(path))
    if (path) {
        if (fs.existsSync(path)) {
            yield put({ type: PROJECTS_LOADING, });
            const json = yield fs.readFile(path, function (err, data) {
                if (err) { console.log(err) }
                return data
            })
            yield put({ type: RECEIVE_DIRECTORY_PROJECTS, payload: json, });
        } else {
            yield put({ type: JSON_DOES_NOT_EXIST, path: path });
        }
    } else {
        console.log('No path passed to generator function')
    }

}

function* createDefaultProjectList(action) {
    const path = action.path
    console.log(path)
    console.log(fs.existsSync(path))
    console.log("Creating new json file...")
    if (path) {
        // Create new json file for project list
        const json = {
            "projects": [
                {
                    "name": "Tanya's Project",
                    "status": "Open"
                }
            ]
        }

        const formattedJson = JSON.stringify(json)

        yield fs.writeFile(path, formattedJson, function (err, data) {
            if (err) console.log(err)
            console.log(json)
            put({ type: UPDATE_DIRECTORY_PROJECTS, json });
        });

    } else {
        console.log('No path passed to generator function')
    }

}

function* actionWatcher() {
    yield takeLatest(GET_DIRECTORY_PROJECTS, fetchProjects)
}

function* createDefaultProjectListWatcher() {
    yield takeLatest(JSON_DOES_NOT_EXIST, createDefaultProjectList)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
        createDefaultProjectListWatcher()
    ]);
}