import React, { useState, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import useEditor from "./useEditor";
import EditorNav from "../EditorNav/EditorNav";
import EditorAction from "../EditorAction/EditorAction";

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
        height="83vh"
        editorDidMount={handleEditorDidMount}
        onChange={updateCode}
        theme={theme}
      />
      <EditorAction />
    </>
  );
};
export default Editor;
