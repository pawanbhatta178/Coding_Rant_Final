import React from "react";

const Input = ({ className, ...props }) => {
  return (
    <div className="mt-4">
      <input
        className={`${className} w-full border border-accent focus:outline-none focus:ring-1 focus:ring-purple-600 focus:ring-opacity-50 rounded-md px-2 py-1`}
        {...props}
      />
    </div>
  );
};

export default Input;
