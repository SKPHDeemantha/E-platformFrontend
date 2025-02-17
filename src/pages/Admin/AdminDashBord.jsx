import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FullCalendarComponent from "../../components/Calender";
import axios from "axios";
import UploadMediaToSupabase from "../../utils/MediaUpload";
import { toast } from "react-hot-toast";
import AdminNavSlider from "../../components/AdminNavslider";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  async function handleImageUpload(file) {
    try {
      const url = await UploadMediaToSupabase(file);
      setProfilePicture(url);
      toast.success("Profile picture uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload profile picture.");
    }
  }

  async function submit() {
    const user = { email, firstName, lastName, password, profilePicture };
    user.type = "admin";
    try {
      console.log(user);
      await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users", user);
      toast.success("Signup successfully!");
      navigate("/login");
    } catch (err) {
      toast.error("Failed to sign up.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        {isSliderOpen && (
          <AdminNavSlider closeSlider={() => setIsSliderOpen(false)} />
        )}

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-3xl font-bold text-gray-800"
        >
          Admin Dashboard
        </motion.h1>
        <p className="text-gray-600">Overview of system performance</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 ">
        <StatCard
          title="Total Sales"
          value="LKR.12,345"
          color="text-indigo-600 "
        />
        <StatCard title="Total Customers" value="10" color="text-green-600" />
        <StatCard title="Total Orders" value="20" color="text-blue-600" />
        <button
          className="bg-white shadow-xl rounded-lg text-wrap font-bold text-2xl text-pink-600 p-4 hover:scale-105"
          onClick={() => setModalVisible(true)}
        >
          Create Admin
        </button>
      </section>

      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-full max-w-lg bg-white p-8 rounded-lg shadow-2xl">
            <button
              onClick={() => setModalVisible(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            <h1 className="text-2xl font-bold text-center text-adminprimary mb-6 ">
              Create Admin Account
            </h1>

            <label className="block mb-2 font-medium text-adminprimary">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adminprimary"
              placeholder="Enter your email"
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-2 font-medium text-adminprimary">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adminprimary"
                  placeholder="First name"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 font-medium text-adminprimary">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adminprimary"
                  placeholder="Last name"
                />
              </div>
            </div>

            <label className="block mt-4 mb-2 font-medium text-adminprimary">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adminprimary"
              placeholder="Enter your password"
            />

            <label className="block mt-4 mb-2 font-medium text-adminprimary">
              Profile Picture
            </label>
            <input
              type="file"
              onChange={(e) => handleImageUpload(e.target.files[0])}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adminprimary"
            />

            {profilePicture && (
              <img
                src={profilePicture}
                alt="Profile Preview"
                className="w-20 h-20 rounded-full mx-auto mt-2"
              />
            )}

            <button
              onClick={submit}
              className="w-full hover:scale-105 py-3 mt-6 bg-gradient-to-br from-adminprimary to-adminsecondary hover:bg-gradient-to-tr text-white font-bold rounded-lg shadow-lg transition duration-300 text-xl"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}

      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-lg font-bold text-gray-800">Sales Analytics</h2>
        <div className="h-64 flex items-center justify-center bg-gray-50 text-gray-400">
          <p>Graph Placeholder</p>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-lg font-bold text-gray-800">Event Calendar</h2>
        <FullCalendarComponent />
      </section>
    </div>
  );
}

const StatCard = ({ title, value, color }) => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-sm font-medium text-gray-500">{title}</h2>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);
