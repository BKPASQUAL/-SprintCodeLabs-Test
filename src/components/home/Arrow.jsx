import React from "react";
import arrow from "../../assets/Images/arrow.png";

function Arrow() {
  return (
    <div className="relative flex justify-center items-center w-full z-40">
      <div
        className="absolute w-44 h-44 flex justify-center items-center rounded-full"
        style={{
          background: "linear-gradient(to bottom, #2A1454 50%, transparent 50%)", 
        }}
      >
        <div className="w-32 h-32 bg-bgcolour   rounded-full flex justify-center items-center">
          <div className="">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arrow;
