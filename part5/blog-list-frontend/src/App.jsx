import { useState, useEffect } from "react";

import LoginForm from "./components/LoginForm";
import LogInfo from "./components/LogInfo";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";

import blogService from "./services/blogs";

const basicStyle = {
  input: {
    marginBottom: "10px",
    marginLeft: "8px",
    border: "1px solid #444",
    padding: "5px",
    borderRadius: "5px",
  },
  button: {
    marginLeft: "8px",
    marginTop: "5px",
    marginBottom: "5px",
    padding: "6px 15px",
    borderRadius: "8px",
  },
};

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      const returnedBlogs = await blogService.getAll();
      setBlogs(returnedBlogs);
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedUser");
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const updateBlogs = (newBlog) => {
    setBlogs(blogs.concat(newBlog));
    setShowForm(false);
  };

  return user ? (
    <>
      <LogInfo user={user} styles={basicStyle} />
      {showForm ? (
        <>
          <BlogForm
            handleUpdateBlogs={updateBlogs}
            handleVisibility={() => setShowForm(!showForm)}
            styles={basicStyle}
          />
        </>
      ) : (
        <button onClick={() => setShowForm(true)} style={basicStyle.button}>
          Add Blog
        </button>
      )}
      <BlogList blogs={blogs} isVisible={showForm} />
    </>
  ) : (
    <LoginForm handleUser={setUser} styles={basicStyle} />
  );
};

export default App;
