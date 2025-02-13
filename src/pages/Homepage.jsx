import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductOverView from "./Home/ProductOverview";
import Productpage from "./Home/Productpage";
import Cart from "./Home/Cart";
import Shipping from "./Home/Shipping";
import Orders from "./Home/Orders";
import ProductNotFound from "./Home/ProductNotFound";
import AboutUs from "./About";

function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-4 p-3 bg-green-400 text-white rounded-full shadow-lg hover:bg-yellow-300 md:right-6 md:bottom-6"
    >
      ↑
    </button>
  );
}

const images = [
  {
    src: "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//1739175029869155792-OUGQMF-739.jpg,155792-OUGQMF-739.jpg",
  },
  {
    src: "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//17391748365871041.jpg,1041.jpg",
  },
  {
    src: "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//17391747759272359367.jpg,2359367.jpg",
  },
  {
    src: "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//1739174732405floral-beauty-concept.jpg,floral-beauty-concept.jpg",
  },
];

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden max-w-screen-lg mx-auto">
      <div
        className="flex transition-transform duration-700 shadow-2xl"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-64 sm:h-80 md:h-96 object-cover flex-shrink-0"
          />
        ))}
      </div>
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900"
      >
        &#10094;
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900"
      >
        &#10095;
      </button>
      <div className="absolute bottom-2 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              index === currentSlide ? "bg-gray-900" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  return (
    <div className="relative w-full h-screen flex flex-col">
      <Header isSliderOpen={isSliderOpen} setIsSliderOpen={setIsSliderOpen} />
      <div className="h-[calc(100vh-80px)] overflow-y-auto bg-slate-100">
        <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-[100vh]">
          <img
            src="/Homebackdrop.jpg"
            alt="homebackdrop"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          {!isSliderOpen && (
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-lg"
              >
                WELCOME TO
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-xl"
              >
                VELVETGLOW
              </motion.h2>
              <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl">
                Discover exclusive deals and handpicked products just for you!
              </p>
              <div className="mt-6 flex space-x-4 sm:space-x-6">
                <Link
                  to="/products"
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
                >
                  Explore Products
                </Link>
                <Link
                  to="/login"
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="h-full bg-gradient-to-t from-purple-100 via-red-100 to-pink-50 flex flex-col p-2 mt-5">
          <h1 className="font-extrabold  text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-slate-600  text-3xl sm:text-4xl text-center p-6">
            New Arrival
          </h1>
          <Slideshow />
        </div>
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
}
