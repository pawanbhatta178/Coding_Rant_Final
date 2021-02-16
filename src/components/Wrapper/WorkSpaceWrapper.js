import React from "react";

const WorkSpaceWrapper = ({ children }) => {
  return (
    <div className="flex flex-col h-screen text-primary px-4 sm:px-6 md:px-8 bg-primary">
      {children}
    </div>
  );
};

export default WorkSpaceWrapper;
