import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "@styles/Global.styles";

import { LoginForm, LogInfo, BlogForm, BlogList } from "@components";

import blogService from "@services/blogs";

const MainContent = styled.main`
  padding-top: 80px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

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

  return (
    <>
      <GlobalStyle />
      {user ? (
        <>
          <LogInfo user={user} />
          <MainContent>
            {showForm ? (
              <BlogForm
                handleUpdateBlogs={updateBlogs}
                handleVisibility={() => setShowForm(false)}
              />
            ) : (
              <button onClick={() => setShowForm(true)}>Add Blog</button>
            )}
            <BlogList blogs={blogs} isVisible={showForm} />
          </MainContent>
        </>
      ) : (
        <LoginForm handleUser={setUser} />
      )}
    </>
  );
};

export default App;
