const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

export const initialState = anecdotesAtStart.map(asObject);

// REDUCER
const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE":
      return handleCreate(state, action);
    case "VOTE":
      return handleVote(state, action);
    default:
      return state;
  }
};

export default anecdoteReducer;

// ACTION HANDLERS (internal functions)
const handleCreate = (state, action) => {
  return [...state, asObject(action.payload.content)];
};

// increments vootes and reorders by votes
const handleVote = (state, action) => {
  const unorderedAnecdotes = state.map((anecdote) =>
    anecdote.id === action.payload.id
      ? { ...anecdote, votes: anecdote.votes + 1 }
      : anecdote
  );

  return unorderedAnecdotes.sort((a, b) => b.votes - a.votes);
};

// ACTION CREATORS (external functions)
export const createAnecdote = (content) => {
  return {
    type: "CREATE",
    payload: { content },
  };
};

export const voteAnecdote = (id) => {
  return {
    type: "VOTE",
    payload: { id },
  };
};
