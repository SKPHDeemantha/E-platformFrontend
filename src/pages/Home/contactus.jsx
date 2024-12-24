import { Link } from "react-router-dom";
import { SiWhatsapp } from "react-icons/si";
import { BiMessageDetail } from "react-icons/bi";

export default function Contactus() {
    return (
        <div className="flex justify-center items-center bg-slate-300 h-screen w-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[60%] h-96 flex flex-col">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Contact Us</h1>
                <div className="bg-emerald-600 h-72 w-72 mt-4 rounded-md overflow-hidden shadow-md">
                    <img 
                        src="/contactus.png"
                        alt="Contact us illustration"
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
                <div className="h-72 w-72 absolute top-56 right-96 shadow-lg flex flex-col items-center justify-center space-y-4">
                    <Link 
                        to="" 
                        className="flex items-center text-gray-800 hover:text-emerald-600 transition"
                    >
                        <SiWhatsapp className="mr-2 text-2xl" />
                        <span className="hover:underline">-070441519</span>
                    </Link>
                    <Link 
                        to="" 
                        className="flex items-center text-gray-800 hover:text-emerald-600 transition"
                    >
                        <BiMessageDetail className="mr-2 text-2xl" />
                        <span className="hover:underline">heshandeemantha99@gmail.com</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
