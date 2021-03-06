import React from "react";
import { CSSTransition } from "react-transition-group";
import "./SideMenu.css";
import { CgClose } from "react-icons/cg";
import Overlay from "../Overlay/Overlay";

const SideMenu = ({ show, onClose }) => {
  return (
    <>
      <CSSTransition
        in={show}
        timeout={400}
        classNames="side-menu"
        unmountOnExit
      >
        <div className="absolute top-0 left-0 shadow-lg z-20">
          <div className=" w-64 bg-primary overflow-y-hidden h-screen  px-6 py-4">
            <div className="flex">
              <div className="hover-transition rounded-full p-1">
                <CgClose
                  className="text-3xl font-semibold cursor-pointer "
                  onClick={onClose}
                />
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
      <Overlay show={show} onClick={onClose} />
    </>
  );
};

export default SideMenu;
