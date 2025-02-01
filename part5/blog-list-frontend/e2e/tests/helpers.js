const testUser = {
  username: "testuser",
  name: "Test User",
  password: "Test@123",
};

const anotherUser = {
  username: "anotheruser",
  name: "Another User",
  password: "Another@123",
};

const invalidUser = {
  username: "invalid",
  password: "invalid",
};

const emptyUser = {
  username: "",
  password: "",
};

const validBlog = {
  title: "Test title",
  author: "Test author",
  url: "https://test-blog.com",
};

const emptyBlog = {
  title: "",
  author: "",
  url: "",
};

const createUser = async (page, request, user) => {
  // reset the testing DB
  await request.post("/api/testing/reset-db");

  // create a new user
  await request.post("/api/users/", {
    data: user,
  });

  // go to the app
  await page.goto("/");
  await page.evaluate(() => localStorage.clear());
};

const loginUser = async (page, user, isValid = true) => {
  await page.getByTestId("username").fill(user.username); // fill the username input
  await page.getByTestId("password").fill(user.password); // fill the password input
  await page.getByRole("button", { name: "Login" }).click(); // click on the login button

  // wait for the user to be logged in
  if (isValid) {
    await page.waitForFunction(() => {
      return localStorage.getItem("loggedUser") !== null;
    });
  }
};

const createBlog = async (page, blog) => {
  // interact with the form
  await page.getByRole("button", { name: "+ New Blog" }).click(); // click on the '+ New Blog' button
  await page.getByTestId("title").fill(blog.title); // fill the title input
  await page.getByTestId("author").fill(blog.author); // fill the author input
  await page.getByTestId("url").fill(blog.url); // fill the url input
  await page.getByRole("button", { name: "Create" }).click(); // click on the create button
};

/*async function highlightElement(page, selector) {
  await page.evaluate((selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.outline = "5px solid yellow";
      element.style.transition = "outline 0.3s ease-in-out";
      setTimeout(() => (element.style.outline = ""), 500);
    }
  }, selector);
}*/

export {
  createUser,
  loginUser,
  createBlog,
  testUser,
  anotherUser,
  invalidUser,
  emptyUser,
  validBlog,
  emptyBlog,
};
