// EXTERNAL MODULES
import { useState } from "react";
// CUSTOM COMPONENTS
import { CButton, CTooltip } from "@customs";
// ICONS
import { View, Hide, Like } from "@icons";
// CONTEXTS
import TextProvider from "@contexts/TextProvider";
// STYLES
import {
  BlogCard,
  BlogHeader,
  BlogDetails,
  StyButton,
} from "@styles/CBlog.styles";
// SERVICES
import blogService from "@services/blogs";
// I18N
import { translate } from "@i18n";
import { useIntl } from "react-intl";
// PROP TYPES
import PropTypes from "prop-types";

/*********************************************************************************** */

const CBlog = ({ children, blog, onUpdateBlogs }) => {
  const [showDetails, setShowDetails] = useState(false); // state for show details
  const [updatedLikes, setUpdatedLikes] = useState(blog.likes); // state for likes

  // translations
  const { formatMessage } = useIntl();
  const translated = {
    view: formatMessage({ id: "blogcard.view" }),
    hide: formatMessage({ id: "blogcard.hide" }),
    like: formatMessage({ id: "blogcard.like" }),
    likes: formatMessage({ id: "blogcard.likes" }),
  };

  // function to handle details
  const handleDetails = () => setShowDetails(!showDetails);

  // function to handle like
  const handleLike = async () => {
    try {
      const updatedBlog = await blogService.like(blog.id, {
        likes: updatedLikes + 1,
      });
      setUpdatedLikes(updatedBlog.likes);
      onUpdateBlogs(updatedBlog);
    } catch (error) {
      console.error("Error liking the blog:", error);
    }
  };

  return (
    <BlogCard>
      <BlogHeader>
        <div className="info">
          <div className="title">
            <TextProvider
              data-testid="blog-title"
              text={blog.title}
              charLimitLarge={50}
              charLimitSmall={28}
            />
          </div>
          <div className="author">
            {translate("blogcard.by")} {blog.author}
          </div>
        </div>
        <div className="show-hide">
          <CTooltip
            tooltipText={showDetails ? translated.hide : translated.view}
          >
            <CButton
              shape="icon"
              icon={showDetails ? <Hide /> : <View />}
              onClick={handleDetails}
            />
          </CTooltip>
        </div>
      </BlogHeader>
      {showDetails && (
        <BlogDetails>
          <div>
            <a className="url" href={blog.url} target="_blank" rel="noreferrer">
              <TextProvider
                text={blog.url}
                charLimitLarge={70}
                charLimitSmall={28}
              />
            </a>
          </div>
          <div className="likes">
            <StyButton onClick={handleLike}>
              <Like />
            </StyButton>
            <span className="likes-count">
              {updatedLikes}{" "}
              {updatedLikes === 1 ? translated.like : translated.likes}
            </span>
          </div>
          {children}
        </BlogDetails>
      )}
    </BlogCard>
  );
};

export default CBlog;

// PropTypes

CBlog.propTypes = {
  children: PropTypes.node,
  blog: PropTypes.object.isRequired,
  onUpdateBlogs: PropTypes.func.isRequired,
};
