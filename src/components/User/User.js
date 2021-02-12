import React from "react";
import { useQuery } from "react-query";
import { getUserDetails } from "../../api/User";
import { HiUserCircle } from "react-icons/hi";
import RectangleSpinner from "../Loader/RectangleSpinner";

const User = () => {
  const { isLoading, error, data } = useQuery("userData", getUserDetails);
  if (isLoading) return <RectangleSpinner />;
  if (error) return null;
  return (
    <div>
      <HiUserCircle className="text-3xl font-semibold" />
      {console.log(data)}
    </div>
  );
};

export default User;
