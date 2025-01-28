import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UploadMeadiaToSupabase from "../utils/MediaUpload";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const navigate = useNavigate();

  async function handleImageUpload(file) {
    try {
      const url = await UploadMeadiaToSupabase(file);
      setProfilePicture(url);
      console.log("File uploaded successfully:", url);
      toast.success("Profile picture uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Failed to upload profile picture.");
    }
  }

  async function submit() {
    const user = {
      email,
      firstName,
      lastName,
      password,
      profilePicture,
    };

    try {
      const result = await axios.post("http://localhost:3000/api/users", user);
      console.log(result.data);
      navigate("/login");
      toast.success("Signup successfully!");
    } catch (err) {
      console.error("Error during signup:", err);
      toast.error("Failed to sign up.");
    }
  }

  return (
    <div className="flex justify-center items-center relative min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 p-5">
      <img
                src="/Loginpage.jpg"
                alt="Loginpage background"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            />

      <div className="relative z-10 w-full max-w-md bg-white p-8 rounded-lg shadow-lg sm:mx-auto">
        <div className="flex justify-center mb-4">
          <img
            src="/company logo.jpg"
            alt="Company Logo"
            className="w-24 h-24 object-contain rounded-full border-4 border-pink-500"
          />
        </div>
        <h1 className="text-2xl font-bold text-center text-pink-900 mb-6">Create Your Account</h1>

        <label className="block mb-2 font-medium text-pink-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter your email"
        />

        <label className="block mb-2 font-medium text-pink-700">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter your first name"
        />

        <label className="block mb-2 font-medium text-pink-700">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter your last name"
        />

        <label className="block mb-2 font-medium text-pink-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter your password"
        />

        <label className="block mb-2 font-medium text-pink-700">Profile Picture</label>
        <input
          type="file"
          onChange={(e) => handleImageUpload(e.target.files[0])}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <button
          type="button"
          onClick={submit}
          className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg shadow-lg transition duration-300"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-pink-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
