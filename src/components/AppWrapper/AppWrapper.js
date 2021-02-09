import React from "react";
import "./AppWrapper.css";

const AppWrapper = ({ children }) => {
  return (
    <div className="wrapper-grid max-w bg-primary text-primary">
      <div></div>
      <div>{children}</div>
      <div></div>
    </div>
  );
};

export default AppWrapper;
