import {
    ADD_ERROR,
    ADD_SUCCESS,
    CLEAR_STATUS
} from '../actionTypes';

export function addErrorAction(error) {
    return {
        type: ADD_ERROR,
        error
    };
}

export function addSuccessAction(success) {
    return {
        type: ADD_SUCCESS,
        success
    };
}

export function clearStatusAction() {
    return {
        type: CLEAR_STATUS
    };
}

export function addError(error) {
    return dispatch => dispatch(addErrorAction(error));
}

export function addSuccess(success) {
    return dispatch => dispatch(addSuccessAction(success));
}

export function clearStatus() {
    return dispatch => dispatch(clearStatusAction());
}