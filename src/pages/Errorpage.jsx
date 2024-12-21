import { Link } from "react-router-dom";

export  default function Errorpage(){
    return(
        <div className="h-screen w-[600px] bg-gray-300 flex flex-col">
            <div>
                <h1 className="mt-52 text-4xl text-cyan-800 bg-amber-500 " >OOPS!</h1>
            </div>
            
            <h2 className="mt-5 font-bold text-6xl">Page not found</h2>
            <h3 className="mt-6 ">Sorry,we couldn't find your are looking for.</h3>

        <div className="mt-10 ">
            <Link to="/*">Back to home</Link>
        </div>
    

        </div>
        
    )


}