import { IS_LOGGED } from "./actionCreators";

const initialState = {
    authenticated: false
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOGGED:
      return { ...state, authenticated: action.authenticated };
    default:
      return state;
  }
}
