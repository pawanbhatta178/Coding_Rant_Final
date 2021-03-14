import React from "react";

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
      <div>{header}</div>
      <div>{content}</div>
      <div>
        <button onClick={negativeAnswerAction}>{negativeAnswer}</button>
        <button onClick={positiveAnswerAction}>{positiveAnswer}</button>
      </div>
    </div>
  );
};

export default DialogBox;
