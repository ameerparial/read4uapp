import { useParams } from "react-router-dom";
import DashboardDataComponent from "./Navbar-data-components/Dashboard-data";

const Container = () => {
  const { route } = useParams();

  switch (route) {
    case "dashboard":
      return <DashboardDataComponent />;
    case "read4u":
      return <h1>Input here to read the pdf.</h1>;
    case "voice-artists":
      return <h1>Artists</h1>;
    case "read-by-u":
      return <h1>PDFs ready by you.</h1>;
    case "word-list":
      return <h1>Difficult word list</h1>;
    case "profile-setting":
      return <h1>Account Setting</h1>;
    case "logout":
      return <h1>Logout</h1>;
    default:
      return <h1>Page not found!</h1>;
  }
};

export default Container;
