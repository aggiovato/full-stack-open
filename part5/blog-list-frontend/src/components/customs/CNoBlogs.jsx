// STYLES
import { BlogContainer, BlogCard, BlogHeader } from "@styles/CBlog.styles";

const CNoBlogs = () => {
  return (
    <BlogContainer style={{ display: "grid" }}>
      <BlogCard>
        <BlogHeader style={{ justifyContent: "center" }}>
          <div className="info">
            <div className="title">No blogs found</div>
          </div>
        </BlogHeader>
      </BlogCard>
    </BlogContainer>
  );
};

export default CNoBlogs;
