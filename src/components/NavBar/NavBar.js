import { CgMenu } from "react-icons/cg";
import Logo from "../Logo/Logo";
import UserIcon from "../User/UserIcon";
import useNavBar from "./useNavBar";
import SideMenu from "../SideMenu/SideMenu";
import Login from "../Login/Login";
const NavBar = () => {
  const {
    user,
    isSideMenuOn,
    isLoginOn,
    isUserMenuOn,
    onUserIconClick,
    onHamburgerClick,
    onLoginClick,
  } = useNavBar();

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
          {user?.token ? (
            <UserIcon onClick={onUserIconClick} showMenu={isUserMenuOn} />
          ) : (
            <button className="" onClick={onLoginClick}>
              Login
            </button>
          )}
        </div>
      </div>
      <SideMenu show={isSideMenuOn} onClose={onHamburgerClick} />
      <Login show={isLoginOn} onClose={onLoginClick} />
    </>
  );
};

export default NavBar;
