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
  test("blogs are returned as JSON", async () => {
    await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("all blogs are returned", async () => {
    const res = await api.get("/api/blogs");
    const blogs = res.body;

    assert.strictEqual(blogs.length, helper.initialBlogs.length);
  });
});

/******************************************************************************
 * AFTER ALL TESTS
 *****************************************************************************/
after(async () => {
  await mongoose.connection.close();
});
