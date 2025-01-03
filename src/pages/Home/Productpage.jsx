import { Link } from 'react-router-dom';
import { ImSearch } from "react-icons/im";
import { GiShoppingCart } from "react-icons/gi";

export default function Productpage(){
    return(
        <div className="content body bg-slate-200 shadow-lg flex flex-row p-2 w-screen h-auto">
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
          <div className="bg-slate-400 flex w-32 h-28">

          </div>
        </div>
    )
}