// CUSTOM COMPONENTS
import CButton from "@customs/CButton";

// STYLES
import { ToolBarContainer, SearchInput } from "@styles/ToolBar.styles";

const ToolBar = ({ onAddBlog, onSearchChange }) => {
  return (
    <ToolBarContainer>
      <CButton onClick={onAddBlog}>+ New Blog</CButton>
      <SearchInput
        type="text"
        placeholder="Search blogs..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </ToolBarContainer>
  );
};

export default ToolBar;
