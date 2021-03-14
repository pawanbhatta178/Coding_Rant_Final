import React from "react";
import DialogBox from "../../DialogBox/DialogBox";
import ModalWithoutOverlay from "../../Modal/ModalWithoutOverlay";

const RevertToDefault = ({
  show,
  toggle,
  retrieveDefaultCode,
  doNotRetrieveDefaultCode,
}) => {
  if (!show) return null;
  return (
    <ModalWithoutOverlay show={show} onClose={toggle}>
      <DialogBox
        header="Restore Default Code?"
        content="Restoring the default code will permanently delete any progress you have made on this challenge for the language you have chosen."
        positiveAnswer="Yes"
        positiveAnswerAction={retrieveDefaultCode}
        negativeAnswer="No"
        negativeAnswerAction={doNotRetrieveDefaultCode}
      />
    </ModalWithoutOverlay>
  );
};

export default RevertToDefault;
