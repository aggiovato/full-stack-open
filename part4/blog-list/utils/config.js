require("dotenv").config();

const PORT = process.env.PORT || 3003;
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost/bloglist";

module.exports = {
  PORT,
  MONGODB_URL,
};
