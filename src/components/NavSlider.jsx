import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NavSlider(props) {
  const closeSlider = props.closeSlider;
  return (
    <div className="fixed w-full h-screen bg-[#00000080] z-[10] border-[3px] border-red-900 lg:hidden">
      <div className="bg-white flex flex-col  w-[350px] h-screen">
      <div className="bg-slate-200 w-full h-[100px] relative flex justify-center items-center">
        <img
          src="/company logo.jpg"
          className="cursor-pointer h-[80%] rounded-full absolute left-[10px]  "
        />
        <IoMdClose
          onClick={closeSlider}
          className="text-3xl absolute cursor-pointer text--mycolor lg:hidden border-b-2 ml-60 hover:shadow-2xl hover:border-y-slate-950 "
        />
        </div >
        <div className="flex flex-col w-fit h-auto bg-white mt-4 ml-14">
          <Link
          to="/"
          className="text-mycolor font-bold text-xl hover:border-b border-b-pink-800 p-3 outline-current"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="text-mycolor font-bold text-xl hover:border-b border-b-pink-800 p-3"
        >
          Products
        </Link>
        <Link
          to="/cart"
          className="text-mycolor font-bold text-xl hover:border-b border-b-pink-800 p-3"
        >
           Cart
        </Link>
        <Link
          to="/contact"
          className="text-mycolor font-bold text-xl hover:border-b border-b-pink-800 p-3"
        >
          Contact Us
        </Link>

        <Link
          to="/signup"
          className="text-mycolor font-bold text-xl hover:border-b border-b-pink-800 p-3"
        >
          Sign Up
        </Link>
        </div>
      </div>
    </div>
  );
}