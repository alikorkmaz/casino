import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import gameReducer from "./gameReducer";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  games: gameReducer,
  categories: categoryReducer
});
