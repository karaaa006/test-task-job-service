import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import candidates from "./reducers/candidates";
import filters from "./reducers/filters";

export const reducer = combineReducers({
  candidates,
  filters,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export { store };
