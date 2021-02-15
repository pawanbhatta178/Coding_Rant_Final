import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useOutsideClick from "../common/useOutsideClick";

const ModalWithoutOverlay = ({ show, onClose, children }) => {
  const ref = useRef();
  useOutsideClick(ref, onClose);

  return (
    show && (
      <>
        <div
          ref={ref}
          className="z-20 absolute top-1/2 left-1/2 bg-primary text-primary transform -translate-x-1/2 -translate-y-1/2 border-t-2 border-accent rounded-md px-4 py-4 w-72 shadow-xl"
        >
          <div className="absolute top-1 right-1 hover-transition rounded-full p-1">
            <AiOutlineClose
              className="text-sm font-semibold cursor-pointer "
              onClick={onClose}
            />
          </div>
          {children}
        </div>
      </>
    )
  );
};

export default ModalWithoutOverlay;
