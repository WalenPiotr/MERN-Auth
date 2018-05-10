import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

const initialState = {
    error: {}
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ERROR:
            if (action.data.error) {
                return { authenticated: true, error: action.data.error };
            } else {
                return { ...state };
            }
        case REMOVE_ERROR:
            return { authenticated: false, error: {} };
        default:
            return state;
    }
}
