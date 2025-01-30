// __tests__/CBlog.test.jsx
import { render, screen } from "@testing-library/react";
import { I18nProvider } from "@i18n";
import CBlog from "@customs/CBlog";
import CButton from "@customs/CButton";
import { expect } from "vitest";

describe("< CBlog />", () => {
  // testing constants
  const test_blog = {
    id: 1,
    title: "Test title",
    author: "Test author",
    url: "https://test-blog.com",
    likes: 10,
    user: { username: "testuser" },
  };
  const isOwner = true;
  const mockUpdateBlogs = vi.fn();
  const mockRemoveBlog = vi.fn();

  // render the component before each test
  beforeEach(() => {
    render(
      <I18nProvider locale="en-UK">
        <CBlog blog={test_blog} onUpdateBlogs={mockUpdateBlogs}>
          {isOwner ? (
            <CButton btnType="danger" onClick={mockRemoveBlog}>
              Remove
            </CButton>
          ) : null}
        </CBlog>
      </I18nProvider>
    );
  });

  test("should render the blog title", () => {
    const title = screen.getByText(test_blog.title);

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("text-provider"); // because it's wrapped in a span from the TextProvider
    expect(title.textContent).toBe(test_blog.title);
  });

  test("should render the blog author", () => {
    const author = screen.getByText(`by ${test_blog.author}`);

    expect(author).toBeInTheDocument();
    expect(author).toHaveClass("author");
    expect(author.textContent).toContain(test_blog.author);
  });

  test("should not render the url and the number of likes", () => {
    const url = screen.queryByText(test_blog.url); // dont throw error if not found
    const likes = screen.queryByText(test_blog.likes);

    expect(url).not.toBeInTheDocument();
    expect(likes).not.toBeInTheDocument();
  });
});
