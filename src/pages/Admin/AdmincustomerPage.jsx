import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminCustomerPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users/details");
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
    <div className="bg-slate-200 h-screen p-5 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-5">Customer Details</h1>

      <div className="max-w-7xl w-full bg-white rounded-lg shadow-md p-5">
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-left">First Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Last Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Blocked</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Profile</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.firstName}</td>
                <td className="border border-gray-300 px-4 py-2">{user.lastName}</td>
                <td className="border border-gray-300 px-4 py-2">{user.isBlock ? "Yes" : "No"}</td>
                <td className="border border-gray-300 px-4 py-2">{user.type}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-mycolor text-white px-3 py-1 rounded hover:bg-accent"
                  >
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
