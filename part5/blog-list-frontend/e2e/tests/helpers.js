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

const multipleBlogs = [
  {
    title: "TEST: Understanding Async/Await",
    author: "John Doe",
    url: "https://async-await.com",
    likes: 12,
  },
  {
    title: "TEST: Mastering JavaScript Closures",
    author: "Jane Smith",
    url: "https://closures-guide.com",
    likes: 35,
  },
  {
    title: "TEST: React Hooks: The Ultimate Guide",
    author: "Michael Johnson",
    url: "https://react-hooks.com",
    likes: 49,
  },
  {
    title: "TEST: Node.js Performance Optimization",
    author: "Alice Brown",
    url: "https://node-performance.com",
    likes: 27,
  },
  {
    title: "TEST: Another blog to check token",
    author: "Myself",
    url: "https://token-auth.com",
    likes: 20,
  },
  {
    title: "TEST: CSS Grid vs Flexbox: When to Use Each",
    author: "David Wilson",
    url: "https://css-layouts.com",
    likes: 15,
  },
  {
    title: "TEST: State Management in Large-Scale React Apps",
    author: "Sophia Martinez",
    url: "https://react-state.com",
    likes: 50,
  },
  {
    title: "TEST: How to Debug JavaScript Like a Pro",
    author: "Daniel Lee",
    url: "https://js-debugging.com",
    likes: 6,
  },
  {
    title: "TEST: GraphQL vs REST: Pros and Cons",
    author: "Emily Clark",
    url: "https://graphql-vs-rest.com",
    likes: 31,
  },
  {
    title: "TEST: The Future of Web Development in 2025",
    author: "William Turner",
    url: "https://webdev-2025.com",
    likes: 22,
  },
];

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

const createMultipleBlogs = async (page, request, blogs) => {
  // wait for the user to be logged in
  const loggedUser = await page.waitForFunction(() => {
    return localStorage.getItem("loggedUser");
  });
  const user = JSON.parse(loggedUser);
  const token = user?.token ? `Bearer ${user.token}` : "";

  if (!token) {
    throw new Error("No token");
  }

  // create multiple blogs
  for (const blog of blogs) {
    await request.post("/api/blogs/", {
      data: blog,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
  }
};

const defaultLikes = (likes) => {
  return `${likes} ${likes === 1 ? "like" : "likes"}`;
};

export {
  createUser,
  loginUser,
  createBlog,
  createMultipleBlogs,
  defaultLikes,
  testUser,
  anotherUser,
  invalidUser,
  emptyUser,
  validBlog,
  emptyBlog,
  multipleBlogs,
};
