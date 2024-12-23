// API TESTER

// EXTERNAL MODULES
const { beforeEach, test, describe, after } = require("node:test");
const assert = require("node:assert");
const mongoose = require("mongoose");
const supertest = require("supertest");

// IMPORT MODULES
const app = require("../app");
const helper = require("./api_helper");
const Blog = require("../models/blog");

// CREATE API TESTER
const api = supertest(app);

/******************************************************************************
 * BEFORE EACH TEST
 *****************************************************************************/
beforeEach(async () => {
  // delete all previous blogs
  await Blog.deleteMany({});

  // insert initial blogs
  const blogs = helper.initialBlogs.map((blog) => new Blog(blog));
  const promises = blogs.map((blog) => blog.save());
  await Promise.all(promises);
});

/******************************************************************************
 * LIST OF TESTS
 *****************************************************************************/
describe("GET /api/blogs", () => {
  test("blogs: returned as JSON", async () => {
    await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("blogs: all blogs are returned", async () => {
    const res = await api.get("/api/blogs");
    const blogs = res.body;

    assert.strictEqual(blogs.length, helper.initialBlogs.length);
  });

  test("blogs: a valid blog can be retrieved", async () => {
    const blog = (await helper.allBlogsDB())[0];

    const result = await api.get(`/api/blogs/${blog.id}`);
    const blogFromDB = result.body;

    assert.deepStrictEqual(blogFromDB, blog);
  });

  test("blogs: unique identifier is 'id'", async () => {
    const blogs = await helper.allBlogsDB();

    assert.ok(blogs[0].id, "blogs must have a property 'id'");
    assert.strictEqual(
      blogs[0]._id,
      undefined,
      "property '_id' must not exist"
    );
  });
});

describe("POST /api/blogs", () => {
  test("blogs: a valid blog can be added", async () => {
    const newBlog = {
      title: "Deploying with Docker",
      author: "Chris Wilson",
      url: "https://example.com/docker-deploy",
      likes: 16,
    };

    const result = await api
      .post("/api/blogs")
      .send(newBlog)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    newBlog.id = result.body.id;
    const blogs = await helper.allBlogsDB();

    assert.strictEqual(blogs.length, helper.initialBlogs.length + 1);
    assert(blogs.map((blog) => blog.title).includes("Deploying with Docker"));
    assert.deepStrictEqual(blogs[blogs.length - 1], newBlog);
  });

  test("blogs: default value of likes is 0", async () => {
    const newBlog = {
      title: "Kubernetes for Beginners",
      author: "Chris Wilson",
      url: "https://example.com/kubernetes",
    };

    await api
      .post("/api/blogs")
      .send(newBlog)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const blogs = await helper.allBlogsDB();

    assert.strictEqual(blogs.length, helper.initialBlogs.length + 1);
    assert.strictEqual(blogs[blogs.length - 1].likes, 0);
  });

  test("blogs: title and url are required, status code 400 if not", async () => {
    const newBlog = {
      author: "Chris Wilson",
    };

    await api
      .post("/api/blogs")
      .send(newBlog)
      .expect(400)
      .expect("Content-Type", /application\/json/);
  });
});

describe("DELETE /api/blogs/:id", () => {
  test("blogs: a valid blog can be deleted", async () => {
    const newBlog = {
      title: "Neural Networks Explained",
      author: "Sophia Lee",
      url: "https://example.com/neural-networks",
      likes: 17,
    };

    await api
      .post("/api/blogs")
      .send(newBlog)
      .expect(201)
      .expect("Content-Type", /application\/json/);
    const blogs = await helper.allBlogsDB();
    const blogToDelete = blogs[blogs.length - 1];

    await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204);

    const blogsAfterDelete = await helper.allBlogsDB();

    assert.strictEqual(blogsAfterDelete.length, blogs.length - 1);
    const titles = blogsAfterDelete.map((blog) => blog.title);
    assert(!titles.includes(blogToDelete.title));
  });
});

/******************************************************************************
 * AFTER ALL TESTS
 *****************************************************************************/
after(async () => {
  await mongoose.connection.close();
});
