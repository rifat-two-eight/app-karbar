import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";
import { use, useState } from "react";

const MyProfile = () => {
  const { user } = use(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const [currentName, setCurrentName] = useState(user?.displayName || "");
  const [currentPhoto, setCurrentPhoto] = useState(user?.photoURL || "");

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, { displayName: name, photoURL });

      setCurrentName(name);
      setCurrentPhoto(photoURL);

      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile: " + error.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 my-10 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center gap-4 mb-8">
        <title>App KarBar | Update</title>
        <img
          src={currentPhoto || "/default-avatar.png"}
          alt="User Avatar"
          className="w-24 h-24 rounded-full object-cover border-2 border-orange-500"
        />
        <p className="text-lg font-semibold">{currentName}</p>
        <p className="text-gray-500">{user?.email}</p>
      </div>

      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Photo URL
          </label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
