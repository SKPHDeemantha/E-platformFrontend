import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { GiShoppingCart } from "react-icons/gi";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";
import NavSlider from "./NavSlider";

export default function Header() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  return (
    <>
      {isSliderOpen && <NavSlider closeSlider={() => setIsSliderOpen(false)} />}
      <header className="bg-gradient-to-b from-primary to-red-300 w-full h-[100px] flex justify-between items-center px-4 md:px-8 shadow-md relative">

        <img
          src="/company logo.jpg"
          alt="Company Logo"
          className="cursor-pointer rounded-full w-16 h-16 md:w-20 md:h-20 absolute left-4"
        />

        
        <div className="flex items-center space-x-2 w-full max-w-[70%] lg:max-w-[50%] md:ml-20">
          <input
            type="text"
            placeholder="Search for products"
            className="rounded-lg p-2 w-full md:w-96 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <Link className="p-2 text-xl text-gray-700 hover:text-pink-900">
            <ImSearch />
          </Link>
        </div>

        
        <FiAlignJustify
          onClick={() => setIsSliderOpen(true)}
          className="text-3xl cursor-pointer text-mycolor lg:hidden absolute right-4"
        />

       
        <div className="relative hidden lg:flex">
          <Link className="p-2 text-2xl text-gray-700 hover:text-pink-900" to="/cart">
            <GiShoppingCart />
          </Link>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>

        
        <div className="hidden lg:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-mycolor font-bold text-xl hover:border-b border-b-primary hover:text-accent"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-mycolor font-bold text-xl hover:border-b border-b-primary hover:text-accent"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-mycolor font-bold text-xl hover:border-b border-b-primary hover:text-accent"
          >
            About Us
          </Link>
          <Link
            to="/contactus"
            className="text-mycolor font-bold text-xl hover:border-b border-b-primary hover:text-accent"
          >
            Contact Us
          </Link>
        </div>

        <div className="relative lg:hidden">
          <Link className="p-2 text-2xl text-gray-700 hover:text-pink-900" to="/cart">
            <GiShoppingCart />
          </Link>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
       
          </span>
        </div>
      </header>
    </>
  );
}
