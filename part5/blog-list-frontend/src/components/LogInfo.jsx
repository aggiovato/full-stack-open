const LogInfo = ({ user, style }) => {
  const handleLogout = () => {
    window.localStorage.removeItem("loggedUser");
    window.location.reload();
  };
  return (
    <>
      <h2>Blogs</h2>
      <h3>{user.name} logged in</h3>
      <button onClick={handleLogout} style={style.button}>
        Logout
      </button>
    </>
  );
};

export default LogInfo;
