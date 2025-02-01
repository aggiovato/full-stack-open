// EXTERNAL MODULES
const router = require("express").Router();

// MODELS
const Blog = require("../models/blog");
const User = require("../models/user");

// ROUTES
// if we're testing we need to reset the testing database
router.post("/reset-db", async (req, res) => {
  await Blog.deleteMany({});
  await User.deleteMany({});
  res.status(204).json({ message: "Database reset" });
});

router.get("/", (req, res) => {
  res.status(200).json({ message: "This is a route for testing E2E" });
});

module.exports = router;
