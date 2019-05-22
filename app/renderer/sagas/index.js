import { put, takeLatest, all } from 'redux-saga/effects'
import {
  SET_APP_METADATA_PATH,
  LOAD_APP_METADATA_REQUESTED,
  LOAD_APP_METADATA_SUCCEEDED,
  LOAD_APP_METADATA_FAILED,
  CREATE_PROJECT_METADATA_REQUESTED,
  CREATE_PROJECT_METADATA_SUCCEEDED,
  CREATE_PROJECT_METADATA_FAILED,
} from '../constants/types'
const fs = window.require('fs')

function* loadAppProjects(action) {
  const path = action.payload + '/metadata.json'
  // console.log("The file " + path + " exists: " + fs.existsSync(path))
  if (path) {
    if (fs.existsSync(path)) {
      yield put({
        type: LOAD_APP_METADATA_REQUESTED,
      })
      const json = yield fs.readFile(path, function(err, data) {
        if (err) {
          console.log(err)
        }
        return data
      })
      yield put({
        type: LOAD_APP_METADATA_SUCCEEDED,
        payload: json,
      })
    }
  } else {
    yield put({
      type: LOAD_APP_METADATA_FAILED,
      payload: 'No path passed to generator function',
    })
  }
}

function* createNewProject(action) {
  console.log(action)
  const path = action.project.projectPath
  if (!fs.existsSync(path)) {
    yield fs.mkdirSync(path)
    yield put({
      type: CREATE_PROJECT_METADATA_SUCCEEDED,
    })
  }
}

// function* createDefaultProjectList(action) {
//     const path = action.path
//     console.log(path)
//     console.log(fs.existsSync(path))
//     console.log("Creating new json file...")
//     if (path) {
//         // Create new json file for project list
//         const json = {
//             "projects": [
//                 {
//                     "name": "Tanya's Project",
//                     "status": "Open"
//                 }
//             ]
//         }

//         const formattedJson = JSON.stringify(json)
//         put({ type: LOAD_APP_METADATA_REQUESTED });

//         yield fs.writeFile(path, formattedJson, function (err, data) {
//             if (err) put({
//                 type: LOAD_APP_METADATA_FAILED,
//                 err
//             });
//             console.log(json)
//             put({
//                 type: LOAD_APP_METADATA_SUCCEEDED,
//                 json
//             });
//         });

//     } else {
//         console.log('No path passed to generator function')
//     }

// }

function* actionWatcher() {
  yield takeLatest(SET_APP_METADATA_PATH, loadAppProjects)
}

function* createNewProjectWatcher() {
  yield takeLatest(CREATE_PROJECT_METADATA_REQUESTED, createNewProject)
}

export default function* rootSaga() {
  yield all([actionWatcher(), createNewProjectWatcher()])
}
