import { Link } from "react-router-dom";
import { VscGraph } from "react-icons/vsc";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaJediOrder } from "react-icons/fa";
import { LiaUserCircle } from "react-icons/lia";
import Adminproductpage from "./Adminproductpage/Adminproductpage";

export default function AdminHomepage(){
    return(
        <div className="bg-cyan-600  w-full h-screen flex">

            <div className="bg-zinc-300 w-[20%] h-screen flex flex-col items-center text-justify ">
                <Link className="flex flex-row items-center to=/admin/dashboard  text-zinc-600 hover:text-slate-900 "><VscGraph/>Dashboard</Link>
                <Link className="flex flex-row items-center to=/admin/dashboard  text-zinc-600 hover:text-slate-900 "><FaJediOrder/>Products</Link>
                <Link className="flex flex-row items-center to=/admin/dashboard  text-zinc-600 hover:text-slate-900 "><MdProductionQuantityLimits/>Order</Link>
                <Link className="flex flex-row items-center to=/admin/dashboard  text-zinc-600 hover:text-slate-900 "><LiaUserCircle/>Customers</Link>
            </div>

    <div className="bg-indigo-950 w-[80%] h-screen" >
        <Routes path="/*">
            <Route path="/dashboard" element={<h1>Dashboard</h1>}/>
            <Route path="/Products" element={<Adminproductpage/>}/>
            <Route path="/Orders" element={<h1>Orders</h1>}/>
            <Route path="/Customers" element={<h1>customers</h1>}/>
            <Route path="/*" element={<h1>404 ERROR admin page  not found.</h1>}/>
        </Routes>
        </div>
            
    </div>
    )
}