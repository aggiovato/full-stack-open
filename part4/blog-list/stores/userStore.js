// Store for users

const emptyUser = {
  username: "",
  name: "",
  password: "",
};

const validUser = {
  username: "aggiovato",
  name: "Aggiovato",
  password: "hall2084*Pass",
};

const userWithoutName = {
  username: "hellas",
  password: "hellaS@-123",
};

const userWithoutUsername = {
  name: "Arto Hellas",
  password: "hellaS@-123",
};

const userWithoutPassword = {
  username: "hellas",
  name: "Arto Hellas",
};

const userWithInvalidUsername = {
  username: "li",
  name: "Li Han Gyong",
  password: "sekreT12**",
};

const userWithInvalidPassword = {
  username: "hellas",
  name: "Arto Hellas",
  password: "123",
};

const repeatedUser = {
  username: "root",
  name: "Repeated Root",
  password: "anotherPass*123",
};

module.exports = {
  emptyUser,
  validUser,
  userWithoutName,
  userWithoutUsername,
  userWithoutPassword,
  userWithInvalidUsername,
  userWithInvalidPassword,
  repeatedUser,
};
