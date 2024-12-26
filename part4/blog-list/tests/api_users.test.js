// API TESTER

// EXTERNAL MODULES
const { beforeEach, test, describe, after } = require("node:test");
const assert = require("node:assert");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const supertest = require("supertest");

// IMPORT MODULES
const app = require("../app");
const helper = require("./api_helper");
const users = require("../stores/userStore");
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
describe("POST /api/users ----- Creating a new user", () => {
  test("users: a valid user can be added", async () => {
    const usersAtStart = await helper.allUsersDB();

    await api
      .post("/api/users")
      .send(users.validUser)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.allUsersDB();

    assert.strictEqual(usersAtEnd.length, usersAtStart.length + 1);
    assert(
      usersAtEnd.map((user) => user.username).includes(users.validUser.username)
    );
  });

  test("users: default value of name is username", async () => {
    const usersAtStart = await helper.allUsersDB();

    await api
      .post("/api/users")
      .send(users.userWithoutName)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.allUsersDB();

    assert.strictEqual(usersAtEnd.length, usersAtStart.length + 1);
    assert(
      usersAtEnd
        .map((user) => user.name)
        .includes(users.userWithoutName.username)
    );
  });

  test("users: username is required, status code 400 if not", async () => {
    const usersAtStart = await helper.allUsersDB();

    const result = await api
      .post("/api/users")
      .send(users.userWithoutUsername)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.allUsersDB();

    assert.strictEqual(usersAtEnd.length, usersAtStart.length);
    assert(result.body.error.includes("Username is required"));
  });

  test("users: password is required, status code 400 if not", async () => {
    const usersAtStart = await helper.allUsersDB();

    const result = await api
      .post("/api/users")
      .send(users.userWithoutPassword)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.allUsersDB();

    assert.strictEqual(usersAtEnd.length, usersAtStart.length);
    assert(result.body.error.includes("Invalid password"));
    // it does not get "password is required" error,
    // because is not passing the isValidPassword function
  });

  test("users: username min length is 3, status code 400 if not", async () => {
    const usersAtStart = await helper.allUsersDB();

    const result = await api
      .post("/api/users")
      .send(users.userWithInvalidUsername)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.allUsersDB();

    assert.strictEqual(usersAtEnd.length, usersAtStart.length);
    assert(
      result.body.error.includes("Username must be at least 3 characters")
    );
  });

  test("users: password min length is 8 and must contain 1 upper, 1 lower, 1 digit and 1 special character", async () => {
    const usersAtStart = await helper.allUsersDB();

    const result = await api
      .post("/api/users")
      .send(users.userWithInvalidPassword)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.allUsersDB();

    assert.strictEqual(usersAtEnd.length, usersAtStart.length);
    assert(result.body.error.includes("Invalid password"));
  });

  test("users: username must be unique, status code 400 if not", async () => {
    const usersAtStart = await helper.allUsersDB();

    const result = await api
      .post("/api/users")
      .send(users.repeatedUser)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.allUsersDB();

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
