// CUSTOM COMPONENTS
import { CBlog, CButton } from "@customs";
// STYLES
import { BlogContainer } from "@styles/CBlog.styles";
// I18N
import { translate } from "@i18n";

/*********************************************************************************** */

const BlogList = ({ blogs, user, onRemoveBlog, onUpdateBlogs, isVisible }) => {
  if (isVisible) {
    return null;
  }

  return (
    <BlogContainer>
      {blogs.map((blog) => {
        // when first render blog has property user that is an object with id and username
        // when blog is changed by some modifications like liking removing or adding a new blog
        // the user property is not longer an object but a string with the id of the user
        const isOwner = user?.id === blog?.user?.id || user?.id === blog?.user;
        return (
          <CBlog key={blog.id} blog={blog} onUpdateBlogs={onUpdateBlogs}>
            {isOwner ? (
              <CButton btnType="danger" onClick={() => onRemoveBlog(blog.id)}>
                {translate("blogcard.remove")}
              </CButton>
            ) : null}
          </CBlog>
        );
      })}
    </BlogContainer>
  );
};

export default BlogList;
