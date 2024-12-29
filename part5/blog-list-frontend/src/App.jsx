import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import LogInfo from "./components/LogInfo";
import BlogList from "./components/BlogList";

import blogService from "./services/blogs";

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
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  return (
    <>
      {user ? (
        <>
          <LogInfo user={user} />
          <BlogList blogs={blogs} />
        </>
      ) : (
        <LoginForm handleUser={setUser} />
      )}
    </>
  );
};

export default App;
