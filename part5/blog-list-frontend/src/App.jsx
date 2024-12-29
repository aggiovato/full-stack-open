import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import LogInfo from "./components/LogInfo";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";

import blogService from "./services/blogs";

const basicInputButtonStyle = {
  input: {
    marginBottom: "10px",
    marginLeft: "8px",
    border: "1px solid #444",
    padding: "5px",
    borderRadius: "5px",
  },
  button: {
    marginLeft: "8px",
    padding: "6px 15px",
    borderRadius: "8px",
  },
};

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const returnedBlogs = blogService.getAll();
    returnedBlogs.then((blogs) => setBlogs(blogs));
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
  };

  return (
    <>
      {user ? (
        <>
          <LogInfo user={user} style={basicInputButtonStyle} />
          <BlogForm
            handleUpdateBlogs={updateBlogs}
            style={basicInputButtonStyle}
          />
          <BlogList blogs={blogs} />
        </>
      ) : (
        <LoginForm handleUser={setUser} style={basicInputButtonStyle} />
      )}
    </>
  );
};

export default App;
