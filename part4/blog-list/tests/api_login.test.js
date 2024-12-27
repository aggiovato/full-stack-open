// API LOGIN TESTER

// EXTERNAL MODULES
const { beforeEach, test, describe, after } = require("node:test");
const assert = require("node:assert");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const supertest = require("supertest");

// IMPORT MODULES
const app = require("../app");
const helper = require("./api_helpers");
const uStore = require("../stores/userStore");
const { SECRET } = require("../utils/config");

// IMPORT MODELS
const User = require("../models/user");

// CREATE API TESTER
const api = supertest(app);

/******************************************************************************
 * BEFORE EACH TEST
 *****************************************************************************/
beforeEach(async () => {
  await User.deleteMany({});

  // create root user
  await helper.createUser(uStore.root);
});

/******************************************************************************
 * LIST OF TESTS
 *****************************************************************************/
describe("POST /api/login ----- Login with an existing user", () => {
  test("login: valid user can be logged in", async () => {
    // before
    const usersAtStart = await helper.allUsersDB();

    // action
    const newUser = await api
      .post("/api/users")
      .send(uStore.validUser)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    // after
    const usersAtEnd = await helper.allUsersDB();

    // checks
    assert.strictEqual(usersAtEnd.length, usersAtStart.length + 1);
    assert(
      usersAtEnd
        .map((user) => user.username)
        .includes(uStore.validUser.username)
    );

    // login with newUser
    const { token, user: loggedUser } = await helper.loginUser(
      uStore.validUser,
      api
    );
    assert.ok(token);

    // checks
    assert.strictEqual(loggedUser.username, uStore.validUser.username);
    const decoded = jwt.verify(token, SECRET);
    assert.strictEqual(decoded.username, uStore.validUser.username);
    assert.strictEqual(decoded.id, newUser.body.id);
  });

  test("login: if invalid username or password, failure 401", async () => {
    // pre
    const invalidUser = { ...uStore.root, password: "wrong" };

    // action
    const result = await api
      .post("/api/login")
      .send(invalidUser)
      .expect(401)
      .expect("Content-Type", /application\/json/);

    // checks
    assert.strictEqual(result.body.error, "Invalid username or password");
  });
});

/******************************************************************************
 * AFTER ALL TESTS
 *****************************************************************************/
after(async () => {
  await mongoose.connection.close();
});
