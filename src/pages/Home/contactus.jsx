import { Link } from "react-router-dom";
import { SiWhatsapp } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Header from "../../components/Header";

const facebook = "https://www.facebook.com/heshan.deemantha.7/?viewas=100000686899395";

export default function ContactMe() {
  return (
    <div className="w-full h-screen">
      <Header/>
    <div className="flex flex-col lg:flex-row bg-gradient-to-r from-gray-800 via-gray-700 to-gray-500 shadow-lg w-full h-[calc(100vh-4rem)] items-center justify-center p-10">
      
      <div className="w-full lg:w-[45%] h-[500px] p-5 flex justify-center items-center rounded-2xl shadow-lg">
        <img src="/contact.jpg" alt="Contact" className="w-full h-full object-cover rounded-lg" />
      </div>

    
      <div className="w-full lg:w-[45%] h-[500px] p-6 shadow-xl flex flex-col justify-center items-center space-y-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800">
        <h2 className="text-3xl font-semibold text-white">Get in Touch</h2>
        <p className="text-white text-lg text-center mb-6">Feel free to reach out to me via any of these platforms:</p>

        <div className="flex flex-col space-y-4 w-full">
          <Link className="flex items-center p-4 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition duration-300">
            <SiWhatsapp className="mr-3 text-2xl" />
            0776171219
          </Link>
          <Link className="flex items-center p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300">
            <FaFacebookMessenger className="mr-3 text-2xl" />
            facebook
          </Link>
          <Link className="flex items-center p-4 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition duration-300">
            <IoIosMailUnread className="mr-3 text-2xl" />
            heshandeemantha99@gmail.com
          </Link>
        </div>

        <div className="flex flex-grow items-center justify-center space-x-4 mt-6">
  <Link to="/" className="w-52">
    <button
      className="px-2 py-2 bg-gray-500 text-white w-full rounded-2xl hover:bg-gray-600 transition duration-300 flex items-center justify-center space-x-2"
    >
      <MdKeyboardDoubleArrowLeft className="text-2xl" />
      <span className="text-lg">Back to Home</span>
    </button>
  </Link>
</div>

      </div>
    </div>
    </div>
  );
}

{/* <div className="flex flex-col space-y-4 w-full">
          <Link className="flex items-center p-4 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition duration-300">
            <SiWhatsapp className="mr-3 text-2xl" />
            0776171219
          </Link>
          <Link className="flex items-center p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300">
            <FaFacebookMessenger className="mr-3 text-2xl" />
            facebook
          </Link>
          <Link className="flex items-center p-4 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition duration-300">
            <IoIosMailUnread className="mr-3 text-2xl" />
            heshandeemantha99@gmail.com
          </Link>
        </div> */}