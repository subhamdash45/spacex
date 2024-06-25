import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  INVALID_ERROR,
  LOG_OUT,
} from "../../types/authActionsType";

const initialState = {
  users: [],
  user: {},
  token: "",
  loading: false,
  authenticated: false,
  registered: false,
  error: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        authenticated: false,
        registered: false,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        authenticated: false,
        registered: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
        authenticated: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        users: [...state.users, action.payload.user],
        registered: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        authenticated: false,
        registered: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        authenticated: false,
        registered: false,
      };
    case LOG_OUT: {
      return {
        ...state,
        loading: false,
        error: "",
        authenticated: false,
        registered: false,
        user: {},
        token: "",
      };
    }
    case INVALID_ERROR: {
      return {
        ...state,
        loading: false,
        error: "",
        authenticated: false,
        registered: false,
      };
    }
    default:
      return state;
  }
};
