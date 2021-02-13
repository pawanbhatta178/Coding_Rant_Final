import React, { useRef } from "react";
import useOutsideClick from "../common/useOutsideClick";
import useUser from "./useUser";

const UserMenu = ({ show, closeHandle }) => {
  const ref = useRef();
  useOutsideClick(ref, () => {
    closeHandle();
  });

  const { isLoading, error, data, onLogoutClick } = useUser();

  if (error) return null;
  if (isLoading) return null;

  return (
    show && (
      <div
        ref={ref}
        className="absolute right-2 bg-secondary rounded-md py-4 w-80 px-2 shadow-lg "
      >
        <div className="flex flex-col items-center justify-center gap-y-8">
          <div className="flex flex-col gap-y items-center ">
            <div className="p-1 border border-purple-700 border-dashed rounded-full">
              <div className="h-16 w-16 rounded-full bg-primary "></div>
            </div>
            <div className="text-center font-semibold pt-2">
              {data.username || "JohnDoe"}
            </div>
            <div className="font-extralight text-xs opacity-80">#{data.id}</div>
          </div>
          <div className=" flex flex-col w-full pt-4 border-t  border-purple-700 border-dashed">
            <button
              onClick={onLogoutClick}
              className="py-1 px-6 sm:w-auto bg-accent text-white rounded-md font-semibold text-md leading-6 w-full"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default UserMenu;
