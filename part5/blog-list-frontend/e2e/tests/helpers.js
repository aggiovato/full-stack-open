const testUser = {
  username: "testuser",
  name: "Test User",
  password: "Test@123",
};

const createUser = async (page, request, testUser) => {
  // reset the testing DB
  await request.post("/api/testing/reset-db");
  // create a new user
  await request.post("/api/users/", {
    data: testUser,
  });

  // go to the app
  await page.goto("/");
};

const loginUser = async (page, username, password) => {
  await page.getByTestId("username").fill(username);
  await page.getByTestId("password").fill(password);
  await page.getByRole("button", { name: "Login" }).click();
};

export { createUser, loginUser, testUser };
