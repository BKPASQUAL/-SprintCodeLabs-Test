import React from "react";
import img from "../../assets/Images/xmm-img1.png";
import PrimaryButton from "../buttons/PrimaryButton";
import tics from "../../assets/Images/xmm-tick.png";

function AboutUs() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[45%] k h-full">
        <img
          src={img}
          alt="about img"
          className="w-[500px] h-[500px] mt-20 ml-60"
        />
      </div>
      <div className="w-[55%] h-full flex flex-col mt-20">
        <div className="text-xs border-2 border-white rounded-full p-1 px-2 w-20 text-center">
          ABOUT US
        </div>
        <div className="text-5xl font-medium mt-2">
          Best Ever Token Designed <br /> For Remarkable Success
        </div>
        <div className="text-base mt-4">
          The main advantage of supporting $XMM is the project is focused <br />
          on creating Volume and Market Making through. XMM empowers
          <br />
          businesses to creative dynamic content target specific.
        </div>
        <div className="mt-4 flex space-x-12">
          <div className="flex items-center ">
            <img src={tics} alt="tics" className="mr-4" />
            Market
          </div>
          <div className="flex items-center ">
            <img src={tics} alt="tics" className="mr-4" />
            Volume
          </div>
          <div className="flex items-center ">
            <img src={tics} alt="tics" className="mr-4" />
            Trend
          </div>
        </div>
        <div className="flex mt-8">
          <PrimaryButton buttonName="Read Whitepaper" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
