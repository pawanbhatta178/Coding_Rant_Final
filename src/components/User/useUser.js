import React from "react";

const useUser = () => {
  const [user, setUser] = React.useState("Pawan");

  return { user };
};

export default useUser;
