import { LOGIN_USER, LOGOUT_USER} from '../actionTypes';

const initialState = {
    authenticated: false,
    user: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { authenticated: true, user: action.user };
        case LOGOUT_USER:
            return { authenticated: false, user: {} };
        default:
            return state;
    }
};
