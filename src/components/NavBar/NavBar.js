import React from "react";
import { CgMenu } from "react-icons/cg";
import Logo from "../Logo/Logo";
import User from "../User/User";

const NavBar = () => {
  return (
    <div className="sticky top-0 px-4 sm:px-6 md:px-8 bg-primary">
      <div className="flex justify-between items-center h-16">
        <div>
          <CgMenu
            className="text-3xl font-semibold"
            onClick={() => console.log("click")}
          />
        </div>
        <Logo />
        <User />
      </div>
    </div>
  );
};

export default NavBar;
