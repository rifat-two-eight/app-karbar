import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <title>App KarBar | Error</title>

      <img
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-6"
        src="/error.png"
        alt="Error"
      />

      <Link to="/">
        <button className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md text-white font-semibold transition duration-200">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
