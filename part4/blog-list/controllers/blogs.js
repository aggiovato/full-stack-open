// EXTERNAL MODULES
const router = require("express").Router();

// IMPORT MODULES
const middle = require("../utils/middleware");

// MODELS
const Blog = require("../models/blog");
const User = require("../models/user");

// ROUTES
// get all blogs
router.get("/", async (req, res) => {
  const blogs = await Blog.find({}).populate("user", {
    username: 1,
    name: 1,
  });

  if (blogs.length === 0) {
    res.status(404).json({ message: "No blogs found" });
  } else {
    res.json(blogs);
  }
});

// get a specific blog
router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("user", {
    username: 1,
    name: 1,
  });
  if (!blog) {
    res.status(404).json({ message: "Blog not found" });
  } else {
    res.json(blog);
  }
});

// create a new blog
router.post("/", middle.tokenDecoder, async (req, res) => {
  const decodedUser = req.user;
  const user = await User.findById(decodedUser.id);

  const blog = new Blog({
    ...req.body,
    likes: req.body.likes || 0,
    user: user.id,
  });

  const savedBlog = await blog.save();

  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();
  res.status(201).json(savedBlog);
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
router.delete("/:id", middle.tokenDecoder, async (req, res) => {
  const decodedUser = req.user;
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }
  if (blog.user.toString() !== decodedUser.id.toString()) {
    return res
      .status(401)
      .json({ error: "Unauthorized operation for this user" });
  }

  await Blog.deleteOne({ _id: blog._id });
  res.status(200).json({ message: "Blog deleted" });
});

module.exports = router;
