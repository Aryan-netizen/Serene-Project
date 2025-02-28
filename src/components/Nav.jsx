import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import { FaBars } from "react-icons/fa6";

function Nav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div
      className={`${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-700 fixed z-[999] w-full sm:px-20 px-10 py-4 text-black flex items-center justify-between text-sm font-light bg-white`}
    >
      <div className="logo">
        <img className="h-[6vh] sm:h-[8vh]" src={logo} alt="" />
      </div>
      <FaBars className="text-black text-2xl flex md:hidden"/>
      <div className="links gap-6 capitalize hidden md:flex">
        {["About", "Term & Conditions", "Contact", "Help"].map((item, index) => {
          return (
            <a href="#" className="font-bold text-xl text-black " key={index}>
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Nav;
