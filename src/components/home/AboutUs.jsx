import React from "react";
import img from "../../assets/Images/xmm-img1.png";
import PrimaryButton from "../buttons/PrimaryButton";
import tics from "../../assets/Images/xmm-tick.png";

function AboutUs() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center px-6 md:px-0">
      <div className="w-full md:w-[45%] flex justify-center md:justify-end h-full">
        <img
          src={img}
          alt="about img"
          className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] mt-10 md:mt-20 md:ml-20"
        />
      </div>
      <div className="w-full md:w-[55%] h-full flex flex-col mt-10 md:mt-20 text-center md:text-left">
        <div className="text-xs border-2 border-white rounded-full p-1 px-2 w-20 mx-auto md:mx-0 text-center">
          ABOUT US
        </div>
        <div className="text-2xl md:text-5xl font-medium mt-4">
          Best Ever Token Designed <br className="hidden md:block" /> For Remarkable Success
        </div>
        <div className="text-sm md:text-base mt-4">
          The main advantage of supporting $XMM is the project is focused
          <br className="hidden md:block" />
          on creating Volume and Market Making through. XMM empowers
          <br className="hidden md:block" />
          businesses to creative dynamic content target specific.
        </div>
        <div className="mt-4 flex flex-wrap justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-12">
          <div className="flex items-center mx-4 md:mx-0">
            <img src={tics} alt="tics" className="mr-4 w-4 h-4 md:w-6 md:h-6" />
            Market
          </div>
          <div className="flex items-center mx-4 md:mx-0">
            <img src={tics} alt="tics" className="mr-4 w-4 h-4 md:w-6 md:h-6" />
            Volume
          </div>
          <div className="flex items-center mx-4 md:mx-0">
            <img src={tics} alt="tics" className="mr-4 w-4 h-4 md:w-6 md:h-6" />
            Trend
          </div>
        </div>
        <div className="flex mt-6 justify-center md:justify-start">
          <PrimaryButton buttonName="Read Whitepaper" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
