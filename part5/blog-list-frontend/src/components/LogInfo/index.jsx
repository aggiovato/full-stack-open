// CUSTOM COMPONENTS
import { CTooltip, CLanguageDropdown } from "@components/customs";
// ANIMATIONS
import { HoverGlow } from "@animations/HoverGlow";
// ICONS
import LogoutIcon from "@icons/Logout.icon";
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

/*********************************************************************************** */

const LogInfo = ({ user, onLanguageChange, onLogout }) => {
  return (
    <Header>
      <Title>{translate("info.title")}</Title>
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
            <LogoutIcon />
          </LogoutButton>
        </CTooltip>
      </UserInfo>
    </Header>
  );
};

export default LogInfo;
