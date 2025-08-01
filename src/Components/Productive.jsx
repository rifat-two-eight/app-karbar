import React from "react";
import { Link } from "react-router";

const Productive = ({ app }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm mb-10">
        <figure>
          <img className="w-96 h-44" src={app.thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {app.name}
            <div className="badge badge-warning text-white">{app.rating}</div>
          </h2>

          <div>
            <div className="text-lg font-semibold text-gray-700">
              Total Downloads :{" "}
              <span className="text-gray-600"> {app.downloads}</span>
            </div>
            <Link to={`/appdetails/${app.id}`}>
              <button className="bg-sky-500 px-3 py-2 text-white font-semibold rounded-xl mt-2 flex cursor-pointer justify-self-end">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productive;
