import React from "react";
import "./GridWrapper.css";

const GridWrapper = ({ children }) => {
  return (
    <div className="wrapper-grid max-w bg-primary text-primary">
      <div></div>
      <div>{children}</div>
      <div></div>
    </div>
  );
};

export default GridWrapper;
