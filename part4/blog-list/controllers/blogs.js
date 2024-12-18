// EXTERNAL MODULES
const router = require("express").Router();

// MODELS
const Blog = require("../models/blog");

// ROUTES
router.get("/", (req, res, next) => {
  Blog.find({})
    .then((blogs) => {
      if (blogs.length === 0) {
        res.status(404).json({ message: "No blogs found" });
      } else {
        res.json(blogs);
      }
    })
    .catch((err) => next(err));
});

router.post("/", (req, res, next) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => next(err));
});

module.exports = router;
