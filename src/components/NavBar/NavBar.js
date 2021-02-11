import React from "react";

import { CgMenu } from "react-icons/cg";
import Logo from "../Logo/Logo";
import User from "../User/User";
import useNavBar from "./useNavBar";
import SideMenu from "../SideMenu/SideMenu";

const NavBar = () => {
  const { isSideMenuOn, onHamburgerClick } = useNavBar();
  return (
    <>
      <div className="sticky top-0  px-4 sm:px-6 md:px-8 bg-primary ">
        <div className="flex justify-between items-center h-16">
          <div className="md:hidden hover-transition rounded-full p-1">
            <CgMenu
              className="text-3xl font-semibold cursor-pointer "
              onClick={onHamburgerClick}
            />
          </div>
          <Logo />
          <User />
        </div>
      </div>
      <SideMenu show={isSideMenuOn} onClose={onHamburgerClick} />
    </>
  );
};

export default NavBar;
