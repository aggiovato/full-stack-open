// EXTERNAL MODULES
import { useState, useEffect } from "react";

// STYLES
import { BlogContainer, BlogCard, BlogHeader } from "@styles/CBlog.styles";

// I18N
import { translate } from "@i18n";

const CNoBlogs = ({ isLoading }) => {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setShouldDisplay(true);
    } else {
      setShouldDisplay(false);
    }
  }, [isLoading]);

  if (!shouldDisplay) {
    return null;
  }
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
