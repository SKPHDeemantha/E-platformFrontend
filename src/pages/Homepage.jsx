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
    <div className="w-full h-auto flex flex-col bg-slate-100">
 
      <Header />

<div className="w-full flex items-center justify-center py-6">
  <div className="relative w-[85%] sm:w-3/4 md:w-2/3 h-[40vh] rounded-2xl overflow-hidden shadow-xl">
    <Carousel
      loop
      autoplay
      transition={{ duration: 1.5 }}
      className="w-full h-full">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xl md:text-2xl font-bold p-6 text-center"
      >
        Welcome to Our Store - Your one-stop shop for everything!
        <Link
          to="/products"
          className="mt-4 px-5 py-2 bg-white text-indigo-600 rounded-lg shadow hover:scale-105 transition-transform">
          Shop Now
        </Link>
      </motion.div>

      
      <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xl md:text-2xl font-bold p-6 text-center">
        Discover Amazing Products Handpicked Just for You!
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-green-500 to-teal-500 text-white text-xl md:text-2xl font-bold p-6 text-center">
        Exclusive Deals & Discounts Await You!
      </div>
    </Carousel>
  </div>
</div>

   
      <div className="w-full py-8 flex justify-center space-x-6">
        
        <Link
          to="/products"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform glow-on-hover"
        >
          Explore Products
        </Link>

        {/* Login Button */}
        <Link
          to="/login"
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform glow-on-hover"
        >
          Login
        </Link>
      </div>
           

      <div className="w-full flex-grow flex items-center justify-center p-4">
        <Routes>
        
          <Route
            path="/*"
            element={
              <h1 className="text-slate-800 text-3xl text-center">
                Welcome to the <br />
                <span className="text-3xl text-pink-950 font-bold">VELVETGLOW!</span>
              </h1> }/>

      
          <Route
            path="/login"
            element={<h1 className="text-slate-800 text-3xl">Login Page</h1>}/>
          <Route path="/productInfo/:id" element={<ProductOverView />} />
     
          <Route path="/products" element={<Productpage />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping/>}/>
          <Route path="/orders" element={<Orders/>}/>

        </Routes>
      </div>

    
      <ScrollToTop />


      <Footer />
    </div>
  );
}
