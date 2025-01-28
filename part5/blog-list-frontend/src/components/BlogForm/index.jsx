// CUSTOM COMPONENTS
import { CButton, CInputsMapper } from "@customs";
// CUSTOM HOOKS
import { useBlogForm, useToast } from "@hooks";
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

  const translated = {
    success: formatMessage({ id: "blogform.message.success" }),
    error: formatMessage({ id: "blogform.message.error" }),
    title: formatMessage({ id: "blogform.message.invalid-title" }),
    author: formatMessage({ id: "blogform.message.invalid-author" }),
    url: formatMessage({ id: "blogform.message.invalid-url" }),
  };

  // function to translate error messages
  const translateErrorMessages = (err_message, translation_obj) => {
    const err_split = err_message
      .split(",")
      .map((err) => err.toLowerCase().trim());

    return err_split.map((err) => {
      const foundKey = Object.keys(translation_obj).find((key) =>
        err.includes(key)
      );
      return foundKey ? translation_obj[foundKey] : err;
    });
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
      const err_messages = translateErrorMessages(
        error.response?.data?.error || "",
        translated
      );

      if (err_messages.length > 1) {
        addToast(err_messages.join(", "), "error");
      } else {
        addToast(err_messages[0] || translated.error, "error");
      }
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
