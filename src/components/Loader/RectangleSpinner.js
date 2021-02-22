import React from "react";
import "./RectangleSpinner.css";

const RectangleSpinner = ({ text, border }) => {
  return (
    <div className=" ">
      <div
        className={` rounded-full p-2 flex flex-col gap-y-2 justify-center items-center ${
          border && "border p-1 border-purple-300  shadow-lg"
        }`}
      >
        <div className="loader "></div>
        <div className="text-xs font-thin">{text}</div>
      </div>
    </div>
  );
};

export default RectangleSpinner;
