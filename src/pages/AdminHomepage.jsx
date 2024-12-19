import { Link } from "react-router-dom";
import { VscGraph } from "react-icons/vsc";

export default function AdminHomepage(){
    return(
        <div className="bg-indigo-950 w-full h-screen flex">

            <div className="bg-zinc-300 w-[20%] h-screen flex flex-col items-center">
                <Link to="/admin/dashboard" className="flex flex-col"><VscGraph/>Dashboard</Link>
                <Link to="/admin/Prdoucts">Products</Link>
                <Link to="/admin/orders">Order</Link>
                <Link to="/admin/Customers">Customers</Link>
            </div>

            <div className="bg-cyan-600 w-[40%] h-screen" ></div>
            
        </div>
    )
}