import React from "react";
import SubmitButton from "../../Button/SubmitButton";
import RectangleSpinner from "../../Loader/RectangleSpinner";

const EditorAction = ({ isCodeSubmitting, onCodeSubmit }) => {
  if (isCodeSubmitting) return <RectangleSpinner />;
  return (
    <div className="flex justify-center items-center h-full border-t mb-8">
      {console.log(isCodeSubmitting)}

      <SubmitButton onClick={onCodeSubmit}>Submit</SubmitButton>
    </div>
  );
};

export default EditorAction;
