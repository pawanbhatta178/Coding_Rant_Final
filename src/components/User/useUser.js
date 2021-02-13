import { useContext } from "react";
import { useQuery, useMutation } from "react-query";
import { getUserDetails, logUserOut } from "../../api/User";
import { UserContext } from "../../UserContext";

const useUser = () => {
  const { userDispatch } = useContext(UserContext);
  const { isLoading, error, data } = useQuery("userData", getUserDetails);

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
  };

  return { isLoading, error, data, onLogoutClick };
};

export default useUser;
