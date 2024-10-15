import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoIosClose, IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [opened, setOpened] = useState(false);

  const navOpenedHandler = () => {
    setOpened((curState) => !curState);
  };

  const navItemInfo = [
    { name: "Home", type: "link" },
    { name: "Articles", type: "link" },
    { name: "Pages", type: "dropdown", items: ["About Us", "Contact Us"] },
    { name: "Pricing", type: "link" },
  ];

  const NavItem = ({ item }) => {
    return (
      <li className="relative flex flex-col items-center lg:items-start group">
        {item.type === "link" ? (
          <button className="relative px-4 py-2 transition-colors duration-300 hover:text-blue-600">
            {item.name}
            {/* Underline animation */}
            <span className="cursor-pointer absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
          </button>
        ) : (
          <>
            <button className="relative px-4 py-2 rounded-lg flex items-center justify-center transition-colors duration-300 hover:text-blue-600">
              <span>{item.name}</span>
              <IoIosArrowDown className="ml-2" />
            </button>
            {/* Dropdown menu visible on hover */}
            <div className="hidden lg:group-hover:flex absolute top-full left-0 w-max bg-white shadow-lg rounded-md z-10">
              <ul className="flex flex-col">
                {item.items.map((page, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-blue-600 hover:text-white text-black"
                    >
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </li>
    );
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-30">
      <div>
        <header className="container flex justify-between mx-auto p-5 items-center">
          <div className="logo w-10">
            <span className="text-blue-600 lg:text-2xl font-semibold">
              Trend
            </span>
            <span className="lg:text-2xl font-semibold">Globalize</span>
          </div>
          <div className="lg:hidden z-[50] cursor-pointer">
            {opened ? (
              <IoIosClose className="w-7 h-7" onClick={navOpenedHandler} />
            ) : (
              <RiMenu3Fill className="w-7 h-7" onClick={navOpenedHandler} />
            )}
          </div>
          <div
            className={`${
              opened ? "right-0" : "-right-full"
            } mt-[50px] lg:mt-0 backdrop-blur-md bg-white lg:bg-transparent z-[49] menuItem fixed top-0 bottom-0 flex flex-col lg:flex-row lg:static justify-center items-center w-full lg:w-auto lg:space-x-4 transition-all duration-300`}
          >
            <ul className="flex flex-col lg:flex-row justify-center items-center list-none text-dark-hard space-y-4 lg:space-y-0 lg:space-x-4">
              {navItemInfo.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </ul>
            <button className="mt-4 lg:mt-0 border-2 border-blue-600 px-6 py-2 rounded-full text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
              Sign In
            </button>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Header;
