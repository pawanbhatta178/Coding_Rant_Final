import React from "react";

const FormGeneralError = ({ children, className, ...props }) => {
  return (
    <div
      className={`${className} text-center text-xs opacity-60 text-red-600 mt-2`}
      {...props}
    >
      {children}
    </div>
  );
};

export default FormGeneralError;
