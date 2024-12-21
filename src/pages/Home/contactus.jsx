import { Link } from "react-router-dom";

export default function Contactus(){
    return(
        <div className="flex justify-center items-center bg-slate-300 h-screen w-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[60%] h-96 flex flex-col">
            <h1>ContactUs</h1>
          <div className="bg-emerald-600 h-72 w-72 items-start justify-start mt-4"> 
             <img  src="/contactus.png"
            alt="This is canva picture."
            className="max-h-full max-w-full object-contain"/>
            </div>
            <div className="bg-orange-950 h-72 w-72  mt-4 absolute top-56 right-96 ">
               <Link to=""></Link>
            </div>

        </div>
        </div>
    )
}