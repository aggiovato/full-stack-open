// CUSTOM COMPONENTS
import CButton from "@customs/CButton";

// STYLES
import { ToolBarContainer, SearchInput } from "@styles/ToolBar.styles";

// I18N
import { translate } from "@i18n";
import { useIntl } from "react-intl";

const ToolBar = ({ onAddBlog, onSearchChange }) => {
  const { formatMessage } = useIntl();
  const translated = formatMessage({ id: "toolbar.search" });
  return (
    <ToolBarContainer>
      <CButton onClick={onAddBlog}>{translate("toolbar.add")}</CButton>
      <SearchInput
        type="text"
        placeholder={translated}
        onChange={(e) => onSearchChange(e)}
      />
    </ToolBarContainer>
  );
};

export default ToolBar;
