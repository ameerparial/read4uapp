import { useNavigate } from "react-router-dom";
import axios from "axios";
const LogoutComponent = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    // Perform logout actions

    try {
      console.log("Logging out...");
      const response = await axios.get("http://localhost:8080/logout");
      console.log(response);
      if (response.data.logout) {
        navigate("/");
      } else {
        console.log("Error occured");
      }
    } catch (err) {
      console.log(err);
    }
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
