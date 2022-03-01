import React from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    event.target.content.value = "";
    dispatch(createAnecdote(content));
    dispatch(setNotification(`created new anecdote: '${content}'`, 5));
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
