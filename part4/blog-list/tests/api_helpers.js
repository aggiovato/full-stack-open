// EXTERNAL MODULES
const bcrypt = require("bcrypt");

// IMPORT MODELS
const Blog = require("../models/blog");
const User = require("../models/user");

/******************************************************************************
 * TESTERS HELPERS
 *****************************************************************************/
const allBlogsDB = async () => {
  const blogs = await Blog.find({}).populate("user", { username: 1, name: 1 });
  return blogs.map((blog) => blog.toJSON());
};

const allUsersDB = async () => {
  const users = await User.find({}).populate("blogs", { title: 1, url: 1 });
  return users.map((user) => user.toJSON());
};

const createUser = async (user) => {
  const passwordHash = await bcrypt.hash(user.password, 10);
  const newUser = new User({ username: user.username, passwordHash });
  return await newUser.save();
};

const loginUser = async (user, api) => {
  const loginUser = {
    username: user.username,
    password: user.password,
  };

  const result = await api.post("/api/login").send(loginUser);
  return { token: result.body.token, user: result.body };
};

module.exports = {
  allBlogsDB,
  allUsersDB,
  createUser,
  loginUser,
};
