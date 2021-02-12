import { useState, useContext } from "react";
import { UserContext } from "../../UserContext";

const useNavBar = () => {
  const [isSideMenuOn, setIsSideMenu] = useState(false);
  const [isLoginOn, setIsLoginOn] = useState(false);

  const { user } = useContext(UserContext);

  const onHamburgerClick = () => {
    setIsSideMenu(!isSideMenuOn);
  };

  const onLoginClick = () => {
    setIsLoginOn(!isLoginOn);
  };

  return { isSideMenuOn, isLoginOn, onHamburgerClick, onLoginClick, user };
};

export default useNavBar;
