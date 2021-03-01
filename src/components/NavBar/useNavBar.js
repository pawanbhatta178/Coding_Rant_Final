import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { AppContext } from "../../AppContext";

const useNavBar = () => {
  const { user } = useContext(UserContext);
  const {
    isSideBarOn,
    isLoginOn,
    isSignUpOn,
    isUserMenuOn,
    onSideBarToggle,
    onLoginToggle,
    onSignUpToggle,
    onUserMenuToggle,
  } = useContext(AppContext);

  return {
    isSideMenuOn: isSideBarOn,
    isLoginOn,
    isUserMenuOn,
    isSignUpOn,
    onUserIconClick: onUserMenuToggle,
    onHamburgerClick: onSideBarToggle,
    onLoginClick: onLoginToggle,
    onSignUpToggle,
    user,
  };
};

export default useNavBar;
