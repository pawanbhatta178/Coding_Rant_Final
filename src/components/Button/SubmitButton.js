import React from "react";

const SubmitButton = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className="bg-accent text-white text-xs px-8 py-2 rounded-lg hover:bg-opacity-90  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
