import React from "react";

const useNavBar = () => {
  const [isSideMenuOn, setIsSideMenu] = React.useState(false);

  const onHamburgerClick = () => {
    console.log("toggling");
    setIsSideMenu(!isSideMenuOn);
  };
  return { isSideMenuOn, onHamburgerClick };
};

export default useNavBar;
