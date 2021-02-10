import React from "react";
import { CSSTransition } from "react-transition-group";
import "./SideMenu.css";
import { useDisableBodyScroll } from "./useDisableBodyScroll";
import { CgClose } from "react-icons/cg";

const SideMenu = ({ show, onClose }) => {
  useDisableBodyScroll(show);
  return (
    <CSSTransition in={show} timeout={400} classNames="side-menu" unmountOnExit>
      <div className="absolute top-0 shadow-lg">
        <div className=" w-64 bg-primary overflow-y-hidden h-screen z-40 px-6 py-4">
          <CgClose
            className="text-3xl font-semibold cursor-pointer"
            onClick={onClose}
          />
        </div>
      </div>
    </CSSTransition>
  );
};

export default SideMenu;
