import { Link } from "react-router-dom";
import { SiWhatsapp } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const facebook = "https://www.facebook.com/heshan.deemantha.7/?viewas=100000686899395";

export default function ContactMe() {
  return (
    <div className="w-full h-screen">
   
      <Header />

    
      <div className="flex flex-col lg:flex-row bg-gradient-to-r from-gray-200 via-gray-100 to-slate-50 shadow-2xl w-full h-[calc(100vh-4rem)] items-center justify-center p-10">
        
        <div className="w-full lg:w-[45%] h-[500px] p-5 flex justify-center items-center rounded-2xl shadow-lg">
          <img
            src="/contactus.png"
            alt="Contact"
            className="w-full h-full object-cover rounded-lg animate-pulse"
          />
        </div>

        {/* Contact Details Section */}
        <div className="w-full lg:w-[45%] h-[500px] p-6 shadow-xl flex flex-col justify-center items-center space-y-6 rounded-2xl bg-gradient-to-b from-gray-400 to-gray-300">
          <h2 className="text-3xl font-semibold text-white">Get in Touch</h2>
          <p className="text-white text-lg text-center mb-6">
            Feel free to reach out to me via any of these platforms:
          </p>

          {/* Contact Links */}
          <div className="flex flex-col space-y-4 w-full">
            {/* WhatsApp Link */}
            <Link
              to="https://wa.me/0776171219"
              target="_blank"
              className="flex items-center p-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl hover:scale-105 transition-transform"
            >
              <SiWhatsapp className="mr-3 text-2xl" />
              0776171219
            </Link>

            {/* Facebook Messenger Link */}
            <Link
              to={facebook}
              target="_blank"
              className="flex items-center p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:scale-105 transition-transform"
            >
              <FaFacebookMessenger className="mr-3 text-2xl" />
              Facebook
            </Link>

            {/* Email Link */}
            <Link
              to="mailto:heshandeemantha99@gmail.com"
              target="_blank"
              className="flex items-center p-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:scale-105 transition-transform"
            >
              <IoIosMailUnread className="mr-3 text-2xl" />
              heshandeemantha99@gmail.com
            </Link>
          </div>

          {/* Back to Home Button */}
          <div className="flex flex-grow items-center justify-center space-x-4 mt-6">
            <Link to="/" className="w-52">
              <button className="px-2 py-2 bg-gradient-to-r from-gray-500 to-gray-700 text-white w-full rounded-2xl hover:scale-105 transition-transform flex items-center justify-center space-x-2">
                <MdKeyboardDoubleArrowLeft className="text-2xl" />
                <span className="text-lg">Back to Home</span>
              </button>
            </Link>
          </div>
        </div>
       
      </div>
       <Footer/>
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