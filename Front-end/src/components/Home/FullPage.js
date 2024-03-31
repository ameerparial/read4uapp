import { useState } from "react";
import Demo from "./Demo";
import HomePage from "./HomePage";
import Service from "./Service";
import NavBar from "./TopNavBar";

const FullHomePage = () => {
  const [css, setCss] = useState("home-top-nav-before");

  window.onscroll = () => {
    const y = window.scrollY;
    if (y > 370) {
      setCss("fixed-top home-top-nav-after");
    } else {
      setCss("home-top-nav-before");
    }
  };
  return (
    <>
      <NavBar css={css} />
      <HomePage />
      <Service />
      <Demo />
    </>
  );
};

export default FullHomePage;
