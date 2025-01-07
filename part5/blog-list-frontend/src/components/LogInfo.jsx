import { CTooltip } from "@components/customs";
import LogoutIcon from "@icons/Logout.icon";

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
          {user.name}
          <div>
            <span>logged in</span>
          </div>
        </UserName>
        <CTooltip tooltipText="Logout">
          <LogoutButton onClick={handleLogout}>
            <LogoutIcon />
          </LogoutButton>
        </CTooltip>
      </UserInfo>
    </Header>
  );
};

export default LogInfo;
