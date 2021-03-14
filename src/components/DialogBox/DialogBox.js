import React from "react";
import NeutralButton from "../Button/NeutralButton";
import SubmitButton from "../Button/SubmitButton";

const DialogBox = ({
  header,
  content,
  negativeAnswer,
  negativeAnswerAction,
  positiveAnswer,
  positiveAnswerAction,
}) => {
  return (
    <div>
      <div className="text-lg bg-primary font-semibold border-b py-2">
        {header}
      </div>
      <div className="">
        <div className="text-xs opacity-60 py-2">{content}</div>
        <div className="flex justify-end py-2">
          <NeutralButton onClick={negativeAnswerAction}>
            {" "}
            {negativeAnswer}
          </NeutralButton>
          <SubmitButton onClick={positiveAnswerAction}>
            {positiveAnswer}
          </SubmitButton>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
