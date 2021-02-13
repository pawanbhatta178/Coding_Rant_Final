import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";

const useNavBar = () => {
  const [isSideMenuOn, setIsSideMenu] = useState(false);
  const [isLoginOn, setIsLoginOn] = useState(false);
  const [isUserMenuOn, setIsUserMenuOn] = useState(false);

  const { user } = useContext(UserContext);

  const onHamburgerClick = () => {
    setIsSideMenu(!isSideMenuOn);
  };

  const onLoginClick = () => {
    setIsLoginOn(!isLoginOn);
  };

  const onUserIconClick = () => {
    console.log("Clicked");
    setIsUserMenuOn(!isUserMenuOn);
  };

  return {
    isSideMenuOn,
    isLoginOn,
    isUserMenuOn,
    onUserIconClick,
    onHamburgerClick,
    onLoginClick,
    user,
  };
};

export default useNavBar;
