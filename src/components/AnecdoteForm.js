import React from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    const newAnecdote = await anecdoteService.createAnecdote(content);
    dispatch(createAnecdote(newAnecdote));
    dispatch({
      type: "notification/createNotification",
      payload: `created new anecdote: '${content}'`,
    });
    setTimeout(
      () => dispatch({ type: "notification/removeNotification" }),
      5000
    );
  };

  return (
    <form onSubmit={addNote}>
      <div>
        <input name="content" />
      </div>
      <button>create</button>
    </form>
  );
};
export default AnecdoteForm;
