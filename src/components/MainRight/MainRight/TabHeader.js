import React from "react";

const baseStyle = "button-base-style font-thin  px-2 h-7";

const selectedStyle = `${baseStyle} border-b-2 border-accent font-light`;

const TabHeader = ({ name, id, handleTabClick, selected }) => {
  return (
    <button
      className={selected ? selectedStyle : baseStyle}
      value={id}
      onClick={handleTabClick}
    >
      {name}
    </button>
  );
};

export default TabHeader;
