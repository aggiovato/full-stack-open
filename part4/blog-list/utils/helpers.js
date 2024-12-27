// HELPERS
const User = require("../models/user");

/******************************************************************************
 * FUNCTIONS HELPERS
 *****************************************************************************/
const isValidPassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,}$/;
  return passwordRegex.test(password);
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const randomizeUsers = async () => {
  const users = await User.find({});
  return users[Math.floor(Math.random() * users.length)].id;
};

module.exports = {
  isValidPassword,
  capitalizeFirstLetter,
  randomizeUsers,
};
