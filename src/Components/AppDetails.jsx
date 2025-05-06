import React from "react";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();
  const app = apps.find((app) => app.id === id);

  if (!app) {
    return <div className="text-center mt-10 text-red-500">App not found!</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="rounded-xl overflow-hidden shadow-md mb-6">
        <img
          src={app.banner}
          alt={app.name}
          className="w-full h-96 object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={app.thumbnail}
          alt={app.name}
          className="w-32 h-32 object-cover rounded-lg border-2 border-orange-500"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{app.name}</h2>
          <p className="text-gray-600">by {app.developer}</p>
          <p className="mt-2 text-sm text-gray-600">
            Category:{" "}
            <span className="font-medium text-orange-500">{app.category}</span>
          </p>
          <p className="text-sm text-gray-600">
            Downloads: {app.downloads.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">Rating: ⭐ {app.rating}</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Description
        </h3>
        <p className="text-gray-700">{app.description}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Key Features
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {app.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          User Reviews
        </h3>
        <div className="space-y-3">
          {app.reviews.map((review, idx) => (
            <div key={idx} className="p-4 bg-gray-100 rounded-md shadow-sm">
              <p className="font-semibold text-orange-600">@{review.user}</p>
              <p className="text-sm text-gray-700">⭐ {review.rating}</p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300">
          Install App
        </button>
      </div>
    </div>
  );
};

export default AppDetails;
