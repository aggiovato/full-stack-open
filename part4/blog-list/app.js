// EXTERNAL MODULES
require("express-async-errors");
const express = require("express");

// IMPORT MODULES
const blogRouter = require("./controllers/blogs");
const userRouter = require("./controllers/users");
const { errorHandler, unknownEndpoint } = require("./utils/middleware");

// CREATE APP
const app = express();

// MIDDLEWARES
app.use(express.json());

app.set("json spaces", 2);

// ROUTES
app.use("/api/blogs", blogRouter);
app.use("/api/users", userRouter);

// ERROR HANDLING
app.use(errorHandler);
app.use(unknownEndpoint);

module.exports = app;
