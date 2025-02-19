import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductOverView from "./Home/ProductOverview";
import Productpage from "./Home/Productpage";
import Shipping from "./Home/Shipping";
import Orders from "./Home/Orders";
import ProductNotFound from "./Home/ProductNotFound";
import axios from "axios";
import toast from "react-hot-toast";
import CustomerFeedbackSlider from "../components/CommentSlideshow";
import StatsCounter from "../components/Counter";

function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-4 p-3 bg-green-400 text-white rounded-full shadow-lg hover:bg-yellow-300 md:right-6 md:bottom-6"
    >
      ↑
    </button>
  );
}

const images = [
  {
    src: "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//1739175029869155792-OUGQMF-739.jpg,155792-OUGQMF-739.jpg",
  },
  {
    src: "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//17391748365871041.jpg,1041.jpg",
  },
  {
    src: "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//17391747759272359367.jpg,2359367.jpg",
  },
  {
    src: "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//1739174732405floral-beauty-concept.jpg,floral-beauty-concept.jpg",
  },
];

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden max-w-screen-lg mx-auto">
      <div
        className="flex transition-transform duration-700 shadow-2xl"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-64 sm:h-80 md:h-96 object-cover flex-shrink-0"
          />
        ))}
      </div>
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900"
      >
        &#10094;
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900"
      >
        &#10095;
      </button>
      <div className="absolute bottom-2 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              index === currentSlide ? "bg-gray-900" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(import.meta.env.VITE_BACKEND_URL + "/api/users/getCurrentUser")
  //     .then((res) => {
  //       if (res.data.user) {
  //         setUser(res.data.user);
  //       } else {
  //         setUser(null);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching user:", err);
  //       setUser(null);
  //     });
  // }, []);

  const handleCommentSubmit = () => {
    if (!user) {
      toast.error("You must be logged in to post a comment.");
      return;
    }

    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
      toast.success("Comment added successfully!");
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col">
      <Header isSliderOpen={isSliderOpen} setIsSliderOpen={setIsSliderOpen} />
      <div className="h-[calc(100vh-80px)] overflow-y-auto bg-slate-100 ">
        <div className="relative w-full h-[87vh] sm:h-[100vh] md:h-[100vh]">
          <img
            src="/Homebackdrop.jpg"
            alt="homebackdrop"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>


          {!isSliderOpen && (
            <div className=" z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 "
            onChange={()=> isSliderOpen(true)}>
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className=" text-5xl sm:text-6xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-pink-600 to-purple-600   drop-shadow-lg"
              >
                WELCOME TO
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="text-5xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-red-500   drop-shadow-xl"
              >
                VELVETGLOW
              </motion.h2>

              
              <motion.p className="z-10 flex mt-4  justify-center drop-shadow-sm text-2xl md:text-xl max-w-2xl text-gray-800 font-semibold"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2 }} 
               onChange={()=> isSliderOpen(true)}>
                Discover exclusive deals and handpicked products just for you!
              </motion.p>
              <div className="z-10 mt-6 flex space-x-4 sm:space-x-6 "
               onChange={()=> isSliderOpen(true)}>
                <Link
                  to="/products"
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg  font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
                >
                  Explore Products
                </Link>
                <Link
                  to="/login"
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="h-full bg-gradient-to-t from-purple-100 via-red-100 to-pink-50 flex flex-col p-2 mt-5">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 1.5,
            }}
            className="font-extrabold font-[nunito] text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-slate-600  text-5xl sm:text-4xl text-center p-6"
          >
            New Launches
            <h2 className="text-lg">New wellness range just for you!</h2>
          </motion.h1>

          <Slideshow />
          
        </div>

        <h1 className="text-2xl font-semibold text-center p-3">
          Why choose us?
        </h1>
        <div className="relative md:ml-16 lg:mr-4">
          <StatsCounter />
        </div>

        <h1 className="text-2xl font-bold flex items-center justify-center mt-5">
          What Our Customers have to say
        </h1>

        <motion.div
          className="flex flex-row"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: "linear",
            duration: 1.5,
            delay: 0.15,
          }}
        >
          <CustomerFeedbackSlider />
        </motion.div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[80%] flex flex-col justify-center items-center mt-5">
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
        </div>
        {/* Routes */}
        <div className="w-full flex-grow flex items-center justify-center p-4">
          <Routes>
            <Route
              path="/*"
              element={
                <h1 className="text-slate-800 text-3xl text-center"> </h1>
              }
            />
            <Route
              path="/login"
              element={<h1 className="text-slate-800 text-3xl">Login Page</h1>}
            />
            <Route path="/productInfo/:id" element={<ProductOverView />} />
            <Route path="/products" element={<Productpage />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/error" element={<ProductNotFound />} />
          </Routes>
        </div>
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
}
