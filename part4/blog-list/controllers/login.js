// EXTERNAL MODULES
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = require("express").Router();

// IMPORT MODULES
const { SECRET } = require("../utils/config");

// MODELS
const User = require("../models/user");

// ROUTES
// create a new token for a user
router.post("/", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  const passCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passCorrect)) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  const token = jwt.sign(userForToken, SECRET);
  res.status(200).send({ token, username: user.username, name: user.name });
});

module.exports = router;
