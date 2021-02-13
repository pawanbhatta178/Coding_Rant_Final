import React from "react";
import { HiUserCircle } from "react-icons/hi";
import RectangleSpinner from "../Loader/RectangleSpinner";
import UserMenu from "./UserMenu";
import useUser from "./useUser";

const UserIcon = ({ onClick, showMenu }) => {
  const { isLoading, error, data } = useUser();
  if (isLoading) return <RectangleSpinner />;
  if (error) return null;
  return (
    <div className="relative">
      <div className="hover-transition rounded-full p-1">
        <HiUserCircle
          onClick={onClick}
          className="text-3xl font-semibold cursor-pointer"
        />
        {console.log(data)}
      </div>
      <UserMenu show={showMenu} closeHandle={onClick} />
    </div>
  );
};

export default UserIcon;
