import axios from "axios";
import {
  FETCH_LAUNCHES_FAILURE,
  FETCH_LAUNCHES_REQUEST,
  FETCH_LAUNCHES_SUCCESS,
} from "../../types/launchActionsType";

export const fetchLaunches = () => async (dispatch) => {
  dispatch({ type: FETCH_LAUNCHES_REQUEST });
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/launches");
    dispatch({ type: FETCH_LAUNCHES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_LAUNCHES_FAILURE, error });
  }
};
