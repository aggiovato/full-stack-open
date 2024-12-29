import { useState } from "react";

import blogService from "../../services/blogs";

import {
  BlogContainer,
  BlogTitle,
  ShowHideButton,
  ViewIcon,
  HideIcon,
} from "../../styles/Blog.styles";

const Blog = ({ blog }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [likes, setLikes] = useState(blog.likes);

  const handleDetails = () => setShowDetails(!showDetails);
  const handleLikes = async () => {
    const retrievedBlog = await blogService.like(blog.id, { likes: likes + 1 });
    setLikes(retrievedBlog.likes);
  };

  return (
    <BlogContainer>
      {showDetails ? (
        <>
          <BlogTitle>
            {blog.title}{" "}
            <ShowHideButton onClick={handleDetails}>
              <HideIcon />
            </ShowHideButton>
          </BlogTitle>
          <div>
            <a href={blog.url}>{blog.url}</a>
          </div>
          <div>
            likes: {likes} <button onClick={handleLikes}>like</button>
          </div>
          {blog.author}
        </>
      ) : (
        <div>
          <BlogTitle>
            {blog.title}{" "}
            <ShowHideButton onClick={handleDetails}>
              <ViewIcon />
            </ShowHideButton>
          </BlogTitle>
          by {blog.author}
        </div>
      )}
    </BlogContainer>
  );
};

export default Blog;
