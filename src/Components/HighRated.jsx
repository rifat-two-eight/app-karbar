import React from "react";

const HighRated = ({ app }) => {
  console.log(app);
  return (
    <div>
      {/* trending apps */}
      <div className="card bg-base-100 shadow-sm mb-10">
        <figure>
          <img className="w-96 h-44" src={app.thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {app.name}
            <div className="badge badge-warning text-white">{app.rating}</div>
          </h2>

          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighRated;
