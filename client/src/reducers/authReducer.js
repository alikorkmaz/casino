import { SIGN_IN, SIGN_OUT, LOGIN_FAILED } from "../actions/types";

const INTIAL_STATE = {
  isSignedIn: false,
  isLoginFailed: false,
  user: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload,
        isLoginFailed: false
      };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, user: null, isLoginFailed: false };
    case LOGIN_FAILED:
      return { ...state, isSignedIn: false, user: null, isLoginFailed: true };
    default:
      return state;
  }
};
