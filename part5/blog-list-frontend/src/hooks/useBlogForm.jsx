// EXTERNAL MODULES
import { useState } from "react";
// STORES
import blogStore from "@stores/blog";

/*********************************************************************************** */

const useBlogForm = () => {
  const [blogData, setBlogData] = useState(blogStore.emptyBlog); // state for blog data

  // function to handle input changes
  const handleInputChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  // function to clear the form
  const clearForm = () => setBlogData(blogStore.emptyBlog);

  return { blogData, handleInputChange, clearForm };
};

export default useBlogForm;
