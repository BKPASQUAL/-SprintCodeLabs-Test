import React, { useRef } from "react";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/common/Navbar";
import AboutUs from "../components/home/AboutUs";
import Arrow from "../components/home/Arrow";
import Features from "../components/home/Features";

function Home() {
  const heroSectionRef = useRef(null);
  const aboutUsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#1B0B40] via-[#281B57] to-[#3A257C] text-white">
      <Navbar
        onScrollToHome={() => scrollToSection(heroSectionRef)}
        onScrollToAboutUs={() => scrollToSection(aboutUsRef)}
      />
      <div ref={heroSectionRef}>
        <HeroSection />
      </div>
      <Arrow scrollTo={() => scrollToSection(aboutUsRef)} />
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <Features />
    </div>
  );
}

export default Home;
