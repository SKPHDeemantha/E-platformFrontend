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
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  async function handleImageUpload(file) {
    try {
      const url = await UploadMeadiaToSupabase(file);
      setProfilePicture(url);
      toast.success("Profile picture uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload profile picture.");
    }
  }

  async function submit() {
    const user = { email, firstName, lastName, password, profilePicture };

    try {
      await axios.post("http://localhost:3000/api/users", user);
      toast.success("Signup successfully!");
      navigate("/login");
    } catch (err) {
      toast.error("Failed to sign up.");
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <img
        src="/Loginpage.jpg"
        alt="Loginpage background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      <button
        onClick={() => setModalVisible(true)}
        className="absolute top-5 right-5 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
      >
        Open Sign Up
      </button>

      {modalVisible && (
        <div className="relative z-10 w-full max-w-lg bg-white p-8 rounded-lg shadow-2xl">
          <button
            onClick={() => setModalVisible(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            ✖
          </button>

          <div className="flex justify-center mb-4">
            <img
              src="/company logo.jpg"
              alt="Company Logo"
              className="w-24 h-24 object-contain rounded-full border-4 border-pink-500"
            />
          </div>

          <h1 className="text-2xl font-bold text-center text-pink-900 mb-6">
            Create Your Account
          </h1>

          <label className="block mb-2 font-medium text-pink-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            placeholder="Enter your email"
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-2 font-medium text-pink-700">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                placeholder="First name"
              />
            </div>

            <div className="flex-1">
              <label className="block mb-2 font-medium text-pink-700">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                placeholder="Last name"
              />
            </div>
          </div>

          <label className="block mt-4 mb-2 font-medium text-pink-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            placeholder="Enter your password"
          />

          <label className="block mt-4 mb-2 font-medium text-pink-700">Profile Picture</label>
          <input
            type="file"
            onChange={(e) => handleImageUpload(e.target.files[0])}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
          />
          
          {/* Show Profile Picture Preview */}
          {profilePicture && (
            <img src={profilePicture} alt="Profile Preview" className="w-20 h-20 rounded-full mx-auto mt-2" />
          )}

          <button
            type="button"
            onClick={submit}
            className="w-full py-3 mt-6 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg shadow-lg transition duration-300"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
