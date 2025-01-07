import { CButton, CInputsMapper } from "./customs";

import { useBlogForm } from "@hooks/useBlogForm";
import { useToast } from "@hooks/useToast";

import {
  BlogFormContainer,
  FormHeading,
  StyledForm,
  ButtonContainer,
} from "@styles/BlogForm.styles";

const BlogForm = ({ handleUpdateBlogs, handleVisibility }) => {
  const { blogData, handleBlogCreation, handleInputChange } =
    useBlogForm(handleUpdateBlogs);
  const { addToast } = useToast();

  return (
    <BlogFormContainer>
      <FormHeading>Create a new Blog</FormHeading>
      <StyledForm onSubmit={(e) => handleBlogCreation(e, addToast)}>
        <CInputsMapper
          mapper={blogData}
          type="label"
          eventHandlers={handleInputChange}
        />
        <ButtonContainer>
          <CButton type="button" btnType="danger" onClick={handleVisibility}>
            Cancel
          </CButton>
          <CButton type="submit" btnType="primary">
            Create
          </CButton>
        </ButtonContainer>
      </StyledForm>
    </BlogFormContainer>
  );
};

export default BlogForm;
