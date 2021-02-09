import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <Link
      className={`font-mono font-lighter tracking-tight cursor-pointer focus:outline-none text-accent text-xl font-logo ${className}`}
      to="/"
    >
      <span>Coding</span>
      <span>rant.</span>
    </Link>
  );
};

export default Logo;
