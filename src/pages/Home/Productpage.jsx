import { Link } from 'react-router-dom';
import { ImSearch } from "react-icons/im";
import { GiShoppingCart } from "react-icons/gi";

export default function Productpage() {
  return (
    <div className="content body bg-slate-200 shadow-lg flex flex-col p-2 w-screen h-auto">
  
      <nav className="navbar bg-slate-800 text-white py-4 px-8 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-bold tracking-wide">MyWebsite</h1>
        <div className="flex items-center space-x-4">
          <input 
            className="w-96 p-2 rounded-lg border border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400" 
            type="text" 
            placeholder="Search for products..." 
            aria-label="Search" 
          />
          <Link className="p-2 hover:text-blue-300">
            <ImSearch />
          </Link>
          <Link className="p-2 text-2xl hover:text-blue-300">
            <GiShoppingCart />
          </Link>
        </div>
        <ul className="nav-links flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-300">Home</Link>
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


      <div className="flex-grow bg-gray-600 w-20 h-20">
         
      </div>
    </div>
  );
}
