import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { upvoteAnecdote } from "../reducers/anecdoteReducer";
import { createNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const handleVote = ({ id, votes }) => {
    dispatch(upvoteAnecdote(id, votes));
    dispatch(
      createNotification(
        `you voted for '${
          anecdotes.find((anecdote) => anecdote.id === id).content
        }'`
      )
    );

    setTimeout(
      () => dispatch({ type: "notification/removeNotification" }),
      5000
    );
  };

  const sortedAndFilteredAnecdotes = [...anecdotes]
    .sort((a, b) => b.votes - a.votes)
    .filter((anecdote) => anecdote.content.includes(filter));

  return (
    <>
      {sortedAndFilteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
