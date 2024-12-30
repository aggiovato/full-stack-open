import { useState } from "react";

import blogService from "../../services/blogs";

import {
  BlogContainer,
  StyButton,
  ViewIcon,
  HideIcon,
  LikeIcon,
} from "../../styles/Blog.styles";

const Blog = ({ blog, onUpdate, onRemove }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetails = () => setShowDetails(!showDetails);
  const handleLikes = async () => {
    const updatedBlog = await blogService.like(blog.id, {
      likes: blog.likes + 1,
    });
    onUpdate(updatedBlog);
  };

  return (
    <BlogContainer>
      {showDetails ? (
        <>
          <div className="title">
            {blog.title}{" "}
            <StyButton onClick={handleDetails}>
              <HideIcon />
            </StyButton>
            <span className="view-hide">hide</span>
          </div>
          <div>
            <a className="url" href={blog.url}>
              {blog.url}
            </a>
          </div>
          <div className="likes">
            <StyButton onClick={handleLikes}>
              <LikeIcon />
            </StyButton>
            <span>{blog.likes} likes</span>
          </div>
          <span className="author">{blog.author}</span>
          {blog.isOwner && (
            <button className="btn" onClick={() => onRemove(blog.id)}>
              Remove
            </button>
          )}
        </>
      ) : (
        <div>
          <div className="title">
            {blog.title}{" "}
            <StyButton onClick={handleDetails}>
              <ViewIcon />
            </StyButton>
            <span className="view-hide">view</span>
          </div>
          <span className="small">by </span>
          <span className="author small">{blog.author}</span>
        </div>
      )}
    </BlogContainer>
  );
};

export default Blog;
