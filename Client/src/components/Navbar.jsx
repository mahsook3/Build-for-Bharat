import logo from "../assets/logo/logo.png";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-base-100  bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  bg-white"
          >
            <li>
              <Link
                to="/"
                className={`${
                  location.pathname === "/" ? "underline" : ""
                } text-gray-900 hover:underline`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/community"
                className={`${
                  location.pathname === "/community" ? "underline" : ""
                } text-gray-900 hover:underline`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className={`${
                  location.pathname === "/team" ? "underline" : ""
                } text-gray-900 hover:underline`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${
                  location.pathname === "/contact" ? "underline" : ""
                } text-gray-900 hover:underline`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="tablet:w-[10rem] w-[8rem] cursor-pointer  ml-3"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-end">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? "underline" : ""
              } text-gray-900 hover:underline`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              className={`${
                location.pathname === "/community" ? "underline" : ""
              } text-gray-900 hover:underline`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className={`${
                location.pathname === "/team" ? "underline" : ""
              } text-gray-900 hover:underline`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                location.pathname === "/contact" ? "underline" : ""
              } text-gray-900 hover:underline`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="btn bg-customRed text-white hover:text-whit hover:bg-red-500"
        >
          Get Start
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
