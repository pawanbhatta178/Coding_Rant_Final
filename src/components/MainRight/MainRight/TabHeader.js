import React from "react";
import { BiMessageAltDetail, BiTrophy, BiHistory } from "react-icons/bi";

const baseStyle = "button-base-style font-thin  px-2 h-7 flex items-center";

const selectedStyle = `${baseStyle} border-b-2 border-accent text-accent font-light`;

const TabHeader = ({ name, id, handleTabClick, selected }) => {
  return (
    <button
      className={selected ? selectedStyle : baseStyle}
      onClick={() => handleTabClick(id)}
    >
      <div className="pr-1 text-xs">
        {" "}
        {name === "Description" && <BiMessageAltDetail />}
        {name === "Submissions" && <BiHistory />}
        {name === "LeaderBoard" && <BiTrophy />}
      </div>

      <div>{name}</div>
    </button>
  );
};

export default TabHeader;
