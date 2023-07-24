import { combineReducers } from "redux";
// Import your individual reducer files here
import authReducer from "./authReducer";
// import other reducer files if necessary

// Combine all your reducers into a single root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducer keys here if necessary
});

export default rootReducer;
