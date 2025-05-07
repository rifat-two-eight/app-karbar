import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Apps</NavLink>
      </li>
      <li>
        <NavLink to="/myprofile">My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar my-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <img
            className="w-12 border-2 rounded-full border-b-orange-900"
            src="./src/assets/app-karbar.png"
            alt=""
          />
          <h2 className="text-3xl font-semibold">App KarBar</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-lg">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <li className="btn">Login</li>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
