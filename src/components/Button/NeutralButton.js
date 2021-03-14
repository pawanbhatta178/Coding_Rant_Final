import React from "react";

const NeutralButton = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className="bg-secondary text-xs px-8 py-2 rounded-lg hover:bg-opacity-90 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
    >
      {children}
    </button>
  );
};

export default NeutralButton;
