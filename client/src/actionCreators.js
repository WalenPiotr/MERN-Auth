import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from './actionTypes';

function loginAction(data) {
    console.log(data);
    return {
        type: LOGIN_USER,
        data
    };
}

function logoutAction(data) {
    console.log(data);
    return {
        type: LOGOUT_USER,
        data
    };
}

function registerAction(data) {
    console.log(data);
    return {
        type: REGISTER_USER,
        data
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
        return fetch('/api/auth/logout/', request)
            .then(response => response.json())
            .then(data => dispatch(logoutAction(data)))
            .catch(error => console.log(error));
    };
}

export function login(data) {
    return dispatch => {
        const request = {
            type: 'cors',
            body: JSON.stringify({ ...data }),
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };

        fetch('/api/auth/login/', request)
            .then(response => response.json())
            .then(data => dispatch(loginAction(data)))
            .catch(error => console.log(error));
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

        fetch('/api/auth/register/', request)
            .then(response => response.json())
            .then(data => dispatch(loginAction(data)))
            .catch(error => console.log(error));
    };
}
