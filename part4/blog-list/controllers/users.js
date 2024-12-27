// EXTERNAL MODULES
const bcrypt = require("bcrypt");
const router = require("express").Router();

// HELPERS
const { isValidPassword } = require("../utils/helpers");

// MODELS
const User = require("../models/user");

// ROUTES

// get all users
router.get("/", async (req, res) => {
  const users = await User.find({}).populate("blogs", {
    title: 1,
    url: 1,
  });

  if (users.length === 0) {
    res.status(404).json({ error: "No users found" });
  } else {
    res.json(users);
  }
});

// create a new user
router.post("/", async (req, res) => {
  const { username, name, password } = req.body;

  if (!isValidPassword(password)) {
    return res.status(400).json({ error: "Invalid password" });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  let user;
  name
    ? (user = new User({ username, name, passwordHash }))
    : (user = new User({ username, passwordHash }));

  const result = await user.save();
  res.status(201).json(result);
});

module.exports = router;
