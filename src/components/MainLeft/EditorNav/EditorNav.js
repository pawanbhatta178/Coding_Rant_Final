import React from "react";
import useEditorNav from "./useEditorNav";

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
    <>
      {console.log(activeLanguage, languageOptions)}
      <div className="flex bg-primary">
        <button onClick={toggleTheme}>{theme}</button>
      </div>
      <select id="language" onChange={handleSelectChange}>
        {languageOptions.map((option) => (
          <option value={option.value} selected={option.selected}>
            {option.name}
          </option>
        ))}
        {/* <option value="javascript">JavaScript</option>
        <option value="c++" disabled>
          C++
        </option>
        <option value="java" disabled>
          Java
        </option>
        <option value="typescript">TypeScript</option> */}
      </select>
    </>
  );
};

export default EditorNav;
