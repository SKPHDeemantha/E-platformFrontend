import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const CustomerFeedbackSlider = () => {
  const feedbackData = [
    { name: "Tharindu Dilshan", feedback: "Absolutely love this foundation! It blends seamlessly and stays on all day without feeling heavy." },
    { name: "Kasun Madushan", feedback: "The lipstick is so creamy and hydrating. The color payoff is amazing, and it lasts for hours!" },
    { name: "Vishmini Divyangana", feedback: "This highlighter gives the perfect glow without looking too glittery. I always get compliments when I wear it!" },
    { name: "Ashen Sandakelum", feedback: "My skin has never felt better since using this moisturizer. It’s lightweight but super hydrating." },
    { name: "Vishwa Dimantha", feedback: "The mascara makes my lashes look so long and voluminous! No clumps or smudging throughout the day." },
    { name: "Hiruni Maduwanthi", feedback: "I love that this brand uses natural ingredients. My sensitive skin feels great, and I’ve noticed fewer breakouts." },
    { name: "Deshan Dilhara", feedback: "The eyeshadow palette is so pigmented, and the colors blend like a dream. Perfect for both day and night looks!" },
    { name: "Vimukthi", feedback: "This setting spray keeps my makeup in place even in humid weather. A must-have in my routine!" },
    { name: "Nuwan", feedback: "I was skeptical about trying a new brand, but this concealer is a game-changer! Covers dark circles without creasing." },
    { name: "Saduni", feedback: "The scent of this body lotion is heavenly! It absorbs quickly and keeps my skin soft all day." }
  ];

  return (
    <div className="w-full flex justify-center mt-6 px-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-4xl"
      >
        {feedbackData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full bg-pink-200 flex flex-col items-center justify-center text-center p-6 rounded-lg shadow-md">
              <h1 className="text-lg font-bold text-gray-900">{item.name}</h1>
              <p className="text-lg text-gray-800 mt-2">"{item.feedback}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerFeedbackSlider;
