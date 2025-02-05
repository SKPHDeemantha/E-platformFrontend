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
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-gray-300">
      {/* Header */}
      <Header />

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full flex-grow py-12 px-6">
        
        {/* Contact Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
          <img
            src="/Contact.jpg"
            alt="Contact"
            className="w-full max-w-lg h-auto rounded-xl shadow-xl transition-transform hover:scale-105"
          />
        </div>

        {/* Contact Details */}
        <div className="w-full lg:w-1/2 flex flex-col items-center bg-gradient-to-br from-pink-200 to-purple-100 text-black p-8 rounded-xl shadow-2xl space-y-6">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Get in Touch</h2>
          <p className="text-lg text-center">
            Feel free to reach out to me via any of these platforms:
          </p>

          {/* Contact Links */}
          <div className="w-full flex flex-col space-y-4">
            
            {/* WhatsApp */}
            <a
              href="https://wa.me/0776171219"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-b from-green-500 to-purple-100 rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              <SiWhatsapp className="mr-3 text-2xl" />
              <span className="text-lg">0776171219</span>
            </a>

            {/* Facebook Messenger */}
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-br from-blue-500 to-purple-100 rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              <FaFacebookMessenger className="mr-3 text-2xl" />
              <span className="text-lg">Facebook</span>
            </a>

            {/* Email */}
            <a
              href="mailto:heshandeemantha99@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-br from-purple-600 to-purple-100 rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              <IoIosMailUnread className="mr-3 text-2xl" />
              <span className="text-lg">heshandeemantha99@gmail.com</span>
            </a>
          </div>

          {/* Back to Home Button */}
          <Link to="/" className="w-52">
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-800 text-white rounded-xl hover:scale-105 transition-transform shadow-lg">
              <MdKeyboardDoubleArrowLeft className="text-2xl" />
              <span className="text-lg">Back to Home</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
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