import { test, expect, beforeEach, describe } from "@playwright/test";

describe("Blog app", () => {
  beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
  });

  test("opens the login page by default", async ({ page }) => {
    // check if the login page is visible
    // welcome message, two inputs and a button
    await expect(page.getByText("Welcome to Bloglist")).toBeVisible();
    await expect(page.getByTestId("username")).toBeVisible();
    await expect(page.getByTestId("password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  });
});
