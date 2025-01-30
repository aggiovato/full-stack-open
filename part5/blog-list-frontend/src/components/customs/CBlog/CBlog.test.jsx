// __tests__/CBlog.test.jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@i18n";
import { CBlog, CButton } from "@customs";
import blogService from "@services/blogs";
import { beforeEach } from "vitest";

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

  beforeEach(() => {
    vi.restoreAllMocks();

    // simulate the like call to the service
    vi.spyOn(blogService, "like").mockImplementation((id, updatedData) => {
      return Promise.resolve({ ...test_blog, likes: updatedData.likes });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

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

  test("should display url and likes when icon btn is clicked", async () => {
    const user = userEvent.setup();
    const viewBtn = screen.getByTestId("view-btn");

    expect(viewBtn).toBeInTheDocument();
    expect(viewBtn).toHaveStyle("font-size: 0"); // because it's an icon

    await user.click(viewBtn);

    const url = screen.getByText(test_blog.url);
    const likes = screen.getByTestId("likes-count");

    expect(url).toBeInTheDocument();
    expect(likes).toBeInTheDocument();
    expect(likes.textContent).toContain(test_blog.likes);
  });

  test("should increase the number of likes two times when clicked twice", async () => {
    const user = userEvent.setup();
    const viewBtn = screen.getByTestId("view-btn");

    // first show details
    await user.click(viewBtn);

    // check if number of likes and icon btn exists
    const likes = screen.getByTestId("likes-count");
    const likesBtn = screen.getByTestId("likes-btn");
    expect(likes).toBeInTheDocument();
    expect(likesBtn).toBeInTheDocument();

    // click the likes btn twice
    await user.click(likesBtn);
    await user.click(likesBtn);

    expect(blogService.like).toHaveBeenCalledTimes(2);
    expect(likes).toHaveTextContent(String(test_blog.likes + 2));
  });
});
