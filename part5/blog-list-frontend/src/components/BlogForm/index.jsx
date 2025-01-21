// EXTERNAL MODULES
import { useState, useEffect } from "react";

// CUSTOM COMPONENTS
import { CButton, CInputsMapper } from "../customs";

// CUSTOM HOOKS
import { useBlogForm, useToast } from "@hooks";

// STYLES
import {
  BlogFormContainer,
  FormHeading,
  StyledForm,
  ButtonContainer,
} from "@styles/BlogForm.styles";

// I18N
import { translate } from "@i18n";

const BlogForm = ({ isVisible, handleUpdateBlogs, handleVisibility }) => {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const { blogData, handleBlogCreation, handleInputChange } =
    useBlogForm(handleUpdateBlogs);
  const { addToast } = useToast();

  useEffect(() => {
    if (isVisible) {
      setShouldDisplay(true);
    } else {
      setShouldDisplay(false);
    }
  }, [isVisible]);

  if (!shouldDisplay) {
    return null;
  }

  return (
    <BlogFormContainer>
      <FormHeading>{translate("blog.form.title")}</FormHeading>
      <StyledForm onSubmit={(e) => handleBlogCreation(e, addToast)}>
        <CInputsMapper
          mapper={blogData}
          type="label"
          eventHandlers={handleInputChange}
        />
        <ButtonContainer>
          <CButton type="button" btnType="danger" onClick={handleVisibility}>
            {translate("blog.form.cancel")}
          </CButton>
          <CButton type="submit" btnType="primary">
            {translate("blog.form.create")}
          </CButton>
        </ButtonContainer>
      </StyledForm>
    </BlogFormContainer>
  );
};

export default BlogForm;
