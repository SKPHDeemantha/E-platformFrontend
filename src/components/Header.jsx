import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { FiAlignJustify } from "react-icons/fi";
import NavSlider from "./NavSlider";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isSliderOpen, setIsSliderOpen]=useState(false);
  return (
    <>
      {/* Slider Component */}
      {isSliderOpen && <NavSlider closeSlider={() => setIsSliderOpen(false)} />}

      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-pink-600 to-purple-700 w-full h-[130px] flex justify-between items-center px-6 md:px-10 shadow-lg relative"
      >
        {/* Logo */}
        <motion.img
          src="/company logo.jpg"
          alt="Company Logo"
          className="cursor-pointer rounded-full w-16 h-16 md:w-20 md:h-20 absolute left-6 "
          whileHover={{ scale: 1.1 }}
        />

        {/* Mobile Menu Icon */}
        <FiAlignJustify
          onClick={() => setIsSliderOpen(true)}
          className="text-3xl cursor-pointer text-white lg:hidden absolute right-16"
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center justify-center absolute right-36">
          <motion.div
            className="relative hidden lg:flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            <Link
              className="p-2 text-lg text-white flex items-center transition-all hover:text-yellow-300"
              to="/cart"
            >
              <span className="mr-2">View Cart</span>
              <GiShoppingCart className="text-xl" />
            </Link>
          </motion.div>

          {[
             { to: "/", text: "Home" },
            { to: "/orders", text: "My Orders" },          
            { to: "/products", text: "Products" },
            { to: "/contactus", text: "Contact Us" },
            { to: "/signup", text: "Sign Up" },
          ].map((link, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }}>
              <Link
                to={link.to}
                className="text-white font-semibold p-2 text-lg transition-all hover:text-yellow-300 hover:underline"
              >
                {link.text}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.header>
    </>
  );
}
