// CUSTOM COMPONENTS
import { CButton, CInputsMapper } from "@customs";
// CUSTOM HOOKS
import { useBlogForm, useToast, useErrorTranslator } from "@hooks";
// STYLES
import {
  BlogFormContainer,
  FormHeading,
  StyledForm,
  ButtonContainer,
} from "@styles/BlogForm.styles";
// SERVICES
import blogService from "@services/blogs";
// I18N
import { translate } from "@i18n";
import { useIntl } from "react-intl";

/*********************************************************************************** */

const BlogForm = ({ isVisible, onAddBlog, handleVisibility }) => {
  // states for blog form data and functions
  const { blogData, handleInputChange, clearForm } = useBlogForm();
  const { addToast } = useToast();

  // translations
  const { formatMessage } = useIntl();
  const { translateError } = useErrorTranslator();

  const translated = {
    success: formatMessage({ id: "blogform.message.success" }),
    error: formatMessage({ id: "blogform.message.error" }),
  };

  // function to handle blog creation
  const handleBlogCreation = async (e, addToast) => {
    e.preventDefault();
    try {
      const newBlog = await blogService.create(blogData);
      onAddBlog(newBlog);
      addToast(translated.success, "success");
      handleVisibility();
      clearForm();
    } catch (error) {
      addToast(translateError(error.code) || translated.error, "error");
    }
  };

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
