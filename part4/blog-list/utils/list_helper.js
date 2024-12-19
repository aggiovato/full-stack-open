// LIST OF HELPER FUNCTIONS FOR TESTING

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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
