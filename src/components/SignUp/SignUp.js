import React from "react";
import useSignUp from "./useSignUp";
import Modal from "../Modal/Modal";
import Input from "../Form/Input";
import PrimaryButton from "../Form/PrimaryButton";
import FormGeneralError from "../Error/FormGeneralError";
import FormFieldError from "../Error/FormFieldError";

const SignUp = ({ show, onClose, onLoginClick }) => {
  const {
    user,
    formState,
    onFormChange,
    onFormSubmit,
    formError,
  } = useSignUp();

  return (
    !user?.token && (
      <Modal show={show} onClose={onClose}>
        <div className="flex flex-col pt-2 pb-6">
          <div className="font-semibold  text-2xl mx-auto">Sign Up</div>
          {formError.general && (
            <FormGeneralError> {formError.general}</FormGeneralError>
          )}

          <Input
            placeholder="Username"
            name="username"
            type="text"
            value={formState.username}
            onChange={onFormChange}
          />
          {/* <RegisterErrorText msg={usernameError} /> */}
          <FormFieldError>{formError.username}</FormFieldError>
          <Input
            placeholder="Password"
            name="password"
            type="password"
            value={formState.password}
            onChange={onFormChange}
          />
          {/* <RegisterErrorText msg={passwordError} /> */}
          <FormFieldError>{formError.password}</FormFieldError>

          <Input
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formState.confirmPassword}
            onChange={onFormChange}
          />
          {/* <RegisterErrorText msg={confirmPwdError} /> */}
          <FormFieldError>{formError.confirmPassword}</FormFieldError>

          <Input
            placeholder="Email"
            name="email"
            type="email"
            value={formState.email}
            onChange={onFormChange}
          />
          <FormFieldError>{formError.email}</FormFieldError>
          {/* <RegisterErrorText msg={emailError} /> */}

          <PrimaryButton onClick={onFormSubmit}>Register Now</PrimaryButton>
          <div className="flex justify-between text-xs mt-4">
            <div className="opacity-60">Already Have an Account? </div>
            <button onClick={onLoginClick}>Log In</button>
          </div>
        </div>
      </Modal>
    )
  );
};

export default SignUp;
