import React from "react";
import SubmitButton from "../../Button/SubmitButton";
import RectangleSpinner from "../../Loader/RectangleSpinner";

const EditorAction = ({ isCodeSubmitting, onCodeSubmit }) => {
  return (
    <div className="flex-0 flex justify-center items-center mt-1 h-full mb-8">
      {isCodeSubmitting ? (
        <RectangleSpinner />
      ) : (
        <SubmitButton onClick={onCodeSubmit}>Submit</SubmitButton>
      )}
    </div>
  );
};

export default EditorAction;
