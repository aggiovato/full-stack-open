// LIST OF HELPER FUNCTIONS FOR TESTING
const _ = require("lodash");

// always returns 1
const dummy = (blogs) => 1;

// returns the total number of likes
const totalLikes = (blogs) => blogs.reduce((acc, blog) => acc + blog.likes, 0);

// returns the favorite blog
const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return 0;

  const favorite = blogs.reduce(
    (acc, blog) => (acc.likes >= blog.likes ? acc : blog),
    blogs[0]
  );

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes,
  };
};

// returns the author with most blogs
const mostBlogs = (blogs) => {
  const counter = _.countBy(blogs, "author");
  const most = _.maxBy(_.keys(counter), (author) => counter[author]);
  return _.isEmpty(blogs)
    ? { author: "", blogs: 0 }
    : {
        author: most,
        blogs: counter[most],
      };
};

// returns the author with most likes
const mostLikes = (blogs) => {
  const groupedAuthors = _.groupBy(blogs, "author");
  const authorLikes = _.map(groupedAuthors, (authorBlogs, author) => ({
    author,
    likes: _.reduce(authorBlogs, (acc, blog) => acc + blog.likes, 0),
  }));

  return _.isEmpty(blogs)
    ? { author: "", likes: 0 }
    : _.maxBy(authorLikes, "likes");
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
