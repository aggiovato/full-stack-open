import axios from "axios";
const baseUrl = "/api/blogs";

let token = null;
const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const create = async (newBlog) => {
  if (!token) {
    throw new Error("No token");
  }
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const res = await axios.post(baseUrl, newBlog, config);
  return res.data;
};

const like = async (blogId, updatedBlog) => {
  const res = await axios.put(`${baseUrl}/${blogId}`, updatedBlog);
  return res.data;
};

const remove = async (blogId) => {
  if (!token) {
    throw new Error("No token");
  }
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const res = await axios.delete(`${baseUrl}/${blogId}`, config);
  return res.data;
};

export default { getAll, create, like, remove, setToken };
