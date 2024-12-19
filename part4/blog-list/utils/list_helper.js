// LIST OF HELPER FUNCTIONS FOR TESTING

// always returns 1
const dummy = (blogs) => 1;

// returns the total number of likes
const totalLikes = (blogs) => blogs.reduce((acc, blog) => acc + blog.likes, 0);

module.exports = {
  dummy,
  totalLikes,
};
