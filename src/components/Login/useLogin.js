import { useState, useContext } from "react";
import { useMutation } from "react-query";
import { logUserIn } from "../../api/User";
import { UserContext } from "../../UserContext";
import { useHistory } from "react-router-dom";

const useLogin = () => {
  const { user, userDispatch } = useContext(UserContext);
  const history = useHistory();
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
      history.push("/workspace");
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
