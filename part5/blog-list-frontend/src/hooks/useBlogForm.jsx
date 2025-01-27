// EXTERNAL MODULES
import { useState } from "react";
// HOOKS
import useErrorTranslator from "@hooks/useErrorTranslator";
import { useIntl } from "react-intl";
// SERVICES
import blogService from "@services/blogs";
// STORES
import blogStore from "@stores/blog";

/*********************************************************************************** */

export const useBlogForm = (onUpdateBlogs) => {
  const [blogData, setBlogData] = useState(blogStore.emptyBlog);
  const { formatMessage } = useIntl();
  const { translateError } = useErrorTranslator();

  const translated = {
    success: formatMessage({ id: "blogform.message.success" }),
    error: formatMessage({ id: "blogform.message.error" }),
  };

  const handleBlogCreation = async (e, addToast) => {
    e.preventDefault();

    try {
      const newBlog = await blogService.create(blogData);
      onUpdateBlogs(newBlog);

      addToast(translated.success, "success");
    } catch (error) {
      addToast(translateError(error.code) || translated.error, "error");
    } finally {
      clearForm();
    }
  };

  const handleInputChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const clearForm = () => setBlogData(blogStore.emptyBlog);

  return { blogData, handleBlogCreation, handleInputChange };
};
