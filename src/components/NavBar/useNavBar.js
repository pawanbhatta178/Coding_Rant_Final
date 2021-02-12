import React from "react";

const useNavBar = () => {
  const [isSideMenuOn, setIsSideMenu] = React.useState(false);

  const onHamburgerClick = () => {
    setIsSideMenu(!isSideMenuOn);
  };
  return { isSideMenuOn, onHamburgerClick };
};

export default useNavBar;
