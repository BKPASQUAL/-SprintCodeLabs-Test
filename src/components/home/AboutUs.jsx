import React from "react";
import img from "../../assets/Images/xmm-img1.png";
import PrimaryButton from "../buttons/PrimaryButton";

function AboutUs() {
  return (
    <div className="w-full bg-gradient-to-br from-[#1B0B40] via-[#281B57] to-[#3A257C] text-white flex justify-center items-center">
      <div className="w-[45%] k h-full">
        <img
          src={img}
          alt="about img"
          className="w-[500px] h-[500px] mt-20 ml-60"
        />
      </div>
      <div className="w-[55%] h-full  flex flex-col">
        <div className="text-xs border-2 border-neutral-950 rounded-full p-1 px-2 w-20">
          ABOUT US
        </div>
        <div className="text-5xl font-medium mt-2">
          Best Ever Token Designed <br /> For Remarkable Seccess
        </div>
        <div className="text-base mt-4">
          The main advantage of supporting $XMM is the project is focused <br />
          on creating Volume and Market Making through.XMM empowers<br />
          businesses to creative dynamic content target specific
        </div>
        <div className="mt-4  flex space-x-16">
          <div>Market</div>
          <div>Volume</div>
          <div>Trend</div>
        </div>
        <div className="flex mt-4">
          <PrimaryButton buttonName="Read Whitepaper"/>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
