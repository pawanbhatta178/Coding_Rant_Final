import React from "react";
import Overlay from "../Overlay/Overlay";
import { useDisableBodyScroll } from "../common/useDisableBodyScroll";

const Modal = ({ show, onClose, children }) => {
  useDisableBodyScroll(show);
  return (
    show && (
      <>
        <div className="z-20 absolute top-1/2 left-1/2 bg-primary text-primary transform -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
        <Overlay show={show} onClick={onClose} />
      </>
    )
  );
};

export default Modal;
