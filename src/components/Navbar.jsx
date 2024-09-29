import React from "react";
import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="bg-[#87b9f32a] shadow-md sm:max-w-[90%] max-w-full container mx-auto">
      <div className="so-small:container so-small:mx-auto so-small:px-4 py-3 flex justify-between items-center">
        <div className="flex items-center so-small:space-x-4 space-x-2">
            <img src={Logo } alt="Logo" className="h-9 w-9" draggable="false"/>
            <div className="text-[#1c8adb] so-small:text-xl text-lg font-semibold text-nowrap cursor-default">QX-Code Generator</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
