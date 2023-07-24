import axios from "axios";
import BASEAPIURL from "../vars";

// Action Types
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

// Action Creators
export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST,
});

export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

// Async Action Creator
export const loginUser = (credentials) => {
  return (dispatch) => {
    dispatch(loginUserRequest());

    axios
      .post(`${BASEAPIURL}/login`, credentials) // Adjust the API endpoint if needed
      .then((response) => {
        const { user, token } = response.data;
        // Save the token in localStorage or secure storage if desired
        localStorage.setItem("token", token);
        dispatch(loginUserSuccess(user));
      })
      .catch((error) => {
        dispatch(loginUserFailure(error.message));
      });
  };
};
