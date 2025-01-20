// CUSTOM COMPONENTS
import { CTooltip } from "@components/customs";
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

const LogInfo = ({ user }) => {
  const handleLogout = () => {
    window.localStorage.removeItem("loggedUser");
    window.location.reload();
  };

  return (
    <Header>
      <Title>Blogs</Title>
      <UserInfo>
        <UserName>
          <HoverGlow secondColor="#358797" blur={3}>
            {user.name}
          </HoverGlow>
          <div>
            <span>logged in</span>
          </div>
        </UserName>
        <CTooltip tt_position="bottom" tooltipText="Logout">
          <LogoutButton onClick={handleLogout}>
            <LogoutIcon />
          </LogoutButton>
        </CTooltip>
      </UserInfo>
    </Header>
  );
};

export default LogInfo;
