const LogoutComponent = () => {
  const handleLogout = () => {
    // Perform logout actions
    console.log("Logging out...");
  };

  return (
    <div className="container">
      <h1>Are you sure you want to logout?</h1>
      <button
        type="button"
        className="mt-2 btn btn-primary"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutComponent;
