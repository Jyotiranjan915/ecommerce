import React from "react";
import Logo from "./Logo";
import CartCount from "./CartCount";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-5 md:my-10">
      <Logo />
      <CartCount />
    </div>
  );
};

export default Navbar;
