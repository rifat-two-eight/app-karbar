import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Apps</NavLink>
      </li>
      <li>
        <NavLink to="/myprofile">My Profile</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Signed out successfully!!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar my-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 -ms-2"
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
            src="/app-karbar.png"
            alt=""
          />
          <h2 className="text-3xl hidden md:flex lg:flex font-semibold">
            App KarBar
          </h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-lg">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-3 items-center">
            <span className="relative group inline-block">
              {user.photoURL ? (
                <>
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    {user.displayName}
                  </div>
                </>
              ) : (
                user.email
              )}
            </span>

            <button
              onClick={handleSignOut}
              className="bg-gray-600 me-3 lg:me-0 md:me-0 px-4 py-2 cursor-pointer font-semibold hover:bg-gray-700 rounded-lg text-white"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-sky-600 me-3 lg:me-0 md:me-0 px-4 py-2 rounded-lg font-semibold hover:bg-sky-700 cursor-pointer text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
