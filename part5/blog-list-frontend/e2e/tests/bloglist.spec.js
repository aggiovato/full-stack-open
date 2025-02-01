import { test, expect, beforeEach, describe } from "@playwright/test";
import { createUser, loginUser, testUser } from "./helpers";

describe("Blog app >>>", () => {
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

  describe("Login >>> success", () => {
    beforeEach(async ({ page }) => {
      // fill the form with valid credentials
      await loginUser(page, testUser.username, testUser.password);
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

      await expect(toast).toBeHidden({ timeout: 4000 });
    });
  });

  describe("Login >>> failure", () => {
    const invalidUser = {
      username: "invalid",
      password: "invalid",
    };
    let errObj;

    beforeEach(async ({ page, request }) => {
      // fill the form with invalid credentials
      await loginUser(page, invalidUser.username, invalidUser.password);
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
      console.log(errObj);

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

      await expect(toast).toBeHidden({ timeout: 6000 });
    });
  });

  test("Login >>> failure (empty credentials)", async ({ page }) => {
    // fill the form with empty credentials
    await loginUser(page, "", "");

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

    await expect(toast).toBeHidden({ timeout: 6000 });
  });
});
