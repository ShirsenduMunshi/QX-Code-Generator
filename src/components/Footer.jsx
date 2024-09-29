import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#87b9f32a] shadow-md mt-8 container mx-auto sm:max-w-[90%] max-w-full sm:relative sm:bottom-[ss] absolute bottom-0 ">
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center so-small:space-y-0 space-y-4">
        <div className="text-[#1c8adb] text-lg font-semibold text-nowrap cursor-default">
          QX - Code Generator
        </div>
        <div className="flex justify-between items-center space-x-6">
          <a href="https://github.com/ShirsenduMunshi?tab=repositories" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://in.linkedin.com/in/shirsendu-munshi-341590288" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <div className="text-lightBlue-500 sm:text-sm text-custom cursor-default">
          &copy; 2024 Shirsendu Munshi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;