import { Outlet } from "react-router";
import { useParams, useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import SideNavbar from "./SideNavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import noProfileImage from "../images/profile-image.jpeg";

const DashboardComponent = () => {
  const [username, setUsername] = useState("username");
  const [image, setImage] = useState(null);
  const [isTrue, setIsTrue] = useState(false);
  const navigate = useNavigate();
  const { route } = useParams();
  console.log(`route is: ${route}`);

  useEffect(() => {
    try {
      async function getUser() {
        axios.defaults.withCredentials = true;
        await axios
          .get("http://localhost:8080/dashboard")
          .then((response) => {
            if (response.data) {
              console.log(response.data);
              setUsername(response.data?.username);
              setImage(response.data?.filename);
            } else {
              navigate("/login");
            }
          })
          .catch((err) => {
            console.log("Error occured while moving to dashboard...");
            console.log(err);
            navigate("/login");
          });
      }
      getUser();
    } catch (err) {
      console.log(err);
      // navigate("/login");
    }
  }, []);
  return (
    <>
      <TopBar
        username={username}
        profileImageUrl={
          image ? `http://localhost:8080/${image}` : noProfileImage
        }
        setHamStatus={setIsTrue}
      />
      <div className="container-fluid h-100">
        <div className="row">
          <div className={`${isTrue ? "col-md-3 col-lg-2" : ""}`}>
            {isTrue && <SideNavbar route={route} />}
          </div>
          <div
            className={`${isTrue ? "col-md-9 col-lg-10 dash-con" : "dash-con"}`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
