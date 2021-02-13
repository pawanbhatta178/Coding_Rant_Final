import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Overlay.css";

const Overlay = ({ show, onClick }) => {
  return (
    <CSSTransition in={show} timeout={400} classNames="overlay" unmountOnExit>
      <div
        className="absolute top-0 left-0 h-screen w-screen z-0 bg-overlay"
        onClick={onClick}
      ></div>
    </CSSTransition>
  );
};

export default Overlay;
