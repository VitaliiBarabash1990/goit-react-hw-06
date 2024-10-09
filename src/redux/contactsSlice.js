import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
};

const slice = createSlice({
	name: "contact",
	initialState,
	reducers: {
		deleteContact: (state, action) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		addContact: (state, action) => {
			state.items.push(action.payload);
		},
	},
});

export const contactsReducer = slice.reducer;

export const { addContact, deleteContact } = slice.actions;

export const selectContacts = (state) => state.contacts.items;
