import React, { useState, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import useEditor from "./useEditor";

const Editor = () => {
  const editorRef = useRef();
  const [setIsEditorReady] = useState(false);
  const { activeLanguage, code, updateCode, changeLanguage } = useEditor();

  function handleEditorDidMount(_, editor) {
    setIsEditorReady(true);
    editorRef.current = editor;
  }

  return (
    <MonacoEditor
      height="83vh"
      language={activeLanguage}
      value={code}
      editorDidMount={handleEditorDidMount}
      onChange={updateCode}
    />
  );
};
export default Editor;
