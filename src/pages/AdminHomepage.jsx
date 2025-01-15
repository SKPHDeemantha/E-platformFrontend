import { Link } from "react-router-dom";
import { VscGraph } from "react-icons/vsc";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaJediOrder } from "react-icons/fa";
import { LiaUserCircle } from "react-icons/lia";
import Adminproductpage from "./Admin/Adminproductpage";
import { Routes, Route } from "react-router-dom";
import AddproductForm from "./Admin/AdminproductForm";
import Admincustomerpage from "./Admin/AdmincustomerPage";
import Dashboard from "./Admin/AdminDashBord";
import Orders from "./Admin/AdminOrderPage";
import AdminOrderPage from "./Admin/AdminOrderPage";
import EditProductForm from "./Admin/EditProductForm";

export default function AdminHomepage() {
  return (
    <div className="bg-pink-100 w-full h-screen flex">

      {/* Sidebar */}
      <div className="bg-pink-100 w-[20%] h-screen flex flex-col items-center text-justify rounded-lg shadow-lg">
        <h1 className="text-pink-700 text-2xl font-bold mt-6">Admin Panel</h1>
        <button className="bg-pink-300 p-4 w-[80%] h-auto text-justify items-center justify-center text-pink-900 shadow-md mt-6 rounded-lg hover:bg-pink-400">
          <Link className="flex flex-row items-center text-pink-700 hover:text-pink-900" to="/admin/dashboard">
            <VscGraph className="mr-2" />
            Dashboard
          </Link>
        </button>
        <button className="bg-pink-300 p-4 w-[80%] h-auto text-justify items-center justify-center text-pink-900 shadow-md mt-6 rounded-lg hover:bg-pink-400">
          <Link className="flex flex-row items-center text-pink-700 hover:text-pink-900" to="/admin/products">
            <FaJediOrder className="mr-2" />
            Products
          </Link>
        </button>
        <button className="bg-pink-300 p-4 w-[80%] h-auto text-justify items-center justify-center text-pink-900 shadow-md mt-6 rounded-lg hover:bg-pink-400">
          <Link className="flex flex-row items-center text-pink-700 hover:text-pink-900" to="/admin/orders">
            <MdProductionQuantityLimits className="mr-2" />
            Orders
          </Link>
        </button>
        <button className="bg-pink-300 p-4 w-[80%] h-auto text-justify items-center justify-center text-pink-900 shadow-md mt-6 rounded-lg hover:bg-pink-400">
          <Link className="flex flex-row items-center text-pink-700 hover:text-pink-900" to="/admin/customers">
            <LiaUserCircle className="mr-2" />
            Customers
          </Link>
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-pink-50 w-[80%] h-screen p-6 overflow-auto">
        <Routes path="/*">
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Adminproductpage />} />
          <Route path="/products/addproduct" element={<AddproductForm />} />
          <Route path="/products/editproduct" element={<EditProductForm />} />
          <Route path="/orders" element={<AdminOrderPage />} />
          <Route path="/customers" element={<Admincustomerpage />} />
          <Route path="/contactus" element={<h1 className="text-pink-600 text-3xl">Contact Us</h1>} />
          <Route path="/*" element={<h1 className="text-pink-600 text-3xl">404: Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}
