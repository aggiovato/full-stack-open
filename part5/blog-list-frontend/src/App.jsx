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
  const {
    blogs,
    updateBlogs,
    removeBlog,
    filteredBlogs,
    filterBlogs,
    handleLike,
    isLoading,
  } = useBlog(user);

  const blogsViewProps = {
    user,
    blogs,
    filteredBlogs,
    isLoading,
    updateBlogs,
    removeBlog,
    filterBlogs,
    handleLike,
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
