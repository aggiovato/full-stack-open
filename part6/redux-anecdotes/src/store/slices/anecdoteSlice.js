import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "../../services/anecdotes";

const anecdotesAtStart = [
  "If it hurts, do it more often.",
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

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote: (state, action) => {
      state.push(action.payload);
    },
    voteAnecdote: (state, action) => {
      const anecdote = state.find((anecdote) => anecdote.id === action.payload);
      if (anecdote) anecdote.votes += 1;

      state.sort((a, b) => b.votes - a.votes);
    },
    setAnecdotes: (state, action) => (state = action.payload),
  },
});

// ACTION CREATORS (external functions)
export const { createAnecdote, voteAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

// THUNK CREATORS
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    try {
      const anecdotes = await anecdotesService.getAll();
      dispatch(setAnecdotes(anecdotes));
    } catch (error) {
      console.error("Error fetching anecdotes:", error);
    }
  };
};

// REDUCER
export default anecdoteSlice.reducer;
