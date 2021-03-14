import React from "react";
import "./CardInput.css";

const CardInput = ({ title, children, ...props }) => {
  return (
    <div {...props}>
      <div className="font-medium">{title}</div>
      <div
        className="bg-secondary-shade py-2 px-2 mt-1 rounded-md overflow-y-scroll max-h-20 shadow-sm font-light"
        dangerouslySetInnerHTML={{ __html: children }}
      ></div>
    </div>
  );
};

export default CardInput;
