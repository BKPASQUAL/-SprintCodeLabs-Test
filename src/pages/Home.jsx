import React from "react";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/common/Navbar";
import AboutUs from "../components/home/AboutUs";
import Arrow from "../components/home/Arrow";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Arrow />
      <AboutUs />
    </div>
  );
}

export default Home;
