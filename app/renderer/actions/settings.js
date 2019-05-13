import {
    SET_APP_METADATA_PATH
} from '../constants/types';

export function setAppMetadataPath(path) {
    return {
        type: SET_APP_METADATA_PATH,
        payload: path
    }
}