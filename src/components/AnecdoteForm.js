import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
  // const dispatch = useDispatch();

  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    event.target.content.value = "";
    props.createAnecdote(content);
    props.setNotification(`created new anecdote: '${content}'`, 5);
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

AnecdoteForm.propTypes = {
  setNotification: PropTypes.func.isRequired,
  createAnecdote: PropTypes.func.isRequired,
};

export default connect(null, { createAnecdote, setNotification })(
  AnecdoteForm
);
