import React from "react";
import logo from "../../assets/Images/xmm-logo.png";
import PrimaryButton from "../buttons/PrimaryButton";

function Navbar() {
  return (
    <div className="flex flex-row justify-between w-full items-center px-32 h-20 bg-bgcolour border-b-2 border-[#784FFF]  z-50">
      <div className="w-1/4 border-r-2 border-[#784FFF] h-20  flex items-center justify-end pr-40">
        <img
          src={logo}
          alt="logo"
          className="w-8 h-8 md:w-12 md:h-12  object-cover "
        />
      </div>
      <div className="flex space-x-8 w-2/4  justify-center text-white" >
        <div>Home</div>
        <div>About Us</div>
        <div>Tokenomics</div>
        <div>Roadmap</div>
        <div>FAQ</div>
      </div>
      <div className="w-1/4 border-l-2 border-[#784FFF] h-20  flex items-center justify-start pl-20">
        <PrimaryButton buttonName="Buy Token"/>
      </div>
    </div>
  );
}

export default Navbar;
