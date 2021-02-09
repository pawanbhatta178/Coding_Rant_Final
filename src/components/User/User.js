import React from "react";
import useUser from "./useUser";

const User = () => {
  const { user } = useUser();
  return <div>{user}</div>;
};

export default User;
