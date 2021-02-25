import { CSSTransition } from "react-transition-group";
import "./DropDownContent.css";

const DropDownContent = ({ show, children }) => {
  return (
    <CSSTransition
      in={show}
      unmountOnExit
      classNames="result-dropdown"
      timeout={300}
    >
      {children}
    </CSSTransition>
  );
};

export default DropDownContent;
