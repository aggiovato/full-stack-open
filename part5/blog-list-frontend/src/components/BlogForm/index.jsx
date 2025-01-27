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

/*********************************************************************************** */

const BlogForm = ({ isVisible, onUpdateBlogs, handleVisibility }) => {
  const { blogData, handleBlogCreation, handleInputChange } =
    useBlogForm(onUpdateBlogs);
  const { addToast } = useToast();

  if (!isVisible) {
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
