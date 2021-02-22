import React from "react";

const TabHeader = ({ name, id, handleTabClick, selected }) => {
  return (
    <button
      className={selected ? "border" : ""}
      value={id}
      onClick={handleTabClick}
    >
      {name}
    </button>
  );
};

export default TabHeader;
