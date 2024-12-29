import { useState } from "react";

import blogService from "../services/blogs";

const BlogForm = ({ handleUpdateBlogs, style }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const handleBlogCreation = async (e) => {
    e.preventDefault();
    try {
      const blog = { title, author, url };
      const newBlog = await blogService.create(blog);
      handleUpdateBlogs(newBlog);
      clearForm();
    } catch (error) {
      console.log(error);
    }
  };

  const clearForm = () => {
    setTitle("");
    setAuthor("");
    setUrl("");
  };
  return (
    <>
      <h2>Create new</h2>
      <form onSubmit={handleBlogCreation}>
        <div>
          title:
          <input
            type="text"
            name="title"
            style={style.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          author:
          <input
            type="text"
            name="author"
            style={style.input}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <div>
          url:
          <input
            type="url"
            name="url"
            style={style.input}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
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
