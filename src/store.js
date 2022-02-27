// import { createStore } from "redux";
import anecdoteReducer from "./reducers/anecdoteReducer";
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterReducer";
import notificationReducer from "./reducers/notificationReducer";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer,
  },
});

console.log(store.getState());

export default store;
