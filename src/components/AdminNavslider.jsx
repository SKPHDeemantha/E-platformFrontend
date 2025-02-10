import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function AdminNavSlider(props) {
  const closeSlider = props.closeSlider;
  return (
    <div className="fixed w-full h-screen bg-[#00000080] z-[10] border-[3px] border-red-900 lg:hidden">
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 flex flex-col  w-[350px] h-screen">
      <div className="bg-gradient-to-r from-pink-300 to-purple-200 w-full h-[100px] relative flex justify-center items-center">
        <img
          src="/company logo.jpg"
          className="cursor-pointer h-[80%] rounded-full absolute left-[10px]  "
        />
        <IoMdClose
          onClick={closeSlider}
          className="text-3xl absolute cursor-pointer text--mycolor lg:hidden border-b-2 ml-60 hover:shadow-2xl hover:border-y-slate-950 "
        />
        </div >
        <h1 className="text-white text-2xl font-bold mt-6">Admin Panel</h1>
        <div className="flex flex-col w-fit h-auto bg-gradient-to-r from-pink-100 mt-4 ml-14">
          <Link
          to="/admin/dashboard"
          className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-2xl hover:border-b border-b-pink-800 p-3 outline-current"
        >
          Dashboard
        </Link>
        <Link
          to="/admin/products"
          className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-2xl hover:border-b border-b-pink-800 p-3"
        >
          Products
        </Link>
        <Link
          to="/admin/orders"
          className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-2xl hover:border-b border-b-pink-800 p-3"
        >
          Orders
        </Link>

        <Link
           to="/admin/customers"
          className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-2xl hover:border-b border-b-pink-800 p-3 "
        >
          Customers
        </Link>
        </div>
      </div>
    </div>
  );
}