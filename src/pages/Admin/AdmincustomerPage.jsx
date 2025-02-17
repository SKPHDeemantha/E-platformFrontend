import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AdminCustomerPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL+"api/users/details"
      );
      setUsers(response.data);
      setIsLoading(false);
    } catch (err) {
      setError("Failed to fetch users. Please try again later.");
      setIsLoading(false);
      console.error("Failed to fetch users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-slate-200 h-screen flex items-center justify-center">
        <span className="text-lg text-gray-600">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-slate-200 h-screen flex items-center justify-center">
        <span className="text-lg text-red-600">{error}</span>
      </div>
    );
  }

  return (
    <div className="bg-slate-200 h-auto p-5 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-adminprimary to-adminsecondary drop-shadow-lg p-3"
      >
        Customer Details
      </motion.h1>
      <div className="max-w-7xl w-full bg-white rounded-lg shadow-md p-5">
        <table className="w-full table-auto border-collapse border bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="border bg-gradient-to-r from-blue-300 to-purple-200 px-4 py-2 text-left">
                Email
              </th>
              <th className="border bg-gradient-to-r from-blue-300 to-purple-200  px-4 py-2 text-left">
                First Name
              </th>
              <th className="border bg-gradient-to-r from-blue-300 to-purple-200  px-4 py-2 text-left">
                Last Name
              </th>
              <th className="border bg-gradient-to-r from-blue-300 to-purple-200  px-4 py-2 text-left">
                Blocked
              </th>
              <th className="border bg-gradient-to-r from-blue-300 to-purple-200  px-4 py-2 text-left">
                Type
              </th>
              <th className="border bg-gradient-to-r from-blue-300 to-purple-200  px-4 py-2 text-left">
                Profile
              </th>
              <th className="border bg-gradient-to-r from-blue-300 to-purple-200  px-4 py-2 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.firstName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.lastName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.isBlock ? "Yes" : "No"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.type}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-gradient-to-tr from-adminprimary to-adminsecondary text-white px-3 py-1 rounded hover:bg-accent">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
