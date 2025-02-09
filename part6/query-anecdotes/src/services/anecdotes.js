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

export { getAnecdotes, createAnecdote };
