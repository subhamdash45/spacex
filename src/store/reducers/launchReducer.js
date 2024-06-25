import {
  FETCH_LAUNCHES_REQUEST,
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_FAILURE,
} from "../../types/launchActionsType";

const initialState = {
  launches: [],
  loading: false,
  error: "",
};

export const launchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LAUNCHES_REQUEST:
      return { ...state, loading: true, error: "" };
    case FETCH_LAUNCHES_SUCCESS:
      return { ...state, loading: false, launches: action.payload };
    case FETCH_LAUNCHES_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
