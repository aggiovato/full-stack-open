// EXTERNAL MODULES
import styled from "styled-components";
// COMPONENTS
import { LogInfo, BlogForm, BlogList, ToolBar } from "@components";
// CUSTOM COMPONENTS
import CNoBlogs from "@customs/CNoBlogs";
import { useState } from "react";

/*********************************************************************************** */

const BlogsView = ({
  user,
  blogs,
  isLoading,
  addBlog,
  updateBlogs,
  removeBlog,
  filterBlogs,
  logout,
  changeLanguage,
}) => {
  // states for displaying the form or not
  const [showForm, setShowForm] = useState(false);

  const logInfoProps = {
    user,
    onLanguageChange: changeLanguage,
    onLogout: logout,
  };

  const toolBarProps = {
    onAddBlog: () => setShowForm(true),
    onFilterBlogs: filterBlogs,
  };

  const blogFormProps = {
    isVisible: showForm && !isLoading,
    onAddBlog: addBlog,
    handleVisibility: () => setShowForm(false),
  };

  const blogListProps = {
    blogs,
    user,
    onRemoveBlog: removeBlog,
    onUpdateBlogs: updateBlogs,
    isVisible: showForm && !isLoading,
  };

  return (
    <>
      <LogInfo {...logInfoProps} />
      <MainContent>
        {showForm ? (
          <BlogForm {...blogFormProps} />
        ) : (
          <ToolBar {...toolBarProps} />
        )}
        {blogs.length === 0 ? (
          <CNoBlogs isLoading={isLoading} />
        ) : (
          <BlogList {...blogListProps} />
        )}
      </MainContent>
    </>
  );
};

export default BlogsView;

const MainContent = styled.main`
  padding-top: 80px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
