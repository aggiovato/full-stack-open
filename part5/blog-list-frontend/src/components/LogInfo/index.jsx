// CUSTOM COMPONENTS
import { CTooltip, CLanguageDropdown } from "@customs";
// ANIMATIONS
import { HoverGlow } from "@animations/HoverGlow";
// ICONS
import { Logout, Logo } from "@icons";
// STYLES
import {
  Header,
  Title,
  UserInfo,
  UserName,
  LogoutButton,
} from "@styles/LogInfo.styles";
// I18N
import { translate } from "@i18n";
// PROP TYPES
import PropTypes from "prop-types";

/*********************************************************************************** */

const LogInfo = ({ user, onLanguageChange, onLogout }) => {
  return (
    <Header>
      <Title>
        <Logo />
        {translate("info.title")}
      </Title>
      <UserInfo>
        <UserName>
          <HoverGlow blur={1} rotate={-1}>
            {user.name}
          </HoverGlow>
          <div>
            <span>{translate("info.user")}</span>
          </div>
        </UserName>
        <CLanguageDropdown onLanguageChange={onLanguageChange} />
        <CTooltip tt_position="bottom" tooltipText={translate("info.logout")}>
          <LogoutButton onClick={onLogout}>
            <Logout />
          </LogoutButton>
        </CTooltip>
      </UserInfo>
    </Header>
  );
};

export default LogInfo;

// PropTypes

LogInfo.propTypes = {
  user: PropTypes.object.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};
