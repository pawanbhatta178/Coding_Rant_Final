import React from "react";
import Modal from "../Modal/Modal";
import useLogin from "./useLogin";

const Login = ({ show, onClose }) => {
  const { user, formState, formError, onFormChange, onFormSubmit } = useLogin();
  return (
    !user?.token && (
      <Modal show={show} onClose={onClose}>
        <div className="flex flex-col my-4 mx-4">
          <div className="font-semibold  text-2xl mx-auto">Login</div>
          {formError.general && <div>{formError.general}</div>}
          <input
            className="bg-secondary"
            placeholder="login"
            name="username"
            value={formState.username}
            onChange={onFormChange}
          ></input>
          <input
            className="bg-secondary"
            placeholder="password"
            name="password"
            type="password"
            value={formState.password}
            onChange={onFormChange}
          ></input>
          <button onClick={onFormSubmit}>Login</button>
        </div>
      </Modal>
    )
  );
};

export default Login;
