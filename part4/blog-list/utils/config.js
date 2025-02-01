require("dotenv").config();

const PORT = process.env.PORT || 3003;

const MONGODB_URI =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;

const SECRET = process.env.SECRET || "secret";

// if we're testing we need to add the testing route
const TESTING = process.env.NODE_ENV === "test" ? "test" : null;

module.exports = {
  PORT,
  MONGODB_URI,
  SECRET,
  TESTING,
};
