// CUSTOM COMPONENTS
import { CButton } from "@customs";
// STYLES
import { ToolBarContainer, SearchInput } from "@styles/ToolBar.styles";
// I18N
import { translate } from "@i18n";
import { useIntl } from "react-intl";
// PROP TYPES
import PropTypes from "prop-types";

/*********************************************************************************** */

const ToolBar = ({ onAddBlog, onFilterBlogs }) => {
  // translations
  const { formatMessage } = useIntl();
  const translated = formatMessage({ id: "toolbar.search" });

  return (
    <ToolBarContainer>
      <CButton onClick={onAddBlog}>{translate("toolbar.add")}</CButton>
      <SearchInput
        type="text"
        placeholder={translated}
        onChange={(e) => onFilterBlogs(e.target.value)}
      />
    </ToolBarContainer>
  );
};

export default ToolBar;

// PropTypes

ToolBar.propTypes = {
  onAddBlog: PropTypes.func.isRequired,
  onFilterBlogs: PropTypes.func.isRequired,
};
