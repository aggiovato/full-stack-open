// IMPORT MODULES
const { test, describe } = require("node:test");
const assert = require("node:assert");

const listHelper = require("../utils/list_helper");
const blogs = require("../stores/blogStore");

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
