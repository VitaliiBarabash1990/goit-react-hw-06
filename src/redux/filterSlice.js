import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	filters: {
		name: "",
	},
};

const slice = createSlice({
	name: "searchFilter",
	initialState,
	reducers: {
		changeFilter: (state, action) => {
			state.filters.name = action.payload;
		},
	},
});

export const searchFilterReducer = slice.reducer;

export const { changeFilter } = slice.actions;
export const selectNameFilter = (state) => state.searchFilter.filters.name;
