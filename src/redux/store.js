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
	key: "contacts",
	version: 1,
	storage,
};

export const store = configureStore({
	reducer: {
		contacts: persistReducer(persistConfigContact, contactsReducer),
		filters: searchFilterReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export let persistor = persistStore(store);
