// __tests__/CBlog.test.jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nProvider } from "@i18n";
import { CBlog, CButton } from "@customs";
import blogService from "@services/blogs";
import { beforeEach, expect } from "vitest";

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
  let isOwner;
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

  test("should display the tooltip view-hide when hovered", async () => {
    const user = userEvent.setup();
    const viewBtn = screen.getByTestId("view-btn");

    // first shows 'view' tooltip
    await user.hover(viewBtn);

    const tooltip = screen.getByTestId("view-tooltip");
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent("view");

    // then click view details
    await user.click(viewBtn);

    // then shows 'hide' tooltip
    await user.hover(viewBtn);
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent("hide");
  });
});

describe("Remove btn", () => {
  // testing constants
  const test_blog = {
    id: 1,
    title: "Test title",
    author: "Test author",
    url: "https://test-blog.com",
    likes: 10,
    user: { username: "testuser" },
  };
  const mockUpdateBlogs = vi.fn();
  const mockRemoveBlog = vi.fn();

  test("should not render the remove btn when is not the owner", async () => {
    const isOwner = false;
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

    const user = userEvent.setup();
    const viewBtn = screen.getByTestId("view-btn");
    expect(viewBtn).toBeInTheDocument();

    // user clicks the show details icon
    await user.click(viewBtn);

    const removeBtn = screen.queryByText("Remove");
    expect(removeBtn).not.toBeInTheDocument();
  });

  test("should render the remove btn when user is owner", async () => {
    const isOwner = true;
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

    const user = userEvent.setup();
    const viewBtn = screen.getByTestId("view-btn");
    expect(viewBtn).toBeInTheDocument();

    // user clicks the show details icon btn
    await user.click(viewBtn);

    const removeBtn = screen.getByText("Remove");
    expect(removeBtn).toBeInTheDocument();
    expect(removeBtn).toHaveStyle("background-color: #c74343"); // to be danger style
  });
});
