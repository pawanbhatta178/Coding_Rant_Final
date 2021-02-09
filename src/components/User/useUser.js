import React from "react";

const useUser = () => {
  const [user] = React.useState("Pawan");

  return { user };
};

export default useUser;
