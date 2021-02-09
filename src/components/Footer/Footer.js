import React from "react";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="border-t  px-4 sm:px-6 md:px-8 py-8 flex items-center justify-between">
      <Logo className="text-xl font-bold" />
      <div className="text-secondary text-xs">© 2021 CodingRant, Inc.</div>
    </footer>
  );
};

export default Footer;
