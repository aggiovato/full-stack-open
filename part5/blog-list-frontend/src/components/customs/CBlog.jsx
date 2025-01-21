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

const CBlog = ({ blog, onUpdate, onRemove }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { formatMessage } = useIntl();
  const translated = {
    view: formatMessage({ id: "blogcard.view" }),
    hide: formatMessage({ id: "blogcard.hide" }),
    like: formatMessage({ id: "blogcard.like" }),
    likes: formatMessage({ id: "blogcard.likes" }),
  };

  const handleDetails = () => setShowDetails(!showDetails);

  const handleLikes = async () => {
    const updatedBlog = await blogService.like(blog.id, {
      likes: blog.likes + 1,
    });
    onUpdate(updatedBlog);
  };

  return (
    <BlogCard>
      <BlogHeader>
        <div className="info">
          <div className="title">
            <TextProvider
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
            <StyButton onClick={handleLikes}>
              <Like />
            </StyButton>
            <span>
              {blog.likes}{" "}
              {blog.likes === 1 ? translated.like : translated.likes}
            </span>
          </div>
          {blog.isOwner && (
            <CButton btnType="danger" onClick={() => onRemove(blog.id)}>
              {translate("blogcard.remove")}
            </CButton>
          )}
        </BlogDetails>
      )}
    </BlogCard>
  );
};

export default CBlog;
