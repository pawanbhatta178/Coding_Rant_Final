import { useContext } from "react";
import { useQuery, useMutation } from "react-query";
import { getUserDetails, logUserOut } from "../../api/User";
import { UserContext } from "../../UserContext";
import { useHistory } from "react-router-dom";

const useUser = () => {
  const { userDispatch } = useContext(UserContext);
  const { isLoading, error, data } = useQuery("userData", getUserDetails);
  const history = useHistory();

  const logoutMutation = useMutation(logUserOut, {
    onSuccess: (data) => {
      userDispatch({ type: "LOGOUT" });
    },
    onError: (err) => {
      console.log(err);
      return;
    },
  });

  const onLogoutClick = () => {
    logoutMutation.mutate();
    history.push("/");
  };

  return { isLoading, error, data, onLogoutClick };
};

export default useUser;
