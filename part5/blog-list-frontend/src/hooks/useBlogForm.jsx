// EXTERNAL MODULES
import { useState } from "react";

// SERVICES
import blogService from "@services/blogs";

// STORES
import blogStore from "@stores/blog";

export const useBlogForm = (handleUpdateBlogs) => {
  const [blogData, setBlogData] = useState(blogStore.emptyBlog);

  const handleBlogCreation = async (e, addToast) => {
    e.preventDefault();

    try {
      const newBlog = await blogService.create(blogData);
      handleUpdateBlogs(newBlog);

      addToast("Blog created successfully", "success");
    } catch (error) {
      addToast(error.response.data.error, "error");
    } finally {
      clearForm();
    }
  };

  const handleInputChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const clearForm = () => setBlogData(blogStore.emptyBlog);

  return { blogData, handleBlogCreation, handleInputChange };
};
