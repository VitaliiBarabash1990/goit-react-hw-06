import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { searchFilterReducer } from "./filtersSlice";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigContact = {
	key: "root",
	version: 1,
	storage,
};

const persistConfigFilters = {
	key: "filters",
	version: 1,
	storage,
	blacklist: ["name"],
};

export const store = configureStore({
	reducer: {
		contacts: persistReducer(persistConfigContact, contactsReducer),
		filters: persistReducer(persistConfigFilters, searchFilterReducer),
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export let persistor = persistStore(store);
