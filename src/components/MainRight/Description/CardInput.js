import React from "react";

const CardInput = ({ title, children, ...props }) => {
  return (
    <div {...props}>
      <div className="font-medium">{title}</div>
      <div className=" text-secondary bg-primary py-2 px-2 mt-1 rounded-md overflow-y-scroll max-h-20 shadow-sm font-light">
        {children}
      </div>
    </div>
  );
};

export default CardInput;
