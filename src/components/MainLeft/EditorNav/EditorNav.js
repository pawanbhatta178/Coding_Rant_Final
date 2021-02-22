import React from "react";
import useEditorNav from "./useEditorNav";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const EditorNav = ({
  theme,
  toggleTheme,
  activeLanguage,
  changeActiveLanguage,
}) => {
  const { languageOptions, handleSelectChange } = useEditorNav(
    activeLanguage,
    changeActiveLanguage
  );
  return (
    <div className="flex justify-end gap-x-4 py-2 items-stretch h-11">
      <div
        onClick={toggleTheme}
        className="px-2 bg-secondary shadow-lg border border-accent rounded-lg cursor-pointer"
      >
        <div className="w-full h-full flex items-center ">
          {theme === "vs-dark" ? (
            <RiMoonFill className="text-lg " />
          ) : (
            <RiSunFill className="text-lg " />
          )}
        </div>
      </div>
      <select
        className="shadow-lg border text-xs border-accent rounded-lg cursor-pointer focus:outline-none bg-secondary "
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
