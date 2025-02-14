import { Link } from "react-router-dom";
import { SiWhatsapp } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";

const facebook =
  "https://www.facebook.com/heshan.deemantha.7/?viewas=100000686899395";

export default function ContactMe() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-gray-300">
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
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Get in Touch
          </h2>
          <p className="text-lg text-center">
            Feel free to reach out to me via any of these platforms:
          </p>

          {/* Contact Links */}
          <div className="w-full flex flex-col space-y-4">
            <a
              href="https://wa.me/0776171219"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-b from-green-500 to-purple-100 rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              <SiWhatsapp className="mr-3 text-2xl" />
              <span className="text-lg">0776171219</span>
            </a>

            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-br from-blue-500 to-purple-100 rounded-lg hover:scale-105 transition-transform shadow-lg"
            >
              <FaFacebookMessenger className="mr-3 text-2xl" />
              <span className="text-lg">Facebook</span>
            </a>

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

          {/* Google Maps Location */}
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-2">My Location</h3>
            <h4>282/4 Pitipana South ,Koswaththa,Kiriwaththuduwa.</h4>
            <iframe
              title="My Location"
              className="w-full h-64 rounded-xl shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317714.84323730566!2d79.7874654881924!3d6.92707831308592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593140ad1d0f%3A0x2b3b0a8f3d4d1e6a!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1707902220824"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Comment Section */}
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-2">Leave a Comment</h3>
            <textarea
              className="w-full p-3 rounded-lg shadow-md border border-gray-300"
              rows="3"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
            ></textarea>
            <button
              className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:scale-105 transition-transform shadow-lg"
              onClick={handleCommentSubmit}
            >
              Submit
            </button>
          </div>

          {/* Display Comments */}
          {comments.length > 0 && (
            <div className="w-full mt-4">
              <h3 className="text-xl font-semibold mb-2">Comments</h3>
              <ul className="space-y-2">
                {comments.map((comment, index) => (
                  <li key={index} className="p-3 bg-white rounded-lg shadow-md">
                    {comment}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Back to Home Button */}
          <Link to="/" className="w-52">
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-800 text-white rounded-xl hover:scale-105 transition-transform shadow-lg">
              <MdKeyboardDoubleArrowLeft className="text-2xl" />
              <span className="text-lg">Back to Home</span>
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

{
  /* <div className="flex flex-col space-y-4 w-full">
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
        </div> */
}
