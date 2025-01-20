// EXTERNAL MODULES
import { useState, useEffect } from "react";
import styled from "styled-components";

// COMPONENTS
import { LoginForm, LogInfo, BlogForm, BlogList, ToolBar } from "@components";
// CUSTOM COMPONENTS
import CNoBlogs from "@customs/CNoBlogs";

// STYLES
import GlobalStyle from "@styles/Global.styles";

// SERVICES
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
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const returnedBlogs = await blogService.getAll();
      setBlogs(returnedBlogs);
      setFilteredBlogs(returnedBlogs);
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

  const handleSearch = (e) => {
    const newFilteredBlogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredBlogs(newFilteredBlogs);
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
              <ToolBar
                onAddBlog={() => setShowForm(true)}
                onSearchChange={handleSearch}
              />
            )}
            {filteredBlogs.length === 0 ? (
              <CNoBlogs />
            ) : (
              <BlogList blogs={filteredBlogs} isVisible={showForm} />
            )}
          </MainContent>
        </>
      ) : (
        <LoginForm handleUser={setUser} />
      )}
    </>
  );
};

export default App;
