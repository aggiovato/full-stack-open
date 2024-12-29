const Blog = ({ blog }) => (
  <div>
    <p>
      <span style={{ fontWeight: "bold" }}>{blog.title} </span>
      by <span style={{ fontStyle: "italic" }}>{blog.author}</span>
    </p>
  </div>
);

export default Blog;
