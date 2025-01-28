// VIEWS
import BlogsView from "@views/BlogsView";
// COMPONENTS
import { LoginForm } from "@components";
// CUSTOM COMPONENTS
import { useBlog, useUser } from "@hooks";
// STYLES
import GlobalStyle from "@styles/Global.styles";
// I18N
import { I18nProvider } from "@i18n";

/*********************************************************************************** */

const App = () => {
  const { user, login, logout, localeLanguage, changeLanguage } = useUser();
  const { blogs, addBlog, updateBlogs, removeBlog, filterBlogs, isLoading } =
    useBlog(user);

  const blogsViewProps = {
    user,
    blogs,
    isLoading,
    addBlog,
    updateBlogs,
    removeBlog,
    filterBlogs,
    logout,
    changeLanguage,
  };

  return (
    <I18nProvider locale={localeLanguage || "en-UK"}>
      <GlobalStyle />
      {user ? <BlogsView {...blogsViewProps} /> : <LoginForm login={login} />}
    </I18nProvider>
  );
};

export default App;
