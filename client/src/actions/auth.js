import {
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
    ADD_ERROR,
    ADD_SUCCESS
} from '../actionTypes';

import {
    addErrorAction,
    addSuccessAction,
    addSuccess
} from './status';

function loginAction(user) {
    return {
        type: LOGIN_USER,
        user
    };
}

function logoutAction(user) {
    return {
        type: LOGOUT_USER,
        user
    };
}

function registerAction(user) {
    return {
        type: REGISTER_USER,
        user
    };
}

export function logout() {
    return dispatch => {
        const request = {
            type: 'cors',
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        dispatch(
            addSuccess({
                message: 'Logging out from your account...'
            })
        );
        return fetch('/api/auth/logout/', request)
            .then(response => response.json())
            .then(data => {
                dispatch(logoutAction(data.user));
                dispatch(
                    addSuccess({
                        message: 'You have successfully logged out.'
                    })
                );
            })
            .catch(error => dispatch(addErrorAction(error)));
    };
}

export function login(data) {
    return dispatch => {
        const request = {
            type: 'cors',
            body: JSON.stringify({ ...data
            }),
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        dispatch(
            addSuccess({
                message: 'Logging into your account...'
            })
        );
        fetch('/api/auth/login/', request)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    throw new Error(data.error.message);
                }
                if (data.user) {
                    dispatch(loginAction(data.user));
                    dispatch(
                        addSuccess({
                            message: 'You have successfully logged in.'
                        })
                    );
                }
            })
            .catch(error => dispatch(addErrorAction(error)));
    };
}

export function register(data) {
    return dispatch => {
        const request = {
            type: 'cors',
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        dispatch(
            addSuccess({
                message: 'Registering your account...'
            })
        );
        fetch('/api/auth/register/', request)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                    throw new Error(data.error.message);
                }
                if (data.user) {
                    dispatch(registerAction(data.user));
                    dispatch(
                        addSuccess({
                            message: 'You have successfully registered.'
                        })
                    );
                }
            })
            .catch(error => dispatch(addErrorAction(error)));
    };
}