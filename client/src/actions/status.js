import { ADD_ERROR, ADD_SUCCESS, CLEAR_STATUS } from '../actionTypes';

export function addError(error) {
    return {
        type: ADD_ERROR,
        error
    };
}

export function addSuccess(success) {
    return {
        type: ADD_SUCCESS,
        success
    };
}

export function clearStatus() {
    return {
        type: CLEAR_STATUS
    };
}


