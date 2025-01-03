import { Link } from 'react-router-dom';
import { ImSearch } from "react-icons/im";
import { GiShoppingCart } from "react-icons/gi";

export default function HomePage() {
  return (
    <div className="homepage bg-gradient-to-r from-blue-200 to-slate-300 w-screen h-screen">
      {/* Navbar */}
      <nav className="navbar bg-slate-800 text-white py-4 px-8 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-bold tracking-wide">MyWebsite</h1>
        <div className='flex flex-row '>
        <input className='w-96'/>
        <Link className='p-2'><ImSearch /></Link>
        <Link className='p-2 text-2xl'><GiShoppingCart /></Link>
        </div>
        <ul className="nav-links flex space-x-6">
          <li>
            <a href="#home" className="hover:text-blue-300">Home</a>
          </li>
          <li>
            <Link to="/signup" className="hover:text-blue-300">Sign Up</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-blue-300">Login</Link>
          </li>
          <li>
            <Link to="/contactus" className="hover:text-blue-300">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero flex flex-col justify-center items-center text-center h-[80vh] px-6">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-4">
          Welcome to <span className="text-blue-600">MyWebsite</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl">
          Your one-stop destination for awesome content, resources, and inspiration.
        </p>
        <div className="mt-8 flex space-x-4">
          <Link
            to="/contactus"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </header>
    </div>
  );
}
