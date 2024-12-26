// API TESTER

// EXTERNAL MODULES
const { beforeEach, test, describe, after } = require("node:test");
const assert = require("node:assert");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const supertest = require("supertest");

// IMPORT MODULES
const app = require("../app");
const helper = require("./api_helper");
const users = require("../stores/userStore");
const { SECRET } = require("../utils/config");

// IMPORT MODELS
const User = require("../models/user");

// CREATE API TESTER
const api = supertest(app);

/******************************************************************************
 * BEFORE EACH TEST
 *****************************************************************************/
beforeEach(async () => {
  // delete and create root user
  await User.deleteMany({});

  const passwordHash = await bcrypt.hash("sekret", 10);
  const user = new User({ username: "root", passwordHash });

  await user.save();
});

/******************************************************************************
 * LIST OF TESTS
 *****************************************************************************/
describe("POST /api/login ----- Login with an existing user", () => {
  test("login: a valid user can be logged in", async () => {
    // create a new user
    const usersAtStart = await helper.allUsersDB();
    const newUser = await api
      .post("/api/users")
      .send(users.validUser)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.allUsersDB();

    assert.strictEqual(usersAtEnd.length, usersAtStart.length + 1);
    assert(
      usersAtEnd.map((user) => user.username).includes(users.validUser.username)
    );

    // login with the new user
    const loginUser = {
      username: users.validUser.username,
      password: users.validUser.password,
    };

    const result = await api
      .post("/api/login")
      .send(loginUser)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    assert.strictEqual(result.body.username, loginUser.username);
    assert.strictEqual(result.body.id, loginUser.id);
    assert.ok(result.body.token);

    // check if the token is valid
    const decoded = jwt.verify(result.body.token, SECRET);

    assert.strictEqual(decoded.username, loginUser.username);
    assert.strictEqual(decoded.id, newUser.body.id);
  });

  test("login: invalid username or password, status code 401 if not", async () => {
    const loginUser = {
      username: "root",
      password: "wrong",
    };

    const result = await api
      .post("/api/login")
      .send(loginUser)
      .expect(401)
      .expect("Content-Type", /application\/json/);

    assert.strictEqual(result.body.error, "Invalid username or password");
  });
});

/******************************************************************************
 * AFTER ALL TESTS
 *****************************************************************************/
after(async () => {
  await mongoose.connection.close();
});
