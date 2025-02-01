import { test, expect, beforeEach, describe } from "@playwright/test";
import {
  createUser,
  loginUser,
  createBlog,
  testUser,
  invalidUser,
  emptyUser,
  validBlog,
  emptyBlog,
} from "./helpers";

describe("BLOG APP >>>", () => {
  beforeEach(async ({ page, request }) => {
    await createUser(page, request, testUser);
  });

  test("opens the login page by default", async ({ page }) => {
    // check if the login page is visible
    // welcome message, two inputs and a button
    await expect(page.getByText("Welcome to Bloglist")).toBeVisible();
    await expect(page.getByTestId("username")).toBeVisible();
    await expect(page.getByTestId("password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  });

  describe("LOGIN >>> success", () => {
    beforeEach(async ({ page }) => {
      // fill the form with valid credentials
      await loginUser(page, testUser);
    });

    test("with correct user information from the server", async ({
      request,
    }) => {
      // check if the user is in the DB
      const res = await request.get("/api/users");
      expect(res.status()).toBe(200); // status 200 OK

      const users = await res.json();
      expect(users.length).toBe(1);
      expect(users.map((user) => user.username)).toContain(testUser.username);
    });

    test("with valid credentials, display main page", async ({ page }) => {
      // check if the main page is visible
      await expect(page.getByText("Blogs").first()).toBeVisible(); // more than one 'Blogs' text
      await expect(
        page.getByRole("button", { name: "+ New Blog" })
      ).toBeVisible();
      await expect(
        page.getByRole("textbox", { name: "Search blogs..." })
      ).toBeVisible();
    });

    test("with 'green toast' when valid credentials", async ({ page }) => {
      // check if the toast message is visible
      const toast = page.getByTestId("toast-message");

      await expect(toast).toBeVisible();
      await expect(toast).toHaveCSS("background-color", "rgb(45, 138, 74)");
      await expect(toast.locator("span")).toHaveText("Logged in successfully");

      // await expect(toast).toBeHidden({ timeout: 4000 });
    });
  });

  describe("LOGIN >>> failure", () => {
    let errObj;

    beforeEach(async ({ page }) => {
      // fill the form with invalid credentials
      const isValid = false;
      await loginUser(page, invalidUser, isValid);
    });

    test("with error from the server: unauthorized (401)", async ({
      request,
    }) => {
      // check if the invalid user is not in the DB
      errObj = await request.post("/api/login", {
        data: invalidUser,
      });

      expect(errObj.status()).toBe(401); // status 401 Unauthorized
      expect(errObj.statusText()).toBe("Unauthorized");

      const res = await request.get("/api/users");
      const users = await res.json();
      expect(users.length).toBe(1);
      expect(users.map((user) => user.username)).not.toContain("invalid");
    });

    test("with invalid credentials, display login form", async ({ page }) => {
      // expect to show still the login form
      const username = page.getByTestId("username");
      const password = page.getByTestId("password");
      await expect(username).toBeVisible();
      await expect(username).toHaveValue("");
      await expect(password).toBeVisible();
      await expect(password).toHaveValue("");
    });

    test("with 'red toast' when invalid credentials", async ({ page }) => {
      // check if the toast message is visible
      const toast = page.getByTestId("toast-message");

      await expect(toast).toBeVisible();
      await expect(toast).toHaveCSS("background-color", "rgb(217, 83, 79)");
      await expect(toast.locator("span")).toHaveText(
        "Invalid username or password"
      );

      // await expect(toast).toBeHidden({ timeout: 6000 });
    });
  });

  test("LOGIN >>> failure (empty credentials)", async ({ page }) => {
    // fill the form with empty credentials
    const isValid = false;
    await loginUser(page, emptyUser, isValid);

    // expect to show still the login form
    const username = page.getByTestId("username");
    const password = page.getByTestId("password");
    await expect(username).toBeVisible();
    await expect(username).toHaveValue("");
    await expect(password).toBeVisible();
    await expect(password).toHaveValue("");

    // check if the toast message is visible
    const toast = page.getByTestId("toast-message");

    await expect(toast).toBeVisible();
    await expect(toast).toHaveCSS("background-color", "rgb(217, 83, 79)");
    await expect(toast.locator("span")).toHaveText("These fields are required");

    // await expect(toast).toBeHidden({ timeout: 6000 });
  });

  describe("WHEN LOGGED IN >>>", () => {
    beforeEach(async ({ page }) => {
      // fill the form with valid credentials
      await loginUser(page, testUser);
    });

    test("displays the new blog form when clicking on the '+ New Blog' button", async ({
      page,
    }) => {
      // click on the '+ New Blog' button
      await page.getByRole("button", { name: "+ New Blog" }).click();

      // check if the blog form is visible
      await expect(page.getByText("Create a new Blog")).toBeVisible();
      await expect(page.getByTestId("title")).toBeVisible();
      await expect(page.getByTestId("author")).toBeVisible();
      await expect(page.getByTestId("url")).toBeVisible();
      await expect(page.getByRole("button", { name: "Create" })).toBeVisible();
      await expect(page.getByRole("button", { name: "Cancel" })).toBeVisible();
    });

    describe("BLOG FORM >>> success", () => {
      beforeEach(async ({ page }) => {
        // create a new blog (valid)
        await page.waitForTimeout(1000);
        await createBlog(page, validBlog);

        // wait for server to be updated
        await page.waitForTimeout(500);
      });

      test("with correct blog data from the server", async ({ request }) => {
        // check if the new blog is in the DB
        const res = await request.get("/api/blogs");
        expect(res.status()).toBe(200); // status 200 OK

        const blogs = await res.json();
        expect(blogs.length).toBe(1);
        expect(blogs.map((blog) => blog.title)).toContain(validBlog.title);
      });

      test("with valid blog data, displays a new blog and hide the form", async ({
        page,
      }) => {
        // checks if the blog form is hidden
        await expect(page.getByText("Create a new Blog")).not.toBeVisible();
        await expect(page.getByTestId("blog-form")).not.toBeVisible();

        // check if the new blog is visible
        const blog = page
          .locator("div")
          .filter({ hasText: `${validBlog.title}by ${validBlog.author}` })
          .nth(2);

        await expect(blog).toBeVisible();

        const iconBtn = blog.locator("button");
        await expect(iconBtn).toHaveCSS("border-radius", "50%"); // to be round
        await iconBtn.hover();
        const tooltip = page.getByTestId("view-tooltip");
        await expect(tooltip).toBeVisible();
        await expect(tooltip).toHaveText("view");
      });

      test("with 'green toast' when valid blog", async ({ page }) => {
        // check if the toast message is visible
        const toast = page.getByText("×Blog created successfully");

        await expect(toast).toBeVisible();
        await expect(toast).toHaveCSS("background-color", "rgb(45, 138, 74)");
        await expect(toast.locator("span")).toHaveText(
          "Blog created successfully"
        );

        // await expect(toast).toBeHidden({ timeout: 4000 });
      });

      test("with valid blog data, blog's details are hidden", async ({
        page,
      }) => {
        // check if the blog's details are hidden
        await expect(page.getByRole("link")).not.toBeVisible();
        await expect(page.getByTestId("likes-count")).not.toBeVisible();
        await expect(page.getByTestId("likes-btn")).not.toBeVisible();
        await expect(
          page.getByRole("button", { name: "Remove" })
        ).not.toBeVisible();
      });

      test("blog's details are shown when view-hide btn is clicked", async ({
        page,
      }) => {
        // click on the view-hide btn
        await page.getByTestId("view-btn").click();

        // check if the blog's details are visible
        const link = page.getByRole("link", { name: validBlog.url });
        const likesCount = page.getByTestId("likes-count");
        const likesBtn = page.getByTestId("likes-btn");
        const removeBtn = page.getByRole("button", { name: "Remove" });

        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute("href", validBlog.url);
        await expect(likesCount).toBeVisible();
        await expect(likesCount).toHaveText("0 likes");
        await expect(likesBtn).toBeVisible();
        await expect(removeBtn).toBeVisible();
        await expect(removeBtn).toHaveCSS(
          "background-color",
          "rgb(199, 67, 67)"
        ); // to be danger style

        // check if shows hide tooltip when hovered
        await page.getByTestId("view-btn").hover();
        const tooltip = page.getByTestId("view-tooltip");
        await expect(tooltip).toBeVisible();
        await expect(tooltip).toHaveText("hide");
      });
    });

    describe("BLOG FORM >>> failure", () => {
      beforeEach(async ({ page }) => {
        // create a new blog (invalid)
        await page.waitForTimeout(1000);
        await createBlog(page, emptyBlog);

        // wait for server to be updated
        await page.waitForTimeout(500);
      });

      test("with error from the server: fields are required", async ({
        request,
      }) => {
        // check if the amount of blogs in the DB is 0
        const res = await request.get("/api/blogs");
        expect(res.status()).toBe(404); // status 404 Not Found
        const resJSON = await res.json();
        expect(resJSON).toHaveProperty("message"); // message property
        expect(resJSON.message).toBe("No blogs found"); // message 'No blogs found'
      });

      test("with invalid blog data, display an error toast message", async ({
        page,
      }) => {
        // check if the error toast message is visible
        const toast = page.getByText("×Title is required, Author is");

        await expect(toast).toBeVisible();
        await expect(toast).toHaveCSS("background-color", "rgb(217, 83, 79)");
        await expect(toast.locator("span")).toHaveText(
          "Title is required, Author is required, Url is required"
        );

        // await expect(toast).toBeHidden({ timeout: 6000 });
      });
    });
  });
});
