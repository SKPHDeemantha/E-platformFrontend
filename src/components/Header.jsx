import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";
import NavSlider from "./NavSlider";

export default function Header() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  return (
    <>
     
      {isSliderOpen && <NavSlider closeSlider={() => setIsSliderOpen(false)} />}

   
      <header className="bg-pink-800 w-full h-[100px] flex justify-between items-center px-4 md:px-8 shadow-md relative animate-slideIn">

        
        <img
          src="/company logo.jpg"
          alt="Company Logo"
          className="cursor-pointer rounded-full w-16 h-16 md:w-20 md:h-20 absolute left-8"/>

        <FiAlignJustify
          onClick={() => setIsSliderOpen(true)}
          className="text-3xl cursor-pointer text-white lg:hidden absolute right-20"/>



      
        <nav className="hidden lg:flex space-x-8 items-center justify-center absolute right-44">

        <div className="relative hidden lg:flex items-center ">
          <Link
            className="p-2 text-xl text-white shadow-xl  hover:shadow-xl hover:outline flex items-center hover:scale-105 transition-transform hover:rounded-lg"
            to="/cart" >
            <span className=" text-white   text-transparent"> View Cart</span>
            <GiShoppingCart className="ml-1" />
          </Link>
        </div>
          <Link
            to="/"
            className="text-white font-bold shadow-xl p-2 bg-opacity-30 text-xl hover:shadow-xl hover:outline hover:border-b border-primary  hover:scale-105 transition-transform hover:rounded-lg"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-white font-bold p-2 shadow-xl text-xl hover:border-b hover:shadow-xl hover:outline border-primary  hover:scale-105 transition-transform hover:rounded-lg"
          >
            Products
          </Link>
          <Link
            to="/contactus"
            className="text-white p-2 font-bold shadow-xl text-xl hover:border-b hover:shadow-xl hover:outline border-primary  hover:scale-105 transition-transform hover:rounded-lg"
          >
            Contact Us
          </Link>
          <Link
            to="/signup"
            className="text-white p-2 font-bold text-xl shadow-xl hover:border-b hover:shadow-xl hover:outline border-primary  hover:scale-105 transition-transform hover:rounded-lg"
          >
            Sign Up
          </Link>
        </nav>

        {/* Cart for Mobile Screens */}
        {/* <div className="relative lg:hidden">
          <Link
            className="p-2 text-2xl text-white shadow-xl hover:shadow-xl hover:outline hover:text-pink-900 hover:scale-105 transition-transform hover:rounded-lg"
            to="/cart"
          >
            <GiShoppingCart />
          </Link>
          <span className="absolute top-0 right-0 shadow-xl bg-red-500 text-white text-xs rounded-full px-1">
      
          </span>
        </div> */}
      </header>
    </>
  );
}
