import React from "react";
import xmmIcon1 from "../../assets/Images/xmm-icon1.png";
import xmmIcon2 from "../../assets/Images/xmm-icon2.png";
import xmmIcon3 from "../../assets/Images/xmm-icon3.png";

function Features() {
  return (
    <div className="py-20 px-10 md:px-20 lg:px-80">
      <div className="text-xs border-2 border-white rounded-full p-1 px-2 w-20  mb-4">
        FEATURES
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="h-auto lg:h-[420px] flex flex-col justify-between w-full lg:w-[28%] py-4">
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Features of X <br /> MARKET MAKER
          </div>
          <div className="text-sm md:text-base">
            X Market Maker offers a <br /> comprehensive set of features <br />
            tailored for market participants. <br />
            Its core functionalities include <br /> real-time pricing and
            liquidity.
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-10 lg:mt-0">
          <div className="h-auto lg:h-[420px] w-full lg:w-80 border-r-0 lg:border-r-2 border-b-2 lg:border-b-2 lg:border-l-2 border-[#382B63] p-4 flex flex-col justify-between">
            <div>
              <span className="text-lg font-bold">01</span> <br />
              Ecosystem-Redefined
            </div>
            <div className="flex flex-col ">
              <img src={xmmIcon1} alt="xmmIcon1" className="h-16 w-16 md:h-20 md:w-20 mb-4" />
              <p className="text-sm md:text-base ">
                We aim to increase the value of <br /> our currency to benefit
                our <br />
                community. Market Making will <br /> be key focus. We aim to
                increase <br />
                the value of our currency to <br /> benefit our community.
              </p>
            </div>
          </div>
          <div className="h-auto lg:h-[420px] w-full lg:w-80 border-r-0 lg:border-r-2 border-b-2 lg:border-b-2 lg:border-t-2 border-[#382B63] p-4 flex flex-col justify-between">
            <div>
              <span className="text-lg font-bold">02</span> <br />
              Biggest Community
            </div>
            <div className="flex flex-col ">
              <img src={xmmIcon2} alt="xmmIcon2" className="h-16 w-16 md:h-20 md:w-20 mb-4" />
              <p className="text-sm md:text-base ">
                XMM is the First ever Crypto with <br />
                the market-making objective <br />
                that's being worked upon at <br />
                such an amazing level! We will <br />
                focus on community building a <br />
                lot for that.
              </p>
            </div>
          </div>
          <div className="h-auto lg:h-[420px] w-full lg:w-80 border-r-0 lg:border-r-2 border-b-2 lg:border-b-2 border-[#382B63] p-4 flex flex-col justify-between">
            <div>
              <span className="text-lg font-bold">03</span> <br />
              Ecosystem-Redefined
            </div>
            <div className="flex flex-col ">
              <img src={xmmIcon3} alt="xmmIcon3" className="h-16 w-16 md:h-20 md:w-20 mb-4" />
              <p className="text-sm md:text-base pb-6">
                Our powerful token will protect <br />
                our holders from the turbulence <br />
                of the crypto market and help <br />
                them hold despite the <br />
                uncertainty of the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
