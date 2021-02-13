import React from "react";
import Modal from "../Modal/Modal";
import useLogin from "./useLogin";
import Input from "../Form/Input";
import PrimaryButton from "../Form/PrimaryButton";

const Login = ({ show, onClose, onSignUpClick }) => {
  const { user, formState, formError, onFormChange, onFormSubmit } = useLogin();
  return (
    !user?.token && (
      <Modal show={show} onClose={onClose}>
        <div className="flex flex-col pt-2 pb-6">
          <div className="font-semibold  text-2xl mx-auto">Login</div>
          {formError.general && (
            <div className="text-center text-xs text-red-600 mt-2">
              {formError.general}
            </div>
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
          <div className="flex mt-4 justify-between text-xs">
            <button>Forgot Password? </button>
            <button size="xs" type="basicPurple" onClick={onSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </Modal>
    )
  );
};

export default Login;
