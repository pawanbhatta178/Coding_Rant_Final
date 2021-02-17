import React from "react";

const Select = ({ className, children }) => {
  return (
    <div className={className}>
      {children.map((option) => {
        return <Option></Option>;
      })}
    </div>
  );
};

const Option = ({ children }) => {
  return <div>{children}</div>;
};

export { Select, Option };
