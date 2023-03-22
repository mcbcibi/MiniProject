import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <NavLink to="/">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          K MURUGASEN GROCERY SHOP
        </h1>
      </NavLink>

      <ul className="hidden md:flex">
        <NavLink to="/" className="p-4">
          Home
        </NavLink>
        <NavLink to="/about" className="p-4">
          About Us
        </NavLink>
        <NavLink to="/product" className="p-4">
          Products
        </NavLink>
        <NavLink to="/Contact" className="p-4">
          Contact Us
        </NavLink>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#dddddd] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-2xl font-bold text-[#00df9a] m-4">
          K MURGASEN GROCERY
        </h1>

        <NavLink to="/">
          <li className="p-4 border-b border-gray-600">Home</li>
        </NavLink>
        <NavLink to="/about">
          <li className="p-4 border-b border-gray-600">About Us</li>
        </NavLink>
        <NavLink to="/product">
          <li className="p-4 border-b border-gray-600">Products</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="p-4 border-b border-gray-600">Contact Us</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
