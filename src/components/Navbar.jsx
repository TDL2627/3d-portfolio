import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-blue-700  fixed   `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2 text-red-500"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Kannemeyer{" "}
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white underline" : "text-secondary"
              } font-medium cursor-pointer`}
            >
              <Link
                onClick={() => {
                  setActive(link.title);
                }}
                to={`#${link.id}`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            onClick={() => {
              setToggle(!toggle);
            }}
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
          />

          <div
            className={`flex fixed right-0  top-0 bottom-0 w-1/2  h-full p-6 black-gradient z-20 transition-all duration-300  ${
              toggle ? "" : "translate-x-full"
            }`}
          >
            <img
              onClick={() => {
                setToggle(false);
              }}
              src={close}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer absolute right-10"
            />
            <ul className="list-none  ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white underline" : "text-secondary"
                  } font-bold m-10 cursor-pointer font-poppins text-[16px]`}
                >
                  <Link
                    onClick={() => {
                      setActive(link.title);
                      setToggle(false);
                    }}
                    to={`#${link.id}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
