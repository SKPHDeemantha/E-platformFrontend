import { Link, Route, Routes } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { GiShoppingCart } from "react-icons/gi";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ProductOverView from "./Home/ProductOverview";
import Productpage from "./Home/Productpage";
import Cart from "./Home/Cart";
import { Carousel } from "@material-tailwind/react";
import Footer from "../components/Footer";
import Shipping from "./Home/Shipping";
import Orders from "./Home/Orders";
import ProductNotFound from "./Home/ProductNotFound";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-3 bg-green-400 text-white rounded-full shadow-lg hover:bg-yellow-300"
      >
        ↑
      </button>
    )
  );
}

export default function HomePage() {
  return (
    <div className="relative w-full h-screen bg-slate-100">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/home.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <Header />

      {/* Branding Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[80vh] text-white text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-lg"
        >
          WELCOME TO
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-xl"
        >
          VELVETGLOW
        </motion.h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Discover exclusive deals and handpicked products just for you!
        </p>

        <div className="mt-6 flex space-x-6">
          <Link
            to="/products"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            Explore Products
          </Link>

          <Link
            to="/login"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            Login
          </Link>
        </div>
      </div>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
