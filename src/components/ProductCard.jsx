import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Signinpage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();

  async function signupSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior.

    const formData = new FormData();
    formData.append("email", email);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("password", password);
    formData.append("type", type);
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      const result = await axios.post("http://localhost:3000/api/users/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(result.data);
      toast.success("Signed up successfully!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error("Couldn't sign up successfully.");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Signup Page</h1>
        <form className="space-y-4" onSubmit={signupSubmit}>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Enter your email"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-gray-700 font-medium">
              First Name
            </label>
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              placeholder="Enter your first name"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-gray-700 font-medium">
              Last Name
            </label>
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
              placeholder="Enter your last name"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder="Enter your password"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Type</label>
            <div className="flex items-center space-x-4 mt-1">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  onChange={(e) => setType(e.target.value)}
                  name="type"
                  value="admin"
                  className="form-radio text-blue-500"
                  required
                />
                <span>Admin</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  onChange={(e) => setType(e.target.value)}
                  name="type"
                  value="customer"
                  className="form-radio text-blue-500"
                />
                <span>Customer</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="profilePicture" className="text-gray-700 font-medium">
              Profile Picture
            </label>
            <input
              type="file"
              onChange={(e) => setProfilePicture(e.target.files[0])}
              id="profilePicture"
              accept="image/*"
              className="mt-1 text-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Signup
          </button>
          <p className="text-center text-gray-600 mt-4 text-sm">
            Already Registered?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
