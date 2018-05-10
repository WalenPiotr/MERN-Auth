import { ADD_ERROR, ADD_SUCCESS, CLEAR_STATUS } from '../actionTypes';

const initialState = {
    error: {},
    success: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return { error: action.error };
        case ADD_SUCCESS:
            return { success: action.success };
        case CLEAR_STATUS:
            return { error: {}, success: {} };
        default:
            return state;
    }
};
