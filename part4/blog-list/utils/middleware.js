// IMPORT MODULES
const jwt = require("jsonwebtoken");
const logger = require("./logger");

const { SECRET } = require("./config");

const tokenExtractor = (req, res, next) => {
  const auth = req.get("Authorization");
  if (auth && auth.startsWith("Bearer ")) {
    req.token = auth.replace("Bearer ", "");
  }
  next();
};

const tokenDecoder = (req, res, next) => {
  const decoded = jwt.verify(req.token, SECRET);
  if (!(decoded && decoded.id)) {
    return res.status(401).json({ error: "Invalid token" });
  }
  req.user = decoded;
  next();
};

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);

  if (err.name === "CastError") {
    return res.status(400).json({ error: "Malformatted ID" });
  } else if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((error) => error.message);
    return res.status(400).json({ error: messages.join(", ") });
  } else if (
    err.name === "MongoServerError" &&
    err.message.includes("E11000 duplicate key")
  ) {
    return res.status(400).json({ error: "Expected `username` to be unique" });
  } else if (err.name === "JsonWebTokenError") {
    return res.status(401).json({ error: "Invalid token" });
  }

  next(err);
};

const unknownEndpoint = (req, res) => {
  res.status(404).json({ error: "Unknown endpoint" });
};

module.exports = {
  tokenExtractor,
  tokenDecoder,
  errorHandler,
  unknownEndpoint,
};
