import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";

const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();
  const app = apps.find((app) => app.id === id);
  const { user } = useContext(AuthContext);

  const [isInstalled, setIsInstalled] = useState(false);
  const [wasInstalled, setWasInstalled] = useState(false);
  const [reviews, setReviews] = useState(app?.reviews || []);

  if (!app) {
    return <div className="text-center mt-10 text-red-500">App not found!</div>;
  }

  const handleToggleInstall = () => {
    setIsInstalled(!isInstalled);
    if (!wasInstalled) setWasInstalled(true);
    toast.success(isInstalled ? "App uninstalled!" : "App installed!");
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const rating = e.target.rating.value;
    const comment = e.target.comment.value;

    const newReview = {
      user: user.displayName || user.email,
      rating,
      comment,
    };

    setReviews([newReview, ...reviews]);
    e.target.reset();
    toast.success("Review submitted!");
  };

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
        {reviews.length > 0 ? (
          <div className="space-y-3">
            {reviews.map((review, idx) => (
              <div key={idx} className="p-4 bg-gray-100 rounded-md shadow-sm">
                <p className="font-semibold text-orange-600">@{review.user}</p>
                <p className="text-sm text-gray-700">⭐ {review.rating}</p>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No reviews yet.</p>
        )}
      </div>

      <div className="text-center mt-8 mb-8">
        <button
          onClick={handleToggleInstall}
          className={`${
            isInstalled
              ? "text-white bg-red-600 hover:bg-red-700"
              : "text-white bg-green-600 hover:bg-green-700"
          } font-bold py-2  cursor-pointer px-6 rounded-lg transition duration-300`}
        >
          {isInstalled ? "Uninstall App" : "Install App"}
        </button>
      </div>

      {user && wasInstalled && (
        <div className="mt-10 bg-gray-50 p-6 rounded-md shadow-md max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Submit a Review
          </h3>
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Rating (1-5)
              </label>
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Comment
              </label>
              <textarea
                name="comment"
                rows="3"
                required
                placeholder="Your review..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Submit Review
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AppDetails;
