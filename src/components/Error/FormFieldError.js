import React from "react";

const FormFieldError = ({ children, className, ...props }) => {
  return (
    <div
      className={`${className} text-xs opacity-60 text-red-600 mt-1`}
      {...props}
    >
      {children}
    </div>
  );
};

export default FormFieldError;
