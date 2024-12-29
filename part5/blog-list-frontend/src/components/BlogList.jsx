import Blog from "./customs/Blog";

const BlogList = ({ blogs, isVisible }) => {
  return (
    <div style={{ display: isVisible ? "none" : "" }}>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
