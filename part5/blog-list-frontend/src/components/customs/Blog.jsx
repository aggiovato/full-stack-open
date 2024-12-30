import { useState } from "react";

import blogService from "../../services/blogs";

import {
  BlogContainer,
  StyButton,
  ViewIcon,
  HideIcon,
  LikeIcon,
} from "../../styles/Blog.styles";

const Blog = ({ blog, onUpdate }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [likes, setLikes] = useState(blog.likes);

  const handleDetails = () => setShowDetails(!showDetails);
  const handleLikes = async () => {
    const updatedBlog = await blogService.like(blog.id, { likes: likes + 1 });
    setLikes(updatedBlog.likes);
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
            <span>{likes} likes</span>
          </div>
          <span className="author">{blog.author}</span>
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
