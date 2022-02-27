// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/anecdoteReducer";

const store = configureStore({
  reducer: {
    anecdotes: reducer,
  },
});

console.log(store.getState());

export default store;
