import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
    voteAnecdote(state, action) {
      const anecdote = state.find(
        (anecdote) => anecdote.id === action.payload
      );
      anecdote.votes++;
    },
  },
});

export const { createAnecdote, setAnecdotes, voteAnecdote } =
  anecdoteSlice.actions;

export default anecdoteSlice.reducer;
