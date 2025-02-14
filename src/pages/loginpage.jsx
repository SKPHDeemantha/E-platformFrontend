import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [loarding, setLoarding] = useState(false);
  const googleLogin = useGoogleLogin({
    onSuccess: (res) => {
      console.log(res);
      axios
        .post("http://localhost:3000/api/users/google", {
          token: res.access_token,
        })
        .then((res) => {
          if (res.data.message == "User created") {
            toast.success(
              "Your account is created now you can login via google."
            );
          } else {
            localStorage.setItem("token", res.data.token);
            if (res.data.user.type == "admin") {
              window.location.href = "/admin";
            } else {
              window.location.href = "/";
            }
          }
        });
    },
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/users/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.user == null) {
          toast.error(res.data.message);
          return;
        }
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        if (res.data.user.type === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      })
      .catch(() => {
        toast.error("An error occurred. Please try again.");
      });
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-fuchsia-200 to-pink-300">
      {loarding && (
        <div className="flex justify-center items-center h-80">
          <div className="animate-spin rounded-xl h-16 w-16 border-4 border-gray-300 border-t-mycolor"></div>
        </div>
      )}

      <div className="flex bg-white/100 shadow-2xl rounded-lg p-8 w-full max-w-4xl mx-4 sm:mx-auto ">
        {/* Left Side - Image */}
        <div className="w-1/2 hidden sm:block">
          <img
            src="/cosmetic.jpg"
            alt="Loginpage background"
            className="w-full h-full object-cover rounded-lg "
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center p-6">
          <div className="flex justify-center mb-6">
            <img
              src="/company logo.jpg"
              alt="Company Logo"
              className="w-24 h-24 object-contain rounded-full border-4 items-center justify-center border-pink-500"
            />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-lg items-center justify-center ml-20 font-serif"
          >
            WELCOME
          </motion.h1>

          <form onSubmit={login}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-pink-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-pink-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:scale-105 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition"
            >
              Login
            </button>

            <button
              type="button"
              className="w-full bg-black text-transparent flex flex-row  hover:scale-105  text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition mt-4 items-center justify-center"
              onClick={() => {
                googleLogin();
              }}
            >
              <FcGoogle className="text-xl mr-2" />
              Login with Google
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-pink-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
