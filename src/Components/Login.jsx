import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

const Login = () => {
  const location = useLocation();
  const { signInUser, googleLogin } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    googleLogin(googleProvider)
      .then(() => {
        toast.success("Logged in with Google!");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <title>App KarBar | Login</title>
      <form
        onSubmit={handleLogin}
        className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto my-10 p-4 sm:p-6 bg-white shadow-md rounded-lg space-y-5"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800">
          Login to Your Account
        </h2>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
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
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <input
          type="submit"
          value="Login"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md cursor-pointer transition duration-200"
        />
        <p>
          New to this site? Please{" "}
          <Link to="/register" className="text-green-600 font-semibold">
            Register
          </Link>{" "}
          or
        </p>
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full flex items-center justify-center gap-2 btn bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
