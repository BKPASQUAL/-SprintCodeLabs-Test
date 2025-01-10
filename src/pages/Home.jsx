import React from "react";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/common/Navbar";
import AboutUs from "../components/home/AboutUs";
import Arrow from "../components/home/Arrow";
import Features from "../components/home/Features";

function Home() {
  return (
    <div className="bg-gradient-to-br from-[#1B0B40] via-[#281B57] to-[#3A257C] text-white">
      <Navbar />
      <HeroSection />
      <Arrow />
      <AboutUs />
      <Features/>
    </div>
  );
}

export default Home;
