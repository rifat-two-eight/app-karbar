import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <form className="max-w-sm mx-auto my-12 p-6 bg-white shadow-lg rounded-xl space-y-5">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Your Account
        </h2>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Rifat Vaya"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="hau@mau.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Photo URL
          </label>
          <input
            type="url"
            name="photo"
            id="photo"
            placeholder="https://your-photo-link.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Type your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <input
          type="submit"
          value="Register"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md cursor-pointer transition duration-200"
        />

        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Sign Up with Google
        </button>
        <p className="text-md text-gray-600">
          Already have an account?
          <Link className="text-blue-500 font-semibold" to="/login">
            {" "}
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
