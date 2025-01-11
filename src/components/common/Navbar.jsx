import React, { useState } from "react";
import logo from "../../assets/Images/xmm-logo.png";
import PrimaryButton from "../buttons/PrimaryButton";

function Navbar({ onScrollToHome, onScrollToAboutUs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-20 bg-bgcolour fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-32 border-b-2 border-[#784FFF]">
      {/* Logo Section */}
      <div className="w-1/4 border-r-2 border-[#784FFF] h-20 flex items-center justify-end pr-10 md:pr-40">
        <img
          src={logo}
          alt="logo"
          className="w-8 h-8 md:w-12 md:h-12 object-cover"
        />
      </div>

      {/* Desktop & Tablet Menu */}
      <div className="hidden md:flex space-x-6 lg:space-x-8 w-2/4 justify-center text-white">
        <div className="cursor-pointer" onClick={onScrollToHome}>
          Home
        </div>
        <div className="cursor-pointer" onClick={onScrollToAboutUs}>
          About Us
        </div>
        <div className="cursor-pointer">Tokenomics</div>
        <div className="cursor-pointer">Roadmap</div>
        <div className="cursor-pointer">FAQ</div>
      </div>

      {/* Primary Button for Desktop & Tablet */}
      <div className="w-1/4 border-l-2 border-[#784FFF] hidden lg:block h-20 lg:flex items-center justify-start pl-10 md:pl-20">
        <PrimaryButton buttonName="Buy Token" />
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-bgcolour bg-opacity-90 backdrop-blur-md text-white flex flex-col items-center space-y-6 pt-20 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div
          className="cursor-pointer text-lg"
          onClick={() => {
            onScrollToHome();
            setIsMenuOpen(false); 
          }}
        >
          Home
        </div>
        <div
          className="cursor-pointer text-lg text-nowrap"
          onClick={() => {
            onScrollToAboutUs();
            setIsMenuOpen(false); 
          }}
        >
          About Us
        </div>
        <div className="cursor-pointer text-lg">Tokenomics</div>
        <div className="cursor-pointer text-lg">Roadmap</div>
        <div className="cursor-pointer text-lg">FAQ</div>

        <div className="mt-4">
          <PrimaryButton buttonName="Buy Token" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
