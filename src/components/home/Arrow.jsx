import React from "react";
import arrow from "../../assets/Images/arrow.png";

function Arrow({ scrollTo }) {
  return (
    <div
      className="relative flex justify-center items-center w-full z-30"
      onClick={scrollTo} 
      style={{ cursor: "pointer" }} 
    >
      <div
        className="absolute w-44 h-44 flex justify-center items-center rounded-full"
        style={{
          background: "linear-gradient(to bottom, #160a33 50%, transparent 50%)",
        }}
      >
        <div className="w-32 h-32 bg-bgcolour rounded-full flex justify-center items-center">
          <div>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arrow;
