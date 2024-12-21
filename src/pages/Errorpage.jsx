import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export  default function Errorpage(){
    return(
        <div className="flex h-screen">
        <div className=" w-[45%] bg-gray-300 flex flex-col items-center justify-center">
            <div>
                <h1 className="mt-52 text-4xl text-cyan-800">OOPS!</h1>
            </div>
            
            <h2 className="mt-5 font-bold text-6xl from-neutral-900">Page not found</h2>
            <h3 className="mt-6 ">Sorry,we couldn't find your are looking for.</h3>

        <div className="mt-10 ">
            <Link className="flex flex-row items-center  text-zinc-600 hover:text-slate-900" to="/*" ><MdKeyboardDoubleArrowLeft className="mr-2"/>Back to home</Link>
        
        </div>
        
        <div className="bg-red-300 mt-52 py-8 px-28 w-[100%] item center justify-center h-screen" >ContactUs</div>
        <Link to="/contactus"></Link>
       </div>

       <div className="bg-orange-200  h-screen w-[55%]">
        <img src="https://www.istockphoto.com/photo/warning-attention-symbol-with-exclamation-mark-in-the-triangle-on-the-abstract-human-gm2148676029-569861452?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Ferror%2F&utm_term=error"
          alt="This is a picture"
          className="max-h-full max-w-full object-contain"/>
       </div>
        
     </div>
        
    );

}