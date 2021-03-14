import React from "react";
import { BiMessageAltDetail, BiTrophy } from "react-icons/bi";
import { FiUploadCloud } from "react-icons/fi";

const baseStyle = "button-base-style font-thin  px-2 h-7 flex items-center";

const selectedStyle = `${baseStyle} border-b-2 border-accent font-light`;

const TabHeader = ({ name, id, handleTabClick, selected }) => {
  return (
    <button
      className={selected ? selectedStyle : baseStyle}
      value={id}
      onClick={handleTabClick}
    >
      {name === "Description" && <BiMessageAltDetail />}
      {name === "Submissions" && <FiUploadCloud />}
      {name === "LeaderBoard" && <BiTrophy />}
      {console.log(id)}
      {name}
    </button>
  );
};

export default TabHeader;
