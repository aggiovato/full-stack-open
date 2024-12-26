// EXTERNAL MODULES
const bcrypt = require("bcrypt");
const router = require("express").Router();

// MODELS
const User = require("../models/user");

// ROUTES

// get all users
router.get("/", async (req, res) => {
  const users = await User.find({});
  if (users.length === 0) {
    res.status(404).json({ message: "No users found" });
  } else {
    res.json(users);
  }
});

// create a new user
router.post("/", async (req, res) => {
  const { username, name, password } = req.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({ username, name, passwordHash });

  const result = await user.save();
  res.status(201).json(result);
});

module.exports = router;
