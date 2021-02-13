import React from "react";
import Overlay from "../Overlay/Overlay";
import { useDisableBodyScroll } from "../common/useDisableBodyScroll";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ show, onClose, children }) => {
  useDisableBodyScroll(show);
  return (
    show && (
      <>
        <div className="z-20 absolute top-1/2 left-1/2 bg-primary text-primary transform -translate-x-1/2 -translate-y-1/2 border-t-2 border-accent rounded-md px-4 py-4 w-72">
          <div className="absolute top-1 right-1 hover-transition rounded-full p-1">
            <AiOutlineClose
              className="text-sm font-semibold cursor-pointer "
              onClick={onClose}
            />
          </div>
          {children}
        </div>
        <Overlay show={show} onClick={onClose} />
      </>
    )
  );
};

export default Modal;
