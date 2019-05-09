import {
    SET_APP_METADATA_PATH,
    LOAD_APP_METADATA_REQUESTED,
    LOAD_APP_METADATA_SUCCEEDED,
    LOAD_APP_METADATA_FAILED,
    CREATE_APP_METADATA_REQUESTED,
    CREATE_APP_METADATA_SUCCEEDED,
    CREATE_APP_METADATA_FAILED
} from '../constants/types';

export function setAppMetadataPath(path) {
    return {
        type: SET_APP_METADATA_PATH,
        payload: path
    }
}