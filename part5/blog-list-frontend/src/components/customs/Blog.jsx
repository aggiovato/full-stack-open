import { useState } from "react";

import {
  BlogContainer,
  BlogTitle,
  ShowHideButton,
  ViewIcon,
  HideIcon,
} from "../../styles/Blog.styles";

const Blog = ({ blog }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetails = () => setShowDetails(!showDetails);

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
            likes: {blog.likes} <button>like</button>
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
