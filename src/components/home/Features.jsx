import React from "react";
import xmmIcon1 from "../../assets/Images/xmm-icon1.png";
import xmmIcon2 from "../../assets/Images/xmm-icon2.png";
import xmmIcon3 from "../../assets/Images/xmm-icon3.png";

function Features() {
  return (
    <div className="py-20 px-80">
      <div className="text-xs border-2 border-neutral-950 rounded-full p-1 px-2 w-20 text-center mb-4">
        FEATURES
      </div>
      <div className="flex">
        <div className="h-96 flex flex-col justify-between w-[28%] py-4">
          <div className="text-4xl font-semibold">
            Features of X <br /> MARKET MAKER
          </div>
          <div>
            X Market Maker offers a <br /> comprehensive set of features <br />
            tailored for market participants <br />
            its core functionalities include <br /> real-time pricing,
            liquidity.
          </div>
        </div>
        <div className="flex ">
          <div className="h-96 w-72  border-r-2 border-b-2 border-l-2 border-[#382B63] p-4 flex flex-col justify-between">
            <div className="">
              03 <br />
              Ecosystem-Redefined
            </div>
            <div>
              <img src={xmmIcon1} alt="xmmIcon1" className="h-20 w-20" />

              <p>
                We aim to increase the value of <br /> our currency to benefit
                our <br />
                community. Market Making will <br /> be key focus. We aim to
                increase <br />
                the value of our currency to <br /> benefit our community.
              </p>
            </div>
          </div>
          <div className="h-96 w-72 border-r-2 border-b-2 border-t-2 border-[#382B63] p-4 flex flex-col justify-between">
            <div className="">
              02 <br />
              Biggest Community
            </div>
            <div>
              <img src={xmmIcon2} alt="xmmIcon2" className="h-20 w-20" />
              <p>
                XMM is the First ever Crypto with <br />
                the market making objective
                <br />
                that's being worked upon at
                <br />
                such amazing level! We will
                <br />
                focus on community building a<br />
                lot for that.
              </p>
            </div>
          </div>
          <div className="h-96 w-72  border-r-2 border-b-2  border-[#382B63] p-4 flex flex-col justify-between pb-9">
            <div className="">
              02 <br />
              Biggest Community
            </div>
            <div>
              <img src={xmmIcon3} alt="xmmIcon3" className="h-20 w-20" />
              <p className="">
                Our powerful token will protect <br />
                our holders from the turbulence <br />
                of the crypto market and help <br />
                them hold despite the <br />
                uncertainty of the market ..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
