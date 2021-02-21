import React, { useState, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import useEditor from "./useEditor";
import EditorNav from "../EditorNav/EditorNav";

const Editor = () => {
  const editorRef = useRef();
  const [setIsEditorReady] = useState(false);
  const {
    activeLanguage,
    changeActiveLanguage,
    code,
    updateCode,
    theme,
    toggleTheme,
  } = useEditor();

  function handleEditorDidMount(_, editor) {
    setIsEditorReady(true);
    editorRef.current = editor;
  }

  return (
    <>
      <EditorNav
        toggleTheme={toggleTheme}
        theme={theme}
        activeLanguage={activeLanguage}
        changeActiveLanguage={changeActiveLanguage}
      />
      <MonacoEditor
        language={activeLanguage}
        value={code}
        editorDidMount={handleEditorDidMount}
        onChange={updateCode}
        theme={theme}
      />
    </>
  );
};
export default Editor;
