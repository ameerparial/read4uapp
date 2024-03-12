import { useParams } from "react-router-dom";
import DashboardDataComponent from "./Navbar-data-components/Dashboard-data";
import VoiceArtistsComponent from "./Navbar-data-components/Voice-artists-data";
import LogoutComponent from "./Navbar-data-components/Logout-page";
import ReadByComponent from "./Navbar-data-components/ReadBy-page";

const Container = () => {
  const { route } = useParams();

  switch (route) {
    case "dashboard":
      return <DashboardDataComponent />;
    case "read4u":
      return <h1>Input here to read the pdf.</h1>;
    case "voice-artists":
      return <VoiceArtistsComponent />;
    case "read-by-u":
      return <ReadByComponent />;
    case "word-list":
      return <h1>Difficult word list</h1>;
    case "profile-setting":
      return <h1>Account Setting</h1>;
    case "logout":
      return <LogoutComponent />;
    default:
      return <h1>Page not found!</h1>;
  }
};

export default Container;
