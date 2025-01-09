import React from "react";

function PrimaryButton({buttonName}) {
  return (
    <div className="flex justify-center items-center">
      <button className="bg-gradient-to-r from-primaryBtm via-middleBtm to-primaryBtm text-white font-medium px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300">
        {buttonName}
      </button>
    </div>
  );
}

export default PrimaryButton;
