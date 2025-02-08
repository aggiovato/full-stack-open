import axios from "axios";

const baseUrl = "http://localhost:3000";

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/anecdotes`);
  return response.data;
};

export default { getAll };
