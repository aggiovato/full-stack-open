// API BLOGS TESTER

// EXTERNAL MODULES
const { beforeEach, test, describe, after } = require("node:test");
const assert = require("node:assert");
const mongoose = require("mongoose");
const supertest = require("supertest");

// IMPORT MODULES
const app = require("../app");
const helper = require("./api_helpers");
const bStore = require("../stores/blogStore");
const { root, validUser } = require("../stores/userStore");

// IMPORT MODELS
const Blog = require("../models/blog");
const User = require("../models/user");

// CREATE API TESTER
const api = supertest(app);

/******************************************************************************
 * BEFORE EACH TEST
 *****************************************************************************/
beforeEach(async () => {
  await Blog.deleteMany({});
  await User.deleteMany({});

  // insert root user
  const userRoot = await helper.createUser(root);

  // insert initial blogs
  const blogs = bStore.initialBlogs.map(
    (blog) => new Blog({ ...blog, user: userRoot._id })
  );
  const promises = blogs.map((blog) => blog.save());
  await Promise.all(promises);
});

/******************************************************************************
 * TESTS FOR GET /api/blogs
 *****************************************************************************/
describe("GET /api/blogs ----- Getting information about blogs", () => {
  test("blogs: returned as JSON", async () => {
    //action
    await api
      .get("/api/blogs")
      .expect(200) // checks
      .expect("Content-Type", /application\/json/);
  });

  test("blogs: all of them are returned", async () => {
    //action
    const res = await api.get("/api/blogs");

    // checks
    assert.strictEqual(res.body.length, bStore.initialBlogs.length);
  });

  test("blogs: valid one can be retrieved", async () => {
    //pre
    const blog = (await helper.allBlogsDB())[0];

    //action
    const retrievedBlog = await api.get(`/api/blogs/${blog.id}`);

    // checks
    assert.deepStrictEqual(retrievedBlog.body, blog);
  });

  test("blogs: with unique identifier `id`", async () => {
    // before
    const blogsAtStart = await helper.allBlogsDB();

    // checks
    assert.ok(blogsAtStart[0].id, "blogs must have a property 'id'");
    assert.strictEqual(
      blogsAtStart[0]._id,
      undefined,
      "property '_id' must not exist"
    );
  });
});

/******************************************************************************
 * TESTS FOR POST /api/blogs
 *****************************************************************************/
describe("POST /api/blogs ----- Creating a new blog", () => {
  test("blogs: valid one can be added", async () => {
    // login root user
    const { token } = await helper.loginUser(root, api);
    assert.ok(token);

    // before
    const blogsAtStart = await helper.allBlogsDB();

    // pre
    const blog = {
      title: "Deploying with Docker",
      author: "Chris Wilson",
      url: "https://example.com/docker-deploy",
      likes: 16,
    };

    // action
    await api
      .post("/api/blogs")
      .set("Authorization", `Bearer ${token}`)
      .send(blog)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    // after
    const blogsAtEnd = await helper.allBlogsDB();

    // checks
    assert.strictEqual(blogsAtEnd.length, blogsAtStart.length + 1);
    assert(
      blogsAtEnd.map((blog) => blog.title).includes("Deploying with Docker")
    );
  });

  test("blogs: with default value `likes: 0`", async () => {
    // login root user
    const { token } = await helper.loginUser(root, api);
    assert.ok(token);

    // before
    const blogsAtStart = await helper.allBlogsDB();

    // pre
    const blog = {
      title: "Kubernetes for Beginners",
      author: "Chris Wilson",
      url: "https://example.com/kubernetes",
    };

    // action
    await api
      .post("/api/blogs")
      .set("Authorization", `Bearer ${token}`)
      .send(blog)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    // after
    const blogsAtEnd = await helper.allBlogsDB();

    // checks
    assert.strictEqual(blogsAtEnd.length, blogsAtStart.length + 1);
    assert.strictEqual(blogsAtEnd[blogsAtEnd.length - 1].likes, 0);
  });

  test("blogs: with title and url required, failure 400", async () => {
    // login root user
    const { token } = await helper.loginUser(root, api);
    assert.ok(token);

    // before
    const blogsAtStart = await helper.allBlogsDB();

    // pre
    const blog = {
      author: "Chris Wilson",
    };

    // action
    const result = await api
      .post("/api/blogs")
      .set("Authorization", `Bearer ${token}`)
      .send(blog)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    // after
    const blogsAtEnd = await helper.allBlogsDB();

    // checks
    assert.strictEqual(blogsAtEnd.length, blogsAtStart.length);
    assert(result.body.error.includes("Title is required"));
  });

  test("blogs: if token not provided, failure 401", async () => {
    // pre
    const blog = {
      title: "Async/Await in JavaScript",
      author: "Jane Smith",
      url: "https://example.com/async-await",
      likes: 18,
    };

    // action
    const result = await api
      .post("/api/blogs")
      .send(blog)
      .expect(401)
      .expect("Content-Type", /application\/json/);

    // checks
    assert(result.body.error.includes("Invalid token"));
  });

  test("blogs: if invalid token, failure 401", async () => {
    // pre
    const blog = {
      title: "Async/Await in JavaScript",
      author: "Jane Smith",
      url: "https://example.com/async-await",
      likes: 40,
    };

    // action
    const result = await api
      .post("/api/blogs")
      .set("Authorization", "Bearer invalidToken")
      .send(blog)
      .expect(401)
      .expect("Content-Type", /application\/json/);

    // checks
    assert(result.body.error.includes("Invalid token"));
  });
});

