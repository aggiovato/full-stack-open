// CUSTOM COMPONENTS
import CBlog from "@customs/CBlog";
// STYLES
import { BlogContainer } from "@styles/CBlog.styles";

/*********************************************************************************** */

const BlogList = ({ blogs, user, onRemoveBlog, onUpdateBlogs, isVisible }) => {
  if (isVisible) {
    return null;
  }

  return (
    <BlogContainer>
      {blogs.map((blog) => (
        <CBlog
          key={blog.id}
          blog={blog}
          user={user}
          onRemove={onRemoveBlog}
          onUpdateBlogs={onUpdateBlogs}
        />
      ))}
    </BlogContainer>
  );
};

export default BlogList;
