import React from "react";
import heroImg from "../../assets/Images/xmm-hero.png";
import PrimaryButton from "../buttons/PrimaryButton";

function HeroSection() {
  return (
    <div className="h-screen w-full bg-bgcolour py-10 px-80">
      <div className="text-[140px] text-white font-extrabold flex flex-col w-full m-0 space-y-0 p-0">
        <div className="m-0 p-0 mb-[-70px] font-helveticaNeue text-nowrap">
          MARKETING MAKING
        </div>
        <h1 className="font-helveticaNeue text-nowrap">WITH XMM.</h1>
      </div>
      <div className="flex flex-row justify-between relative">
        <div>
          <div className="text-white text-xl">
            XMM empowers businesses to create dynamic content,target
            <br />
            specific demographics,and optimize their digital presence
          </div>
          <div className="flex mt-8">
            <PrimaryButton buttonName="Join Telegram" />
          </div>
          <div className="text-3xl font-medium text-white mt-8">OUR HAPPY CUSTOMERS</div>
          <div className="text-lg text-white mt-4">Our happy customers are at the heart <br/> of everythings we do</div>
        </div>
        <div className="">
          <img
            src={heroImg}
            alt="heroImg"
            className="w-[500px] h-[500px] object-cover absolute top-[-140px] right-[50px]"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
