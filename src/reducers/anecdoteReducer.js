import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
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

export const { appendAnecdote, setAnecdotes, voteAnecdote } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createAnecdote(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const upvoteAnecdote = (id, votes) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.voteAnecdote(id, votes);
    dispatch(voteAnecdote(updatedAnecdote.id));
  };
};

export default anecdoteSlice.reducer;
