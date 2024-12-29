import { useState } from "react";

import Message from "./Message";

import blogService from "../services/blogs";

const BlogForm = ({ handleUpdateBlogs, style }) => {
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
      setMessage({
        display: true,
        text: `Created blog "${newBlog.title}"`,
        type: "success",
      });
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
        <div>
          title:
          <input
            type="text"
            name="title"
            style={style.input}
            value={blogData.title}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          author:
          <input
            type="text"
            name="author"
            style={style.input}
            value={blogData.author}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          url:
          <input
            type="url"
            name="url"
            style={style.input}
            value={blogData.url}
            onChange={handleInputChange}
          ></input>
        </div>
        <button type="submit" style={style.button}>
          Create
        </button>
      </form>
    </>
  );
};

export default BlogForm;
