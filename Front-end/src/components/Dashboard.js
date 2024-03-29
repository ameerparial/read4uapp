import { Outlet } from "react-router";
import { useParams, useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import SideNavbar from "./SideNavBar";
import { useEffect, useState } from "react";
import axios from "axios";

const DashboardComponent = () => {
  const [username, setUsername] = useState("username");
  const [isTrue, setIsTrue] = useState(false);
  const navigate = useNavigate();
  const { route } = useParams();
  console.log(`route is: ${route}`);

  useEffect(() => {
    try {
      async function getUser() {
        axios.defaults.withCredentials = true;
        const response = await axios.get("http://localhost:5500/dashboard");
        console.log("Data....");
        console.log(response.data);
        if (response.data) {
          console.log(response.data);
          setUsername(response.data?.username);
        } else {
          navigate("/login");
        }
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
        profileImageUrl="https://source.unsplash.com/random/150x150"
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
