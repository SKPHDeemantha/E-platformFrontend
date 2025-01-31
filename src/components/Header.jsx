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

   
      <header className="bg-gradient-to-b from-pink-900 to-red-300 w-full h-[100px] flex justify-between items-center px-4 md:px-8 shadow-md relative">

        
        <img
          src="/company logo.jpg"
          alt="Company Logo"
          className="cursor-pointer rounded-full w-16 h-16 md:w-20 md:h-20 absolute left-4"
        />

{/*     
        <div className="flex items-center space-x-2 w-full max-w-[70%] lg:max-w-[50%] md:ml-20">
          <input
            type="text"
            placeholder="Search for products"
            className="rounded-lg p-2 w-full md:w-96 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <Link className="p-2 text-xl text-white hover:text-pink-900">
            <ImSearch />
          </Link>
        </div> */}

       
        <FiAlignJustify
          onClick={() => setIsSliderOpen(true)}
          className="text-3xl cursor-pointer text-white lg:hidden absolute right-20"
        />


        <div className="relative hidden lg:flex items-center ">
          <Link
            className="p-2 text-xl text-white hover:text-pink-900 hover:shadow-xl hover:outline flex items-center hover:scale-105 transition-transform hover:rounded-lg"
            to="/cart" >
            <span className=" text-white hover:text-pink-900  text-transparent"> View Cart</span>
            <GiShoppingCart className="ml-1" />
          </Link>
        </div>

      
        <nav className="hidden lg:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-white font-bold p-2 bg-opacity-30 text-xl hover:shadow-xl hover:outline hover:border-b border-primary hover:text-pink-900 hover:scale-105 transition-transform hover:rounded-lg"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-white font-bold p-2 text-xl hover:border-b hover:shadow-xl hover:outline border-primary hover:text-pink-900 hover:scale-105 transition-transform hover:rounded-lg"
          >
            Products
          </Link>
          <Link
            to="/contactus"
            className="text-white p-2 font-bold text-xl hover:border-b hover:shadow-xl hover:outline border-primary hover:text-pink-900 hover:scale-105 transition-transform hover:rounded-lg"
          >
            Contact Us
          </Link>
          <Link
            to="/signup"
            className="text-white p-2 font-bold text-xl hover:border-b hover:shadow-xl hover:outline border-primary hover:text-pink-900 hover:scale-105 transition-transform hover:rounded-lg"
          >
            Sign Up
          </Link>
        </nav>

        {/* Cart for Mobile Screens */}
        <div className="relative lg:hidden">
          <Link
            className="p-2 text-2xl text-white hover:shadow-xl hover:outline hover:text-pink-900 hover:scale-105 transition-transform hover:rounded-lg"
            to="/cart"
          >
            <GiShoppingCart />
          </Link>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
      
          </span>
        </div>
      </header>
    </>
  );
}
