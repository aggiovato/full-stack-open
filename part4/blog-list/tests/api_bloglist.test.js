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

  test("unique identifier is 'id' and not '_id'", async () => {
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
  test("a valid blog can be added", async () => {
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

    // check the length of the array
    assert.strictEqual(blogs.length, helper.initialBlogs.length + 1);

    // checks the title
    const titles = blogs.map((blog) => blog.title);
    assert(titles.includes("Deploying with Docker"));

    //checks the whole object
    assert.deepStrictEqual(blogs[blogs.length - 1], newBlog);
  });
});

/******************************************************************************
 * AFTER ALL TESTS
 *****************************************************************************/
after(async () => {
  await mongoose.connection.close();
});
