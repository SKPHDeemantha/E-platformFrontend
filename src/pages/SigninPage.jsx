import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UploadMeadiaToSupabase from "../utils/MediaUpload";

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
      console.log(result);
      navigate("/login");
      toast.success("Signup successfully!");
    } catch (err) {
      console.error("Error during signup:", err);
      toast.error("Failed to sign up.");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />

        <label className="block mb-2 font-medium">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your first name"
        />

        <label className="block mb-2 font-medium">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your last name"
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />

        <label className="block mb-2 font-medium">Profile Picture</label>
        <input
          type="file"
          onChange={(e) => handleImageUpload(e.target.files[0])}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="button"
          onClick={submit}
          className="w-full py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
