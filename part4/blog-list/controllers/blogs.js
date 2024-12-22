// EXTERNAL MODULES
const router = require("express").Router();

// MODELS
const Blog = require("../models/blog");

// ROUTES
router.get("/", async (req, res) => {
  const blogs = await Blog.find({});
  if (blogs.length === 0) {
    res.status(404).json({ message: "No blogs found" });
  } else {
    res.json(blogs);
  }
});

router.post("/", async (req, res) => {
  const blog = new Blog(req.body);

  const result = await blog.save();
  res.status(201).json(result);
});

module.exports = router;
