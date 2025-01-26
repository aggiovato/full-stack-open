import { useState, useEffect, useCallback } from "react";
import blogService from "@services/blogs";

const useBlogs = (user) => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // function to set the 'remove' botton on the blog card
  const calculateIsOwner = useCallback(
    (blog, user) => (user ? blog.user.username === user.username : false),
    []
  );

  const sortBlogs = useCallback((blogs) => {
    return blogs.sort((a, b) => b.likes - a.likes);
  }, []);

  const processBlogs = useCallback(
    (blogs, user) => {
      return sortBlogs(
        blogs.map((blog) => ({
          ...blog,
          isOwner: calculateIsOwner(blog, user),
        }))
      );
    },
    [sortBlogs, calculateIsOwner]
  );

  // load the blogs from the server
  useEffect(() => {
    const fetchBlogs = async () => {
      const returnedBlogs = await blogService.getAll();

      setBlogs(processBlogs(returnedBlogs, user));
      setFilteredBlogs(processBlogs(returnedBlogs, user));
      setIsLoading(false);
    };

    fetchBlogs();
  }, [user, processBlogs]);

  const updateBlogs = (newBlog) => {
    setBlogs((prevBlogs) => {
      const updatedBlogs = processBlogs([...prevBlogs, newBlog]);
      setFilteredBlogs(updatedBlogs);
      return updatedBlogs;
    });
  };

  const removeBlog = async (blogId) => {
    await blogService.remove(blogId);
    setBlogs((prevBlogs) => {
      const updatedBlogs = processBlogs(
        prevBlogs.filter((blog) => blog.id !== blogId)
      );
      setFilteredBlogs(updatedBlogs);
      return updatedBlogs;
    });
  };

  const filterBlogs = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    setFilteredBlogs(
      blogs.filter((blog) => blog.title.toLowerCase().includes(lowerCaseQuery))
    );
  };

  const handleLike = async (blogId) => {
    const updatedBlog = await blogService.like(blogId);
    setBlogs((prevBlogs) => {
      const updatedBlogs = processBlogs(
        prevBlogs.map((blog) =>
          blog.id === blogId
            ? {
                ...updatedBlog,
                isOwner: calculateIsOwner(updatedBlog, user),
              }
            : blog
        )
      );
      setFilteredBlogs(updatedBlogs);
      return updatedBlogs;
    });
  };

  return {
    blogs,
    filteredBlogs,
    updateBlogs,
    removeBlog,
    filterBlogs,
    handleLike,
    isLoading,
  };
};

export default useBlogs;
