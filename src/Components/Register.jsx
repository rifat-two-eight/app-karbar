import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, googleLogin } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    if (!uppercaseRegex.test(password)) {
      toast.error("Password must include at least one uppercase letter.");
      return;
    }
    if (!lowercaseRegex.test(password)) {
      toast.error("Password must include at least one lowercase letter.");
      return;
    }
    createUser(email, password)
      .then((res) => {
        toast.success("Registered successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGoogleRegister = () => {
    const googleProvider = new GoogleAuthProvider();
    googleLogin(googleProvider)
      .then((res) => {
        toast.success("Registered with Google!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <title>App KarBar | Register</title>
      <form
        onSubmit={handleRegister}
        className="max-w-2xl mx-auto my-12 p-6 bg-white shadow-lg rounded-xl space-y-5"
      >
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
          onClick={handleGoogleRegister}
          type="button"
          className="w-full cursor-pointer flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition duration-200"
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
