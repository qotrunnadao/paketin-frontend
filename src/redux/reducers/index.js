import { combineReducers } from "redux";
import users from "./users";
import paket from "./paket";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
	users,
	paket,
	form: formReducer,
});
