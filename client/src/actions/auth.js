import { LOGIN_USER, LOGOUT_USER } from '../actionTypes';

export function login(user) {
    return {
        type: LOGIN_USER,
        user
    };
}

export function logout(user) {
    return {
        type: LOGOUT_USER,
        user
    };
}
