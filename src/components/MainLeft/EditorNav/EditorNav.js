import React from "react";
import { Select } from "../../Form/Select";

const EditorNav = ({ theme, toggleTheme }) => {
  return (
    <div className="flex bg-primary">
      <button onClick={toggleTheme}>{theme}</button>
      <Select />
    </div>
  );
};

export default EditorNav;
