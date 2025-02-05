import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ProductOverView from "./Home/ProductOverview";
import Productpage from "./Home/Productpage";
import Cart from "./Home/Cart";
import Shipping from "./Home/Shipping";
import Orders from "./Home/Orders";
import ProductNotFound from "./Home/ProductNotFound";
import Footer from "../components/Footer";

function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-4 p-3 bg-green-400 text-white rounded-full shadow-lg hover:bg-yellow-300"
    >
      ↑
    </button>
  );
}

export default function HomePage() {
  // State to track if slider is open
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  return (
    <div className="relative w-full h-screen flex flex-col">
      {/* Pass state updater to Header */}
      <Header isSliderOpen={isSliderOpen} setIsSliderOpen={setIsSliderOpen} />

      <div className="h-[calc(100vh-80px)] overflow-y-auto bg-slate-100">
        <div className="relative w-full h-[100vh]">
          <img
            src="/Homebackdrop.jpg"
            alt="homebackdrop"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Hide when slider is open */}
          {!isSliderOpen && (
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
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

              {/* Call-to-Action Buttons */}
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
          )}
        </div>

        {/* Routes Section */}
        <div className="w-full flex-grow flex items-center justify-center p-4">
          <Routes>
            <Route
              path="/*"
              element={
                <h1 className="text-slate-800 text-3xl text-center"> </h1>
              }
            />
            <Route
              path="/login"
              element={<h1 className="text-slate-800 text-3xl">Login Page</h1>}
            />
            <Route path="/productInfo/:id" element={<ProductOverView />} />
            <Route path="/products" element={<Productpage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/error" element={<ProductNotFound />} />
          </Routes>
        </div>

        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
}
