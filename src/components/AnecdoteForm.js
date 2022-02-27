import React from "react";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    dispatch(createAnecdote(content));
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
