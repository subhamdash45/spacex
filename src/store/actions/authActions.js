import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "../../types/authActionsType";

export const login = (credentials) => async (dispatch, getState) => {
  dispatch({ type: LOGIN_REQUEST });
  const {
    auth: { users },
  } = getState();
  const userExists = users.find(
    (user) => user.username === credentials.username
  );
  if (!userExists) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: { error: "please signup first" },
    });
    return;
  }
  if (userExists && userExists.password !== credentials.password) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: { error: "username and password doesn't match" },
    });
    return;
  }
  try {
    setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: credentials, token: "login_test_token" },
      });
    }, 5000);
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, error });
  }
};

export const signUp = (userData) => async (dispatch, getState) => {
  dispatch({ type: SIGNUP_REQUEST });
  const {
    auth: { users },
  } = getState();
  const userExists = users.find((user) => user.username === userData.username);
  if (userExists) {
    dispatch({
      type: SIGNUP_FAILURE,
      payload: { error: "user already present" },
    });
    return;
  }

  try {
    setTimeout(() => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: { user: userData },
      });
    }, 3000);
  } catch (errorData) {
    dispatch({ type: SIGNUP_FAILURE, payload: { error: errorData } });
  }
};
