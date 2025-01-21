// STYLES
import { BlogContainer, BlogCard, BlogHeader } from "@styles/CBlog.styles";

// I18N
import { translate } from "@i18n";

const CNoBlogs = () => {
  return (
    <BlogContainer style={{ display: "grid" }}>
      <BlogCard>
        <BlogHeader style={{ justifyContent: "center" }}>
          <div className="info">
            <div className="title">{translate("noblog.title")}</div>
          </div>
        </BlogHeader>
      </BlogCard>
    </BlogContainer>
  );
};

export default CNoBlogs;
