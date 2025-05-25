import React from "react";
import RotatingArrowIcon from "./RotatingArrowIcon";

const CustomButton: React.FC = () => {
  return (
    <div className="flex items-center justify-center group w-fit">
      <button
        className="flex items-center p-2 px-5 cursor-pointer text-green-500 hover:text-green-200
      border border-green-500 hover:border-green-200 transition-all
        duration-200 ease-in-out rounded-full w-fit"
        onClick={() => {}}
      >
        <div className="">Get a Custom Quote Today</div>
      </button>
      <RotatingArrowIcon direction="right" size={50} onClick={() => {}} />
    </div>
  );
};

export default CustomButton;
