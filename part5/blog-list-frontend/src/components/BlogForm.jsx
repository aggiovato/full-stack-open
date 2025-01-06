import { useState } from "react";

import Message from "./customs/Message";
import InputPanel from "./customs/InputPanel";

import blogService from "../services/blogs";

const BlogForm = ({ handleUpdateBlogs, handleVisibility }) => {
  const [blogData, setBlogData] = useState({ title: "", author: "", url: "" });
  const [message, setMessage] = useState({
    display: false,
    text: "",
    type: "error",
  });

  const handleBlogCreation = async (e) => {
    e.preventDefault();
    try {
      const newBlog = await blogService.create(blogData);
      handleUpdateBlogs(newBlog);
    } catch (error) {
      setMessage({
        display: true,
        text: error.response.data.error,
        type: "error",
      });
    } finally {
      clearForm();
    }
  };

  const handleInputChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const clearForm = () => setBlogData({ title: "", author: "", url: "" });

  return (
    <>
      <Message message={message} handleMessage={setMessage} />
      <h2>Create new</h2>
      <form onSubmit={handleBlogCreation}>
        <InputPanel data={blogData} eventHandler={handleInputChange} />
        <div style={{ display: "flex" }}>
          <button type="submit">Create</button>
          <button type="button" onClick={handleVisibility}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default BlogForm;
