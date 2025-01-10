import React from "react";
import heroImg from "../../assets/Images/xmm-hero.png";
import PrimaryButton from "../buttons/PrimaryButton";
import user1 from "../../assets/Images/user1.jpg";
import user2 from "../../assets/Images/user2.jpg";
import user3 from "../../assets/Images/user3.jpg";

function HeroSection() {
  return (
    <div className="h-[92vh] w-full bg-bgcolour pt-10  px-[17%]">
      <div className="text-[145px] text-white font-extrabold flex flex-col w-full m-0 space-y-0 p-0">
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
            <PrimaryButton buttonName="Join Telegram " />
            <div className="flex ml-6 relative w-32">
              <img
                src={user1}
                alt="user1"
                className="h-10 w-10 rounded-full border-2 border-white absolute"
                style={{ left: "0", zIndex: "10" }}
              />
              <img
                src={user2}
                alt="user2"
                className="h-10 w-10 rounded-full border-2 border-white absolute"
                style={{ left: "30px", zIndex: "20" }}
              />
              <img
                src={user3}
                alt="user3"
                className="h-10 w-10 rounded-full border-2 border-white absolute"
                style={{ left: "55px", zIndex: "30" }}
              />
            </div>
          </div>
          <div className="text-3xl font-medium text-white mt-8">
            OUR HAPPY CUSTOMERS
          </div>
          <div className="text-lg text-white mt-4">
            Our happy customers are at the heart <br /> of everythings we do
          </div>
        </div>
        <div className="">
          <img
            src={heroImg}
            alt="heroImg"
            className="w-[500px] h-[500px] object-cover absolute top-[-140px] right-[-10px]"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
