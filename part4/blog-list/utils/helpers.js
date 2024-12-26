// HELPERS
const User = require("../models/user");

const isValidPassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,}$/;
  return passwordRegex.test(password);
};

const randomizeUsers = async () => {
  const users = await User.find({});
  //const users_json = users.map((user) => user.toJSON());
  return users[Math.floor(Math.random() * users.length)].id;
};

module.exports = {
  isValidPassword,
  randomizeUsers,
};
