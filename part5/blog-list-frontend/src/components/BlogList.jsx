import { useState, useEffect } from "react";

import Blog from "@customs/Blog";

import blogService from "@services/blogs";

const BlogList = ({ blogs, isVisible }) => {
  const customUser = JSON.parse(window.localStorage.getItem("loggedUser"));
  const [orderedBlogs, setOrderedBlogs] = useState([]);

  useEffect(() => {
    const processedBlogs = blogs.map((blog) => ({
      ...blog,
      isOwner: customUser.username === blog.user.username,
    }));
    setOrderedBlogs(processedBlogs.sort((a, b) => b.likes - a.likes));
  }, [blogs, customUser.username]);

  const handleUpdateBlog = (updatedBlog) => {
    setOrderedBlogs((prevBlogs) =>
      prevBlogs
        .map((blog) =>
          blog.id === updatedBlog.id
            ? { ...updatedBlog, isOwner: blog.isOwner }
            : blog
        )
        .sort((a, b) => b.likes - a.likes)
    );
  };

  const handleRemoveBlog = async (blogId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (confirm) {
      await blogService.remove(blogId);
      setOrderedBlogs((prevBlogs) =>
        prevBlogs.filter((blog) => blog.id !== blogId)
      );
    }
  };

  return (
    <div style={{ display: isVisible ? "none" : "" }}>
      {orderedBlogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          onUpdate={handleUpdateBlog}
          onRemove={handleRemoveBlog}
        />
      ))}
    </div>
  );
};

export default BlogList;