/******************************************************************************
 * TESTS FOR DELETE /api/blogs/:id
 *****************************************************************************/
describe("DELETE /api/blogs/:id ----- Deleting an existing blog", () => {
  test("blogs: valid one can be deleted", async () => {
    // login root user
    const { token } = await helper.loginUser(root, api);
    assert.ok(token);

    // before
    const blogsAtStart = await helper.allBlogsDB();

    // action
    const result = await api
      .delete(`/api/blogs/${blogsAtStart[0].id}`)
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    // after
    const blogsAtEnd = await helper.allBlogsDB();

    // checks
    assert.strictEqual(blogsAtEnd.length, blogsAtStart.length - 1);
    const titles = blogsAtEnd.map((blog) => blog.title);
    assert(!titles.includes(blogsAtStart[0].title));
    assert(result.body.message.includes("Blog deleted"));
  });

  test("blogs: if invalid token, failure 401", async () => {
    // before
    const blogsAtStart = await helper.allBlogsDB();

    // action
    const result = await api
      .delete(`/api/blogs/${blogsAtStart[0].id}`)
      .set("Authorization", "Bearer invalidToken")
      .expect(401)
      .expect("Content-Type", /application\/json/);

    // after
    const blogsAtEnd = await helper.allBlogsDB();

    // checks
    assert(result.body.error.includes("Invalid token"));
    assert.strictEqual(blogsAtEnd.length, blogsAtStart.length);
  });

  test("blogs: if token not provided, failure 401", async () => {
    // before
    const blogsAtStart = await helper.allBlogsDB();

    // action
    const result = await api
      .delete(`/api/blogs/${blogsAtStart[0].id}`)
      .expect(401)
      .expect("Content-Type", /application\/json/);

    // after
    const blogsAtEnd = await helper.allBlogsDB();

    // checks
    assert(result.body.error.includes("Invalid token"));
    assert.strictEqual(blogsAtEnd.length, blogsAtStart.length);
  });

  test("blogs: if unauthorized user, failure 401", async () => {
    // create a new user
    await helper.createUser(validUser);

    // login new user
    const { token: invalidUserToken } = await helper.loginUser(validUser, api);
    assert.ok(invalidUserToken);

    // before
    const blogsAtStart = await helper.allBlogsDB();

    // action
    const result = await api
      .delete(`/api/blogs/${blogsAtStart[0].id}`)
      .set("Authorization", `Bearer ${invalidUserToken}`)
      .expect(401)
      .expect("Content-Type", /application\/json/);

    // after
    const blogsAtEnd = await helper.allBlogsDB();

    // checks
    assert(result.body.error.includes("Unauthorized operation for this user"));
    assert.strictEqual(blogsAtEnd.length, blogsAtStart.length);
  });
});

/******************************************************************************
 * TESTS FOR PUT /api/blogs/:id
 *****************************************************************************/
describe("PUT /api/blogs/:id ----- Modifying an existing blog", () => {
  test("blogs: valid one can be modified", async () => {
    // pre
    const blog = (await helper.allBlogsDB())[0];
    const updateBlog = { ...blog, likes: blog.likes + 5 };

    // action
    const result = await api
      .put(`/api/blogs/${blog.id}`)
      .send({ likes: updateBlog.likes })
      .expect(202)
      .expect("Content-Type", /application\/json/);

    // after
    const blogsAtEnd = await helper.allBlogsDB();

    // checks
    assert.strictEqual(result.body.likes, updateBlog.likes);
    assert.strictEqual(
      blogsAtEnd.find((blog) => blog.id === updateBlog.id).likes,
      updateBlog.likes
    );
  });
});

/******************************************************************************
 * AFTER ALL TESTS
 *****************************************************************************/
after(async () => {
  await mongoose.connection.close();
});
