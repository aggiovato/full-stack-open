// EXTERNAL MODULES
const router = require("express").Router();

// MODELS
const Blog = require("../models/blog");

// ROUTES

// get all blogs
router.get("/", async (req, res) => {
  const blogs = await Blog.find({});
  if (blogs.length === 0) {
    res.status(404).json({ message: "No blogs found" });
  } else {
    res.json(blogs);
  }
});

// get a specific blog
router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    res.status(404).json({ message: "Blog not found" });
  } else {
    res.json(blog);
  }
});

// create a new blog
router.post("/", async (req, res) => {
  const blog = new Blog({ ...req.body, likes: req.body.likes || 0 });

  const result = await blog.save();
  res.status(201).json(result);
});

// modify a blog
router.put("/:id", async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    context: "query",
  });
  if (!blog) {
    res.status(404).json({ message: "Blog not found" });
  } else {
    res.status(202).json(blog);
  }
});

// delete a blog
router.delete("/:id", async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) {
    res.status(404).json({ message: "Blog not found" });
  }
  res.status(204).json({ message: "Blog deleted" });
});

module.exports = router;
