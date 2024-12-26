// EXTERNAL MODULES
const mongoose = require("mongoose");

// IMPORT MODULES
const config = require("../utils/config");
const logger = require("../utils/logger");

const uri = config.MONGODB_URI;

mongoose.set("strictQuery", true);

// CONNECTION
mongoose
  .connect(uri)
  .then(() => {
    logger.info("MongoDB connected");
  })
  .catch((err) => {
    logger.error("MongoDB connection error", err.message);
  });

// SCHEMA
const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  passwordHash: String,
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

// MODEL
module.exports = mongoose.model("User", userSchema);
