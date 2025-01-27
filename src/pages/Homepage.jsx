import { Link, Route, Routes } from 'react-router-dom';
import { ImSearch } from "react-icons/im";
import { GiShoppingCart } from "react-icons/gi";
import Header from '../components/Header';
import ProductOverView from './Home/ProductOverview';
import Productpage from './Home/Productpage';
import Cart from './Home/Cart';
import { Carousel } from '@material-tailwind/react';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="w-full h-auto flex flex-col bg-slate-100">
      {/* Header Section */}
      <Header />

      {/* Slideshow Section */}
      <div className="w-full h-[50vh] flex items-center justify-center">
        <Carousel
          className="w-3/4 h-full rounded-2xl shadow-lg overflow-hidden"
          loop
          autoplay
          transition={{ duration: 1.5 }}
        >
          <div className="h-full flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-2xl font-bold">
            Welcome to Our Store - Your one-stop shop for everything!
          </div>
          <div className="h-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-500 text-white text-2xl font-bold">
            Discover Amazing Products Handpicked Just for You!
          </div>
          <div className="h-full flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 text-white text-2xl font-bold">
            Exclusive Deals & Discounts Await You!
          </div>
        </Carousel>
      </div>

      {/* Button Navigation Section */}
      <div className="w-full py-8 flex justify-center space-x-6">
        <Link
          to="/products"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          Explore Products
        </Link>
        <Link
          to="/cart"
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          View Cart <GiShoppingCart className="inline ml-2" />
        </Link>
        <Link
          to="/login"
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          Login
        </Link>
      </div>

      {/* Main Content Section */}
      <div className='w-full flex-grow flex items-center justify-center p-4'>
        <Routes>
          <Route path="/*" element={<h1 className="text-slate-800 text-3xl">Welcome to the Home Page!</h1>} />
          <Route path="/login" element={<h1 className="text-slate-800 text-3xl">Login Page</h1>} />
          <Route path="/productInfo/:id" element={<ProductOverView />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}