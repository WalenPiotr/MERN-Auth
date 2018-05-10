import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from '../actionTypes';

const initialState = {
    authenticated: false,
    user: {}
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            if (action.data.user) {
                return { authenticated: true, user: action.data.user };
            } else {
                return { ...state };
            }
        case LOGOUT_USER:
            return { authenticated: false, user: {} };
        case REGISTER_USER:
            if (action.data.user) {
                return { authenticated: true, user: action.data.user };
            } else {
                return { ...state };
            }
        default:
            return state;
    }
}
