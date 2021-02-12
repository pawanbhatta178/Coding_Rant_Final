import { useState, useContext } from "react";
import { useMutation } from "react-query";
import { logUserIn } from "../../api/User";
import { UserContext } from "../../UserContext";

const useLogin = () => {
  const { user, userDispatch } = useContext(UserContext);

  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    general: "",
    username: "",
    password: "",
  });
  const mutation = useMutation(logUserIn, {
    onSuccess: (data) => {
      userDispatch({ type: "SET_TOKEN", payload: data?.token });
    },
    onError: (err) => {
      setFormError((currentError) => {
        return {
          ...currentError,
          general: "Incorrect Username/Password",
        };
      });
    },
  });

  const onFormChange = (e) => {
    setFormState((currentState) => {
      return {
        ...currentState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onFormSubmit = () => {
    mutation.mutate(formState);
  };

  return { user, formState, onFormChange, onFormSubmit, formError };
};

export default useLogin;
