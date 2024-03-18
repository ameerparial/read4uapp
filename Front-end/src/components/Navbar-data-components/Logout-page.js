import { useNavigate } from "react-router-dom";

const LogoutComponent = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform logout actions
    console.log("Logging out...");
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Are you sure you want to logout?</h1>
      <button type="button" className="mt-2 btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutComponent;
