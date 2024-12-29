import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import BlogList from "./components/BlogList";

import blogService from "./services/blogs";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const returnedBlogs = blogService.getAll();
    returnedBlogs.then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <>
      {user ? (
        <BlogList blogs={blogs} user={user} />
      ) : (
        <LoginForm handleUser={setUser} />
      )}
    </>
  );
};

export default App;
