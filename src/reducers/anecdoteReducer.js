const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE": {
      const oldAnecdote = state.find(
        (anecdote) => anecdote.id === action.data.id
      );
      const newAnecdote = { ...oldAnecdote, votes: oldAnecdote.votes + 1 };
      return state.map((anecdote) =>
        anecdote.id === action.data.id ? newAnecdote : anecdote
      );
    }
    case "CREATE": {
      return [...state, action.data];
    }
    case "SET": {
      return action.data;
    }
    default:
      return state;
  }
};

export const vote = (id) => {
  return {
    type: "VOTE",
    data: {
      id,
    },
  };
};

export const createAnecdote = (content) => {
  return {
    type: "CREATE",
    data: asObject(content),
  };
};

export const setAnecdotes = (anecdotes) => {
  return {
    type: "SET",
    data: anecdotes,
  };
};

export default anecdoteReducer;
