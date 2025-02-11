import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-green-50 ">
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
        <Header />
      </div>

      <div className="min-h-screen px-4 md:px-8 lg:px-16 mt-28">
        <div className="max-w-4xl mx-auto text-center">
        <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-slate-900 via-pink-500 to-purple-600 drop-shadow-lg p-5"
            >
             About Us
            </motion.h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            We are passionate about driving sustainable beauty forward. Our
            mission is to inspire conscious consumerism and promote eco-friendly
            trends that protect our planet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          <div className="flex items-center justify-center">
            <motion.img
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
              src="https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//vision4.jpg"
              alt="Our Mission"
              className="rounded-3xl shadow-2xl object-cover w-full h-60 md:h-80 hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-2">
                Our Mission
              </h2>
              <p className="text-gray-800 leading-relaxed text-sm md:text-base text-justify">
                To empower individuals to feel confident and beautiful by
                providing high-quality, sustainable, and innovative cosmetics
                that celebrate diversity and self-expression.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-2">
                Our Vision
              </h2>
              <p className="text-gray-800 leading-relaxed text-sm md:text-base text-justify">
                We aim to offer premium, cruelty-free, and eco-friendly cosmetic
                products that enhance natural beauty. We are committed to
                inclusivity, continuous innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-purple-200 p-6 md:p-8 rounded-2xl shadow-md mt-10">
          <h1 className="text-2xl md:text-3xl font-bold text-purple-800 mb-3 text-center">Why Choose Us?</h1>
          <p className="text-gray-700 text-lg md:text-base leading-relaxed text-justify font-semibold">
            At VelvetGlow, we believe beauty is more than skin deep—it's a
            reflection of confidence, authenticity, and care. What sets us apart
            is our commitment to crafting premium, cruelty-free cosmetics that
            not only enhance your natural beauty but also nourish your skin.
            Every product is thoughtfully designed with high-quality,
            eco-friendly ingredients to ensure a luxurious, guilt-free
            experience. We celebrate diversity, inclusivity, and
            self-expression, empowering you to glow in your own unique way. With
            VelvetGlow, you’re not just choosing cosmetics; you’re choosing a
            brand that values you, your skin, and the planet.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <img
            src="https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//vision3.jpg"
            alt="Our Vision"
            className="rounded-3xl shadow-2xl object-cover w-full h-60 md:h-72 hover:scale-105 transition-transform duration-500"
          />
          <img
            src="https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//vision5.jpg"
            alt="Our Journey"
            className="rounded-3xl shadow-2xl object-cover w-full h-60 md:h-72 hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="mt-12 bg-purple-100 p-6 md:p-10 rounded-3xl shadow-inner max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-2xl font-bold text-purple-800 mb-4">
            Join Us on Our Journey
          </h3>
          <p className="text-gray-700 text-lg md:text-base leading-relaxed ">
            Together, we can make a difference. Explore our collections, learn
            about sustainable cosmetics, and be part of the change.
          </p>
          <p className="text-gray-800 italic mt-4 text-lg font-semibold">
            Our journey began with a simple belief—that beauty should be
            authentic, inclusive, and kind to both people and the planet.
            Inspired by diversity and individuality, we create cosmetics that
            focus on quality, sustainability, and self-expression. This is not
            just our journey—it’s yours, too.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}