import {
  Header,
  Title,
  UserInfo,
  UserName,
  LogoutButton,
} from "../styles/Loginfo.styles";

const LogInfo = ({ user }) => {
  const handleLogout = () => {
    window.localStorage.removeItem("loggedUser");
    window.location.reload();
  };

  return (
    <Header>
      <Title>Blogs</Title>
      <UserInfo>
        <UserName>{user.name} logged in</UserName>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </UserInfo>
    </Header>
  );
};

export default LogInfo;
