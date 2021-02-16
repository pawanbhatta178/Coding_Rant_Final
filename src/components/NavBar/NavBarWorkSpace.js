import { CgMenu } from "react-icons/cg";
import Logo from "../Logo/Logo";
import UserIcon from "../User/UserIcon";
import useNavBar from "./useNavBar";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import UserMenu from "../User/UserMenu";
import SideMenu from "../SideMenu/SideMenu";
const NavBarWorkSpace = () => {
  const {
    user,
    isSideMenuOn,
    isLoginOn,
    isSignUpOn,
    isUserMenuOn,
    onSignUpToggle,
    onUserIconClick,
    onHamburgerClick,
    onLoginClick,
  } = useNavBar();

  return (
    <>
      <div className="flex justify-between items-center h-8">
        <div className="md:hidden hover-transition rounded-full p-1">
          <CgMenu
            className="text-3xl font-semibold cursor-pointer "
            onClick={onHamburgerClick}
          />
        </div>
        <Logo />
        {user?.token ? (
          <UserIcon onClick={onUserIconClick} showMenu={isUserMenuOn} />
        ) : (
          <button className="" onClick={onLoginClick}>
            Login
          </button>
        )}
      </div>

      <SideMenu show={isSideMenuOn} onClose={onHamburgerClick} />
      <Login
        show={isLoginOn}
        onClose={onLoginClick}
        onSignUpClick={onSignUpToggle}
      />
      <SignUp
        show={isSignUpOn}
        onClose={onSignUpToggle}
        onLoginClick={onLoginClick}
      />
      <UserMenu show={isUserMenuOn} closeHandle={onUserIconClick} />
    </>
  );
};

export default NavBarWorkSpace;
