// EXTERNAL MODULES
import { useState, useEffect, useCallback } from "react";
// SERVICES
import blogService from "@services/blogs";

/*********************************************************************************** */

const useBlog = (user) => {
  const [blogs, setBlogs] = useState([]); // state for blogs
  const [filteredBlogs, setFilteredBlogs] = useState([]); // state for filtered blogs
  const [isLoading, setIsLoading] = useState(true); // state for loading (to render some component or not)

  // function to sort the blogs by likes
  const processBlogs = useCallback(
    (blogs) => blogs.sort((a, b) => b.likes - a.likes),
    []
  );

  // useEffect to fetch blogs from the server and sort them by likes
  useEffect(() => {
    if (!user) {
      return; // if user is not logged in, do nothing
    }
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const returnedBlogs = await blogService.getAll();
        const sortedBlogs = processBlogs(returnedBlogs);
        setBlogs(sortedBlogs);
        setFilteredBlogs(sortedBlogs);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // call the fetchBlogs function
    fetchBlogs();
  }, [processBlogs, user]);

  // function to update a blog after some changes and sort them by likes
  const updateBlogs = (updatedBlog) => {
    setBlogs((prevBlogs) => {
      const updatedBlogs = processBlogs(
        prevBlogs.map((blog) =>
          blog.id === updatedBlog.id ? { ...updatedBlog } : blog
        )
      );
      setFilteredBlogs(updatedBlogs);
      return updatedBlogs;
    });
  };

  // function to add a new blog and sort them by likes
  const addBlog = (newBlog) => {
    const allBlogs = processBlogs([...blogs, newBlog]);
    setBlogs(allBlogs);
    setFilteredBlogs(allBlogs);
  };

  // function to remove a blog and sort them by likes
  const removeBlog = async (blogId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (confirm) {
      await blogService.remove(blogId);
      const updatedBlogs = processBlogs(
        blogs.filter((blog) => blog.id !== blogId)
      );
      setBlogs(updatedBlogs);
      setFilteredBlogs(updatedBlogs);
    }
  };

  // function to filter blogs by title
  const filterBlogs = (query) => {
    setFilteredBlogs(
      blogs.filter((blog) =>
        blog.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return {
    blogs: filteredBlogs,
    addBlog,
    updateBlogs,
    removeBlog,
    filterBlogs,
    isLoading,
  };
};

export default useBlog;
