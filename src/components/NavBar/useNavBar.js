import { useState, useContext } from "react";
import { UserContext } from "../../UserContext";

const useNavBar = () => {
  const [isSideMenuOn, setIsSideMenu] = useState(false);
  const [isLoginOn, setIsLoginOn] = useState(false);
  const [isUserMenuOn, setIsUserMenuOn] = useState(false);
  const [isSignUpOn, setIsSignUpOn] = useState(false);

  const { user } = useContext(UserContext);

  const onHamburgerClick = () => {
    setIsSideMenu(!isSideMenuOn);
  };

  const onUserIconClick = () => {
    setIsUserMenuOn(!isUserMenuOn);
  };

  const onLoginClick = () => {
    setIsLoginOn((currentState) => {
      if (!currentState) {
        setIsSignUpOn(false);
      }
      return !currentState;
    });
  };

  const onSignUpToggle = () => {
    setIsSignUpOn((currentState) => {
      if (!currentState) {
        setIsLoginOn(false);
      }
      return !currentState;
    });
  };

  return {
    isSideMenuOn,
    isLoginOn,
    isUserMenuOn,
    isSignUpOn,
    onUserIconClick,
    onHamburgerClick,
    onLoginClick,
    onSignUpToggle,
    user,
  };
};

export default useNavBar;
