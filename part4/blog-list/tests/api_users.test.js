// API USERS TESTER

// EXTERNAL MODULES
const { beforeEach, test, describe, after } = require("node:test");
const assert = require("node:assert");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const supertest = require("supertest");

// IMPORT MODULES
const app = require("../app");
const helper = require("./api_helpers");
const fHelper = require("../utils/helpers");
const uStore = require("../stores/userStore");
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
describe("POST /api/users ----- Creating a new user", () => {
  test("users: valid one can be added", async () => {
    // before
    const usersAtStart = await helper.allUsersDB();

    // action
    await api
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
  });

  test("users: default value name: username (capitalized)", async () => {
    // before
    const usersAtStart = await helper.allUsersDB();

    // action
    await api
      .post("/api/users")
      .send(uStore.userWithoutName)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    // after
    const usersAtEnd = await helper.allUsersDB();

    // checks
    assert.strictEqual(usersAtEnd.length, usersAtStart.length + 1);
    assert(
      usersAtEnd
        .map((user) => user.name)
        .includes(
          fHelper.capitalizeFirstLetter(uStore.userWithoutName.username)
        )
    );
  });

  test("users: if not username, failure 400", async () => {
    // before
    const usersAtStart = await helper.allUsersDB();

    // action
    const result = await api
      .post("/api/users")
      .send(uStore.userWithoutUsername)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    // after
    const usersAtEnd = await helper.allUsersDB();

    // checks
    assert.strictEqual(usersAtEnd.length, usersAtStart.length);
    assert(result.body.error.includes("Username is required"));
  });

  test("users: if not password, failure 400", async () => {
    // before
    const usersAtStart = await helper.allUsersDB();

    // action
    const result = await api
      .post("/api/users")
      .send(uStore.userWithoutPassword)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    // after
    const usersAtEnd = await helper.allUsersDB();

    // checks
    assert.strictEqual(usersAtEnd.length, usersAtStart.length);
    assert(result.body.error.includes("Invalid password"));
    // it does not get "password is required" error,
    // because is not passing the isValidPassword function
  });

  test("users: with username minlength: 3, failure 400", async () => {
    // before
    const usersAtStart = await helper.allUsersDB();

    // action
    const result = await api
      .post("/api/users")
      .send(uStore.userWithInvalidUsername)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    // after
    const usersAtEnd = await helper.allUsersDB();

    // checks
    assert.strictEqual(usersAtEnd.length, usersAtStart.length);
    assert(
      result.body.error.includes("Username must be at least 3 characters")
    );
  });

  test("users: with password validation: minlength: 8, 1 upper, 1 lower, 1 digit, 1 special, failure 400", async () => {
    // before
    const usersAtStart = await helper.allUsersDB();

    // action
    const result = await api
      .post("/api/users")
      .send(uStore.userWithInvalidPassword)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    // after
    const usersAtEnd = await helper.allUsersDB();

    // checks
    assert.strictEqual(usersAtEnd.length, usersAtStart.length);
    assert(result.body.error.includes("Invalid password"));
  });

  test("users: with username unique, failure 400", async () => {
    // before
    const usersAtStart = await helper.allUsersDB();

    // action
    const result = await api
      .post("/api/users")
      .send(uStore.repeatedUser)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    // after
    const usersAtEnd = await helper.allUsersDB();

    // checks
    assert.strictEqual(usersAtEnd.length, usersAtStart.length);
    assert(result.body.error.includes("Expected `username` to be unique"));
  });
});

/******************************************************************************
 * AFTER ALL TESTS
 *****************************************************************************/
after(async () => {
  await mongoose.connection.close();
});
