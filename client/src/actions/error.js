import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

function addErrorAction(data) {
    console.log(data);
    return {
        type: LOGIN_USER,
        data
    };
}

function removeErrorAction(data) {
    console.log(data);
    return {
        type: LOGOUT_USER,
        data
    };
}

export function addError(data) {
    dispatch(addErrorAction(data));
}

export function removeError(data) {
    dispatch(removeErrorAction(data));
}
