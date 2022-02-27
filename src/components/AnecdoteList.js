import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { vote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);

  const dispatch = useDispatch();

  const handleVote = (id) => {
    dispatch(vote(id));
    dispatch({
      type: "notification/createNotification",
      payload: `you voted for '${
        anecdotes.find((anecdote) => anecdote.id === id).content
      }'`,
    });
    setTimeout(
      () => dispatch({ type: "notification/removeNotification" }),
      5000
    );
  };

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  return (
    <>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
