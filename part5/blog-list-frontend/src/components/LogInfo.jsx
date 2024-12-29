const LogInfo = ({ user, styles }) => {
  const handleLogout = () => {
    window.localStorage.removeItem("loggedUser");
    window.location.reload();
  };
  return (
    <>
      <h2>Blogs</h2>
      <h3>{user.name} logged in</h3>
      <button onClick={handleLogout} style={styles.button}>
        Logout
      </button>
    </>
  );
};

export default LogInfo;
