// EXTERNAL MODULES
require("express-async-errors");
const express = require("express");

// IMPORT MODULES
const blogRouter = require("./controllers/blogs");
const userRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const middle = require("./utils/middleware");

// CREATE APP
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(middle.tokenExtractor);

app.set("json spaces", 2);

// ROUTES
app.use("/api/blogs", blogRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);

// ERROR HANDLING
app.use(middle.errorHandler);
app.use(middle.unknownEndpoint);

module.exports = app;
