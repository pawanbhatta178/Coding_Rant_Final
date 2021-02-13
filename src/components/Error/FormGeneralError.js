import React from "react";

const FormGeneralError = ({ children, className, ...props }) => {
  return (
    <div
      className={`${className} text-center text-xs text-red-600 mt-2`}
      {...props}
    >
      {children}
    </div>
  );
};

export default FormGeneralError;
