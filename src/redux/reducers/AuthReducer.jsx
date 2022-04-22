import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
	user: {},
	token: "",
	role: "",
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialAuthState,
	reducers: {
		login(state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.role = action.payload.role;
		},
		logout(state) {
			state.user = "";
			state.token = "";
			state.role = "";
		},
		updateProfile(state, action) {
			state.user = action.payload;
		},
	},
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
