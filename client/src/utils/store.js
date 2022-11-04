import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// use rootReducer as the reducer for the store which includes all actions
// create store for global state status
const store = configureStore({
  reducer: rootReducer,
});

export default store;