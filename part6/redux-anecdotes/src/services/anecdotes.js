import axios from "axios";

const baseUrl = "http://localhost:3000";

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/anecdotes`);
  return response.data.sort((a, b) => b.votes - a.votes);
};

const createNew = async (content) => {
  const obj = {
    content,
    votes: 0,
  };
  const response = await axios.post(`${baseUrl}/anecdotes`, obj);
  return response.data;
};

const vote = async (anecdote) => {
  const id = anecdote.id;
  const response = await axios.put(`${baseUrl}/anecdotes/${id}`, {
    ...anecdote,
    votes: anecdote.votes + 1,
  });
  return response.data;
};

export default { getAll, createNew, vote };
