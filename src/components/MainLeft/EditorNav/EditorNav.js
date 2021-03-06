import React from "react";
import useEditorNav from "./useEditorNav";
import { RiMoonFill, RiSunFill, RiArrowGoBackFill } from "react-icons/ri";

const EditorNav = ({
  theme,
  toggleTheme,
  activeLanguage,
  changeActiveLanguage,
  retrieveDefaultCode,
}) => {
  const { languageOptions, handleSelectChange } = useEditorNav(
    activeLanguage,
    changeActiveLanguage
  );
  return (
    <div className="flex-0 flex justify-end gap-x-2 py-2 h-11 text-sm">
      <div
        onClick={retrieveDefaultCode}
        className="px-2 bg-secondary shadow-lg  rounded-lg cursor-pointer"
      >
        <div className="w-full h-full flex items-center ">
          <RiArrowGoBackFill />
        </div>
      </div>
      <div
        onClick={toggleTheme}
        className="px-2 bg-secondary shadow-lg  rounded-lg cursor-pointer"
      >
        <div className="w-full h-full flex items-center ">
          {theme === "vs-dark" ? <RiMoonFill /> : <RiSunFill />}
        </div>
      </div>
      <select
        className="shadow-lg  font-thin  rounded-lg cursor-pointer focus:outline-none bg-secondary "
        id="language"
        onChange={handleSelectChange}
      >
        {languageOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
            selected={option.selected}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EditorNav;
