import axios from "axios";

const anecdotesUrl = "http://localhost:3001/anecdotes";

const getAnecdotes = async () => {
  const response = await axios.get(anecdotesUrl);
  return response.data;
};

const createAnecdote = async (content) => {
  const response = await axios.post(anecdotesUrl, { content, votes: 0 });
  return response.data;
};

const voteAnecdote = async (anecdote) => {
  const response = await axios.put(anecdotesUrl + `/${anecdote.id}`, {
    ...anecdote,
    votes: anecdote.votes + 1,
  });
  return response.data;
};

export { getAnecdotes, createAnecdote, voteAnecdote };
