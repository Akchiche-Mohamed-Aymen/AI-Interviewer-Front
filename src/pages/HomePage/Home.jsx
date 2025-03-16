import React from "react";
import MainNavbar from "../../shared/MainNavbar";
import { Link } from "react-router-dom";
import Main from "./components/Main";
import Achievments from "./components/Achievments";
import Features from "./components/Features";
import Practice from "./components/Practice";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <div className="flex flex-col">
      <MainNavbar />
      <div className="flex gap-10 px-16 py-40 flex-col">
        <Main />
        <Achievments />
        <Features />
        <Practice/>
        <Testimonials/>
        {/* <Pricing /> */}
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;
