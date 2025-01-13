import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { GiShoppingCart } from "react-icons/gi";

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-primary to-red-300 w-full h-[100px] flex justify-center items-center shadow-md">
  
      <img
        src="/company logo.jpg"
        alt="Company Logo"
        className="cursor-pointer rounded-full absolute left-4 w-20 h-20"
      />
      <div className="h-full flex items-center w-full max-w-screen-lg justify-between px-4 md:px-8">
   
        <div className="flex items-center  p-2">
          <input
            type="text"
            placeholder="Search for products"
            className="rounded-lg p-2 w-96 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            
          />
          <Link className="p-2 hover:text-pink-900">
            <ImSearch />
          </Link>
        </div>

  
        <div className="relative">
          <Link className="p-2 text-2xl hover:text-pink-900">
            <GiShoppingCart />
          </Link>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>

   
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-mycolor font-bold text-xl hover:border-b border-b-primary hover:text-accent"
          >
            Home
          </Link>
          <Link
            to="/product"
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
      </div>
    </header>
  );
}
