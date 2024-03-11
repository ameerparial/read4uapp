import { Outlet } from "react-router";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";
import SideNavbar from "./SideNavBar";
import { useState } from "react";

const DashboardComponent = () => {
  const [isTrue, setIsTrue] = useState(false);
  const value = useParams();
  console.log(value);
  return (
    <>
      <TopBar
        username="John Doe"
        profileImageUrl="https://source.unsplash.com/random/150x150"
        setHamStatus={setIsTrue}
      />
      <div className="container-fluid h-100">
        <div className="row">
          <div className={`${isTrue ? "col-md-3 col-lg-2" : ""}`}>
            {isTrue && <SideNavbar />}
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
