// IMPORT MODULES
const logger = require("./logger");

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);

  if (err.name === "CastError") {
    return res.status(400).json({ error: "Malformatted ID" });
  } else if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((error) => error.message);
    return res.status(400).json({ error: messages.join(", ") });
  }

  next(err);
};

const unknownEndpoint = (req, res) => {
  res.status(404).json({ error: "Unknown endpoint" });
};

module.exports = {
  errorHandler,
  unknownEndpoint,
};
