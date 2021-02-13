import React from "react";

const PrimaryButton = ({ children, ...props }) => {
  return (
    <div className=" flex flex-col w-full pt-4 ">
      <button
        {...props}
        className="py-1 px-6  bg-accent text-white rounded-md font-semibold text-md leading-6 w-full"
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
