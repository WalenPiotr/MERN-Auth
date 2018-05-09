export const IS_LOGGED = 'GET_USER_STATUS'

function handleRegister() {
    return {
        type: IS_LOGGED,
    }
}

export function register() {
    return dispatch => {
        return fetch('http://localhost:3001/api/auth/')
            .then(res => res.json())
            .then(user => dispatch(handleRegister(user.authenticated)))
            .catch(err => dispatch(err));
    };
}

