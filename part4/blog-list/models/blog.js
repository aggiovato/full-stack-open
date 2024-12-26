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
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
  },
  url: {
    type: String,
    validate: {
      validator: (url) => {
        return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
          url
        );
      },
      message: (props) => `${props.value} is not a valid URL`,
    },
    required: [true, "URL is required"],
  },
  likes: Number || 0,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
});

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// MODEL
module.exports = mongoose.model("Blog", blogSchema);
