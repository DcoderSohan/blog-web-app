import React from "react";

const Header = () => {
  const navItemInfo = [
    { name: "Home" },
    { name: "About" },
    { name: "Articles" },
    { name: "Pages" },
    { name: "Pricing" },
    { name: "Contact" },
  ];

  const NavItem = ({ name }) => {
    return (
      <li className="relative group">
        <a href="/" className="px-4 py-2 group-hover:text-blue-600">
          {name}
        </a>
        <span className="text-blue-600 absolute transition-all duration-500 font-semibold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
          /
        </span>
      </li>
    );
  };

  return (
    <div>
      <header className="container flex justify-between mx-auto p-5 items-center">
        <div className="logo">
          <span className="text-blue-600 text-2xl font-semibold font-roboto">
            Trend
          </span>
          <span className="text-2xl font-semibold font-roboto">Globalize</span>
        </div>
        <div className="menuItem flex space-x-4 items-center">
          <ul className="list-none text-black flex space-x-4 font-roboto">
            {navItemInfo.map((item) => (
              <NavItem key={item.name} name={item.name} />
            ))}
          </ul>
          <button
            className="border-2 border-blue-600 px-6 py-2 rounded-full text-blue-600 font-roboto font-semibold
          hover:bg-blue-600 hover:text-white transition-all duration-200"
          >
            Sign In
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
