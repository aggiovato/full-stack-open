// DIFFERENT LOGGERS

const info = (message) => {
  if (process.env.NODE_ENV === "test") return;
  console.log(message);
}; // display an informative message

const error = (message) => {
  if (process.env.NODE_ENV === "test") return;
  console.error(message);
}; // display an error message

module.exports = {
  info,
  error,
};
