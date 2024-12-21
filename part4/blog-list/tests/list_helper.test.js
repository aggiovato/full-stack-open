// EXTERNAL MODULES
const { test, describe } = require("node:test");
const assert = require("node:assert");

// IMPORT MODULES
const listHelper = require("../utils/list_helper");
const blogs = require("../stores/blogStore");

/******************************************************************************
 * LIST OF TESTS
 *****************************************************************************/

// DUMMY FUNCTION TEST
test("dummy returns one", () => {
  const result = listHelper.dummy(blogs.emptyList);
  assert.strictEqual(result, 1);
});

// TOTAL LIKES TEST
describe("total likes", () => {
  test("when list is empty, equals zero", () => {
    const result = listHelper.totalLikes(blogs.emptyList);
    assert.strictEqual(result, 0);
  });

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(blogs.listWithOneBlog);
    assert.strictEqual(result, 5);
  });

  test("when list has more than one blog, sums the likes of all", () => {
    const result = listHelper.totalLikes(blogs.listWithBlogs);
    assert.strictEqual(result, 36);
  });
});

// FAVORITE BLOG TEST
describe("favorite blog", () => {
  test("when list is empty, returns zero", () => {
    const result = listHelper.favoriteBlog(blogs.emptyList);
    assert.strictEqual(result, 0);
  });

  test("when list has only one blog, returns that", () => {
    const result = listHelper.favoriteBlog(blogs.listWithOneBlog);
    assert.deepStrictEqual(result, {
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      likes: 5,
    });
  });

  test("when list has more than one blog, returns the one with the most likes", () => {
    const result = listHelper.favoriteBlog(blogs.listWithBlogs);
    assert.deepStrictEqual(result, {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12,
    });
  });

  test("when list has more than one blog with the same number of likes, returns the first one", () => {
    const result = listHelper.favoriteBlog(blogs.blogsWithSameLikes);
    assert.deepStrictEqual(result, {
      title: "React patterns",
      author: "Michael Chan",
      likes: 7,
    });
  });
});

// MOST BLOGS TEST
describe("most blogs", () => {
  test("when list is empty, returns an empty object", () => {
    const result = listHelper.mostBlogs(blogs.emptyList);
    assert.deepStrictEqual(result, { author: "", blogs: 0 });
  });

  test("when list has only one blog, returns that", () => {
    const result = listHelper.mostBlogs(blogs.listWithOneBlog);
    assert.deepStrictEqual(result, {
      author: "Edsger W. Dijkstra",
      blogs: 1,
    });
  });

  test("when list has more than one blog, returns the one with the most blogs", () => {
    const result = listHelper.mostBlogs(blogs.blogsWithRepeatedAuthors);
    assert.deepStrictEqual(result, {
      author: "John Doe",
      blogs: 3,
    });
  });
});

// MOST LIKES TEST
describe("most likes", () => {
  test("when list is empty, returns an empty object", () => {
    const result = listHelper.mostLikes(blogs.emptyList);
    assert.deepStrictEqual(result, { author: "", likes: 0 });
  });

  test("when list has only one blog, returns that", () => {
    const result = listHelper.mostLikes(blogs.listWithOneBlog);
    assert.deepStrictEqual(result, {
      author: "Edsger W. Dijkstra",
      likes: 5,
    });
  });

  test("when list has more than one blog, returns the one with the most likes", () => {
    const result = listHelper.mostLikes(blogs.blogsWithRepeatedAuthors);
    assert.deepStrictEqual(result, { author: "Alice Johnson", likes: 48 });
  });
});
