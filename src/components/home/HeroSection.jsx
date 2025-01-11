import React from "react";
import heroImg from "../../assets/Images/xmm-hero.png";
import PrimaryButton from "../buttons/PrimaryButton";
import user1 from "../../assets/Images/user1.jpg";
import user2 from "../../assets/Images/user2.jpg";
import user3 from "../../assets/Images/user3.jpg";

function HeroSection() {
  return (
    <div className="h-screen w-full bg-bgcolour pt-24 md:pt-48 px-6 md:px-[17%]">
      <div className="text-[50px] md:text-[145px] leading-none text-white font-extrabold flex flex-col w-full m-0 md:space-y-[0px] lg:space-y-[-10px] p-0">
        <div className="font-helveticaNeue">MARKETING MAKING</div>
        <h1 className="font-helveticaNeue">WITH XMM.</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between relative">
        <div>
          <div className="text-[#e1d6ff] text-lg md:text-xl">
            XMM empowers businesses to create dynamic content, target
            <br />
            specific demographics, and optimize their digital presence
          </div>
          <div className="flex mt-8">
            <PrimaryButton buttonName="Join Telegram " />
            <div className="flex ml-6 relative w-32">
              <img
                src={user1}
                alt="user1"
                className="h-10 w-10 rounded-full absolute"
                style={{ left: "0", zIndex: "10" }}
              />
              <img
                src={user2}
                alt="user2"
                className="h-10 w-10 rounded-full absolute"
                style={{ left: "30px", zIndex: "20" }}
              />
              <img
                src={user3}
                alt="user3"
                className="h-10 w-10 rounded-full absolute"
                style={{ left: "55px", zIndex: "30" }}
              />
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-medium text-white mt-8">
            OUR HAPPY CUSTOMERS
          </div>
          <div className="text-base md:text-lg text-white mt-4">
            Our happy customers are at the heart <br /> of everything we do
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src={heroImg}
            alt="heroImg"
            className="w-[200px] md:w-[500px] h-[200px] md:h-[500px] object-cover absolute top-[300px] hidden lg:block right-[-0px] md: lg:top-[-140px] lg:right-[-10px]  "
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
