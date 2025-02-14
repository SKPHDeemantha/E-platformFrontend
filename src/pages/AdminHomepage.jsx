import { Link, useNavigate } from "react-router-dom";
import { VscGraph } from "react-icons/vsc";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaJediOrder } from "react-icons/fa";
import { LiaUserCircle } from "react-icons/lia";
import Adminproductpage from "./Admin/Adminproductpage";
import { Routes, Route } from "react-router-dom";
import AddproductForm from "./Admin/AdminproductForm";
import Admincustomerpage from "./Admin/AdmincustomerPage";
import Dashboard from "./Admin/AdminDashBord";

import AdminOrderPage from "./Admin/AdminOrderPage";
import EditProductForm from "./Admin/EditProductForm";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AdminHomepage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    axios
      .get("http://localhost:3000/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.type != "admin") {
          toast.error("Unathorized access");
          navigate("/login");
        } else {
          setUser(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch user data");
        navigate("/login");
      });
  }, []);
  return (
    <div className="bg-white w-full h-screen flex">
      <div className="bg-gradient-to-br from-indigo-950 to-adminsecondary  w-[20%] h-screen flex flex-col items-center text-justify rounded-lg shadow-lg ">
        <h1 className="text-white text-2xl font-bold mt-6">Admin Panel</h1>
        <button className="bg-gradient-to-br from-adminprimary to-cyan-400 hover:bg-gradient-to-tr hover:scale-105 p-4 w-[80%] h-auto text-justify items-center justify-center text-pink-900 shadow-md mt-6 rounded-lg hover:bg-pink-400">
          <Link
            className="flex flex-row items-center text-white text-lg hover:text-pink-900 font-bold"
            to="/admin/dashboard"
          >
            <VscGraph className="mr-2" size={20} />
            Dashboard
          </Link>
        </button>
        <button className="bg-gradient-to-br from-adminprimary to-cyan-400 hover:bg-gradient-to-tr hover:scale-105 p-4 w-[80%] h-auto text-justify items-center justify-center text-pink-900 shadow-md mt-6 rounded-lg hover:bg-pink-400">
          <Link
            className="flex flex-row items-center text-white hover:text-pink-900 font-bold"
            to="/admin/products"
          >
            <FaJediOrder className="mr-2" size={20} />
            Products
          </Link>
        </button>
        <button className="bg-gradient-to-br from-adminprimary to-cyan-400 hover:bg-gradient-to-tr p-4 w-[80%] hover: scale-105 h-auto text-justify items-center justify-center text-pink-900 shadow-md mt-6 rounded-lg hover:bg-pink-400">
          <Link
            className="flex flex-row items-center text-white hover:text-pink-900 font-bold"
            to="/admin/orders"
          >
            <MdProductionQuantityLimits className="mr-2" size={20} />
            Orders
          </Link>
        </button>
        <button className="bg-gradient-to-br from-adminprimary to-cyan-400 hover:bg-gradient-to-tr hover:scale-105 p-4 w-[80%] h-auto text-justify items-center justify-center text-pink-900 shadow-md mt-6 rounded-lg hover:bg-pink-400">
          <Link
            className="flex flex-row items-center text-white hover:text-pink-900 font-bold"
            to="/admin/customers"
          >
            <LiaUserCircle className="mr-2" size={20} />
            Customers
          </Link>
        </button>
      </div>

      <div className="bg-white w-[80%] h-screen p-6 overflow-auto">
        {user != null && (
          <Routes path="/*">
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<Dashboard />} />
            <Route path="/products" element={<Adminproductpage />} />
            <Route path="/products/addproduct" element={<AddproductForm />} />
            <Route path="/products/editproduct" element={<EditProductForm />} />
            <Route path="/orders" element={<AdminOrderPage />} />
            <Route path="/customers" element={<Admincustomerpage />} />
            <Route
              path="/contactus"
              element={<h1 className="text-pink-600 text-3xl">Contact Us</h1>}
            />
            <Route
              path="/*"
              element={
                <h1 className="text-pink-600 text-3xl">404: Page Not Found</h1>
              }
            />
          </Routes>
        )}

        {user == null && (
          <div className="w-full h-full flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32  border-b-2 border-t-2 border-blue-500">
              {" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
