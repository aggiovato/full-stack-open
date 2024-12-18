// DIFFERENT LOGGERS

const info = (message) => {
  console.log(message);
}; // display an informative message

const error = (message) => {
  console.error(message);
}; // display an error message

module.exports = {
  info,
  error,
};
