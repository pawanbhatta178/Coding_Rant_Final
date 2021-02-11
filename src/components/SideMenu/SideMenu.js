import React from "react";
import { CSSTransition } from "react-transition-group";
import "./SideMenu.css";
import { useDisableBodyScroll } from "./useDisableBodyScroll";
import { CgClose } from "react-icons/cg";

const SideMenu = ({ show, onClose }) => {
  useDisableBodyScroll(show);
  return (
    <>
      <CSSTransition
        in={show}
        timeout={400}
        classNames="side-menu"
        unmountOnExit
      >
        <div className="absolute top-0 shadow-lg z-20">
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
      <CSSTransition in={show} timeout={400} classNames="overlay" unmountOnExit>
        <div
          className="absolute top-0 h-screen w-screen z-10 bg-overlay"
          onClick={onClose}
        ></div>
      </CSSTransition>
    </>
  );
};

export default SideMenu;
