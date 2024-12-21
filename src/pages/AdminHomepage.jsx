import { Link } from "react-router-dom";
import { VscGraph } from "react-icons/vsc";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaJediOrder } from "react-icons/fa";
import { LiaUserCircle } from "react-icons/lia";
import Adminproductpage from "./Adminproductpage/Adminproductpage";
import { Routes, Route } from "react-router-dom";


export default function AdminHomepage(){
    return(
        <div className="bg-cyan-600  w-full h-screen flex">

            <div className="bg-zinc-300 w-[20%] h-screen flex flex-col items-center text-justify ">
                <Link className="flex flex-row items-center text-zinc-600 hover:text-slate-900" to="/admin/dashboard  "><VscGraph/>Dashboard</Link>
                <Link className="flex flex-row items-center text-zinc-600 hover:text-slate-900" to="/admin/products "><FaJediOrder/>Products</Link>
                <Link className="flex flex-row items-center text-zinc-600 hover:text-slate-900"  to="/admin/orders "><MdProductionQuantityLimits/>Order</Link>
                <Link className="flex flex-row items-center  text-zinc-600 hover:text-slate-900" to="/admin/customers  "><LiaUserCircle/>Customers</Link>
            </div>

    <div className="bg-indigo-950 w-[80%] h-screen" >
    <Routes path="/*">
          <Route path="/dashboard" element={<h1 className="text-sky-400">Dashboard</h1>} />
          <Route path="/products" element={< Adminproductpage/>} />
          <Route path="/orders" element={<h1 className="text-sky-400" >Orders</h1>} />
          <Route path="/customers" element={<h1 className="text-sky-400" >Customers</h1>} />
          <Route path="/contactus" element={<h1 className="text-sky-400" >Contactus</h1>} />
          <Route path="/*" element={<h1 className="text-sky-400" >404 not found the admin page</h1>}/>
        </Routes>
        </div>
            
    </div>
    )
}