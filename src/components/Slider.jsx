import React, { useState, useEffect } from "react";

const images = [
  { src: "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//1738522439196EditPage.jpg,EditPage.jpg", caption: "Caption Text" },
  { src: "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//1738522748906cosmetology-natural-product-with-flowers.jpg,cosmetology-natural-product-with-flowers.jpg", caption: "Caption Two" },
  { src: "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//1738948296271Login.jpg,Login.jpg", caption: "Caption Three" },
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative max-w-5xl mx-60 h-32">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={`Slide ${index + 1}`}
            className="w-[600px] h-[450px] object-cover rounded-lg shadow-2xl bg-fixed transition-transform duration-300 group-hover:scale-110 "
          />
          <div className="absolute bottom-4 w-full text-center text-transparent text-lg font-semibold  p-2 rounded-b-lg">
            {image.caption}
          </div>
        </div>
      ))}

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900 transition"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900 transition md:right-20"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 w-full flex justify-center space-x-2 ">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              index === currentSlide ? "bg-gray-900" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
