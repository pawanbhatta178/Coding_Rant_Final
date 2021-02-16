import React, { useState, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";

const Editor = () => {
  const editorRef = useRef();
  const [setIsEditorReady] = useState(false);
  const [value, setValue] = useState("");

  function handleEditorDidMount(_, editor) {
    setIsEditorReady(true);
    editorRef.current = editor;
  }

  function handleEditorChange(value, event) {
    console.log(value);
  }

  return (
    <div className="code-editor-height border  ">
      <MonacoEditor
        height="100%"
        language={"javascript"}
        value={value}
        editorDidMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default Editor;
