import React from "react";
import Modal from "../Modal/Modal";
import useLogin from "./useLogin";
import Input from "../Form/Input";
import PrimaryButton from "../Form/PrimaryButton";

const Login = ({ show, onClose }) => {
  const { user, formState, formError, onFormChange, onFormSubmit } = useLogin();
  return (
    !user?.token && (
      <Modal show={show} onClose={onClose}>
        <div className="flex flex-col  ">
          <div className="font-semibold  text-2xl mx-auto">Login</div>
          {formError.general && (
            <div className="text-xs text-red-600 mt-2">{formError.general}</div>
          )}
          <Input
            className="bg-secondary"
            placeholder="login"
            name="username"
            value={formState.username}
            onChange={onFormChange}
          ></Input>
          <Input
            className="bg-secondary"
            placeholder="password"
            name="password"
            type="password"
            value={formState.password}
            onChange={onFormChange}
          ></Input>
          <PrimaryButton onClick={onFormSubmit}>Login</PrimaryButton>
        </div>
      </Modal>
    )
  );
};

export default Login;
