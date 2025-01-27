import { useState, useEffect } from "react";
import blogService from "@services/blogs";

import { processBlogs } from "@utils/helpers";

/*********************************************************************************** */

const useBlogs = (user) => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const returnedBlogs = await blogService.getAll();
        const processed = processBlogs(returnedBlogs);
        setBlogs(processed);
        setFilteredBlogs(processed);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [user]);

  const updateBlogs = (updatedBlog) => {
    setBlogs((prevBlogs) => {
      const updatedBlogs = processBlogs(
        prevBlogs.map((blog) =>
          blog.id === updatedBlog.id ? { ...updatedBlog } : blog
        ),
        user
      );
      setFilteredBlogs(updatedBlogs);
      return updatedBlogs;
    });
  };

  const removeBlog = async (blogId) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this blog?"
      );
      if (!confirm) {
        return;
      }
      await blogService.remove(blogId);
      setBlogs((prevBlogs) => {
        const updatedBlogs = processBlogs(
          prevBlogs.filter((blog) => blog.id !== blogId)
        );
        setFilteredBlogs(updatedBlogs);
        return updatedBlogs;
      });
    } catch (error) {
      console.error("Error removing blog:", error);
    }
  };

  const filterBlogs = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    setFilteredBlogs(
      blogs.filter((blog) => blog.title.toLowerCase().includes(lowerCaseQuery))
    );
  };

  return {
    blogs,
    filteredBlogs,
    updateBlogs,
    removeBlog,
    filterBlogs,
    isLoading,
  };
};

export default useBlogs;
