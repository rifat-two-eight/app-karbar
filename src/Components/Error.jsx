import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div>
      <img className="w-1/3 mx-auto" src="./src/assets/error.png" alt="" />
      <div className="flex justify-center">
        <title>App KarBar | Error</title>
        <Link to="/">
          <button className="bg-green-500 px-4 py-2 rounded-md text-white font-semibold cursor-pointer">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
