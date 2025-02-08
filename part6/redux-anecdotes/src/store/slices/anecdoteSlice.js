import { createSlice } from "@reduxjs/toolkit";
import { setNotification } from "./notificationSlice";

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
  initialState,
  reducers: {
    createAnecdote: (state, action) => {
      state.push(asObject(action.payload.content));
      setNotification("Anecdote created!");
    },
    voteAnecdote: (state, action) => {
      const anecdote = state.find(
        (anecdote) => anecdote.id === action.payload.id
      );
      if (anecdote) anecdote.votes += 1;

      state.sort((a, b) => b.votes - a.votes);
      setNotification(`You voted "${anecdote.content}"!`);
    },
  },
});

export const { createAnecdote, voteAnecdote } = anecdoteSlice.actions;

export default anecdoteSlice.reducer;
