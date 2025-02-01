import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BlogForm from "@components/BlogForm";
import { ToastProvider } from "@contexts/ToastProvider";
import { I18nProvider } from "@i18n";
import blogService from "@services/blogs";

/*********************************************************************** */

vi.mock("@services/blogs"); // mock the service

describe("< BlogForm />", () => {
  const isVisible = true;

  const mockAddBlog = vi.fn();
  const mockHandleVisibility = vi.fn();

  beforeEach(() => {
    vi.restoreAllMocks();

    // simulate the create call to the service
    vi.spyOn(blogService, "create").mockImplementation((data) => {
      return Promise.resolve(data);
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  beforeEach(() => {
    render(
      <ToastProvider>
        <I18nProvider locale="en-UK">
          <BlogForm
            isVisible={isVisible}
            onAddBlog={mockAddBlog}
            handleVisibility={mockHandleVisibility}
          />
        </I18nProvider>
      </ToastProvider>
    );
  });

  test("should render the form: title, author, url, and buttons (cancel and create)", () => {
    const form = screen.getByTestId("blog-form");
    const buttonsContainer = screen.getByTestId("button-container");

    expect(form).toBeInTheDocument();
    // 3 input and 1 button container (with two buttons)
    expect(form.children).toHaveLength(4);

    expect(form.children[0]).toHaveTextContent("Title");
    expect(form.children[1]).toHaveTextContent("Author");
    expect(form.children[2]).toHaveTextContent("Url");

    expect(buttonsContainer).toBeInTheDocument();
    expect(buttonsContainer.children).toHaveLength(2);
    expect(buttonsContainer.children[0]).toHaveTextContent("Cancel");
    expect(buttonsContainer.children[1]).toHaveTextContent("Create");
  });

  test("should create a new blog with the correct data", async () => {
    const user = userEvent.setup();
    const createBtn = screen.getByTestId("button-container").children[1];

    // input fields
    const titleInput = screen.getByTestId("title");
    const authorInput = screen.getByTestId("author");
    const urlInput = screen.getByTestId("url");

    // user fills the form
    await user.type(titleInput, "Test title");
    await user.type(authorInput, "Test author");
    await user.type(urlInput, "https://test-blog.com");

    // user clicks the create button
    await user.click(createBtn);

    // check toast message for a success
    const successToast = await screen.findByTestId("toast-message");
    expect(successToast)
      .toBeInTheDocument()
      .toHaveTextContent("Blog created successfully")
      .toHaveStyle("background-color: #2D8A4A");

    // toast must disappear after 3 seconds
    /*await waitFor(() => expect(successToast).not.toBeInTheDocument(), {
      timeout: 4000,
    });*/

    // check if the create method was called correctly
    expect(blogService.create).toHaveBeenCalledTimes(1).toHaveBeenCalledWith({
      title: "Test title",
      author: "Test author",
      url: "https://test-blog.com",
    });
  });

  test("should display an error toast message when the create method fails", async () => {
    const user = userEvent.setup();
    const createBtn = screen.getByTestId("button-container").children[1];

    blogService.create.mockRejectedValue({
      response: {
        data: {
          error: "Title is required, Author is required, Url is required",
        },
      },
    });

    // input fields
    const titleInput = screen.getByTestId("title");
    const authorInput = screen.getByTestId("author");
    const urlInput = screen.getByTestId("url");

    // initial empty values
    expect(titleInput).toHaveValue("");
    expect(authorInput).toHaveValue("");
    expect(urlInput).toHaveValue("");

    // user clicks the create button
    await user.click(createBtn);

    // check toast message for an error
    const errorToast = await screen.findByTestId("toast-message");
    expect(errorToast)
      .toBeInTheDocument()
      .toHaveTextContent(
        "Title is required, Author is required, Url is required"
      )
      .toHaveStyle("background-color: #D9534F");

    /*await waitFor(() => expect(errorToast).not.toBeInTheDocument(), {
      timeout: 6000,
    });*/

    // check if the create method was called correctly
    expect(blogService.create).toHaveBeenCalledTimes(1).toHaveBeenCalledWith({
      title: "",
      author: "",
      url: "",
    });
  });
});
