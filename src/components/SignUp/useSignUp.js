import { useState, useContext, useEffect } from "react";
import { useMutation } from "react-query";
import { signUserUp } from "../../api/User";
import { UserContext } from "../../UserContext";
import { validatePassword, validateEmail } from "./validations";

const useLogin = () => {
  const { user, userDispatch } = useContext(UserContext);

  const [formState, setFormState] = useState({
    username: "",
    confirmPassword: "",
    password: "",
    email: "",
  });
  const [formError, setFormError] = useState({
    general: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const mutation = useMutation(signUserUp, {
    onSuccess: (data) => {
      if (data?.token) {
        userDispatch({ type: "SET_TOKEN", payload: data?.token });
      }
      console.log(data);
    },
    onError: (err) => {
      setFormError((currentError) => {
        return {
          ...currentError,
          general: "At least one required fields are missing.",
        };
      });
    },
  });

  const onFormSubmit = () => {
    if (
      formError.username ||
      formError.password ||
      formError.confirmPassword ||
      formError.email
    ) {
      setFormError((currentError) => {
        return {
          ...currentError,
          general: "Please resolve all fields and try again.",
        };
      });
      return;
    }
    mutation.mutate(formState);
  };

  useEffect(() => {
    if (
      formState.confirmPassword.length === 0 ||
      formState.password.length === 0
    ) {
      setFormError((currentState) => {
        return {
          ...currentState,
          confirmPassword: "",
        };
      });
      return;
    }
    if (formState.confirmPassword !== formState.password) {
      //   setConfirmPwdError("Password do not match the previously entered.");
      setFormError((currentState) => {
        return {
          ...currentState,
          confirmPassword: "Password do not match the previously entered.",
        };
      });
      return;
    }
    if (formState.confirmPassword === formState.password) {
      //   setConfirmPwdError(null);
      setFormError((currentState) => {
        return {
          ...currentState,
          confirmPassword: "",
        };
      });
    }
  }, [formState.confirmPassword, formState.password]);

  useEffect(() => {
    if (formState.password.length === 0) {
      //   setPasswordError(null);
      setFormError((currentState) => {
        return {
          ...currentState,
          password: "",
        };
      });
      return;
    }
    if (!validatePassword(formState.password)) {
      //   setPasswordError(
      //     "Password must be at least 8 character long and must contain at least one lowercase, uppercase, and a special character."
      //   );
      setFormError((currentState) => {
        return {
          ...currentState,
          password:
            "Password must be at least 8 character long and must contain at least one lowercase, uppercase, and a special character.",
        };
      });
    } else {
      //   setPasswordError(null);
      setFormError((currentState) => {
        return {
          ...currentState,
          password: "",
        };
      });
    }
  }, [formState.password]);

  useEffect(() => {
    if (formState.email.length === 0) {
      return;
    }
    if (!validateEmail(formState.email)) {
      //   setEmailError("Please enter valid email address.");
      setFormError((currentState) => {
        return {
          ...currentState,
          email: "Please enter valid email address.",
        };
      });
    } else {
      //   setEmailError(null);
      setFormError((currentState) => {
        return {
          ...currentState,
          email: "",
        };
      });
    }
  }, [formState.email]);

  const onFormChange = (e) => {
    setFormState((currentState) => {
      return {
        ...currentState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return { user, formState, onFormChange, onFormSubmit, formError };
};

export default useLogin;
