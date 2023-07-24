// authReducer.js

// Define initial state
const initialState = {
  token: null,
  isAuthenticated: false,
  user: null,
};

// Define the authReducer function
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
