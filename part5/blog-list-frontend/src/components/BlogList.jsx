import { useState, useEffect } from "react";

import Blog from "./customs/Blog";

const BlogList = ({ blogs, isVisible }) => {
  const [orderedBlogs, setOrderedBlogs] = useState(blogs);

  useEffect(() => {
    setOrderedBlogs([...blogs].sort((a, b) => b.likes - a.likes));
  }, [blogs]);

  const handleUpdateBlog = (updatedBlog) => {
    setOrderedBlogs((prevBlogs) =>
      prevBlogs
        .map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
        .sort((a, b) => b.likes - a.likes)
    );
  };

  return (
    <div style={{ display: isVisible ? "none" : "" }}>
      {orderedBlogs.map((blog) => (
        <Blog key={blog.id} blog={blog} onUpdate={handleUpdateBlog} />
      ))}
    </div>
  );
};

export default BlogList;
