import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const CustomerFeedbackSlider = () => {
  const feedbacks = [
    "Absolutely love this foundation! It blends seamlessly and stays on all day without feeling heavy.",
    "The lipstick is so creamy and hydrating. The color payoff is amazing, and it lasts for hours!",
    "This highlighter gives the perfect glow without looking too glittery. I always get compliments when I wear it!",
    "My skin has never felt better since using this moisturizer. It’s lightweight but super hydrating.",
    "The mascara makes my lashes look so long and voluminous! No clumps or smudging throughout the day.",
     "I love that this brand uses natural ingredients. My sensitive skin feels great, and I’ve noticed fewer breakouts.",
     "The eyeshadow palette is so pigmented, and the colors blend like a dream. Perfect for both day and night looks!",
     "This setting spray keeps my makeup in place even in humid weather. A must-have in my routine!",
     "I was skeptical about trying a new brand, but this concealer is a game-changer! Covers dark circles without creasing.",
     "The scent of this body lotion is heavenly! It absorbs quickly and keeps my skin soft all day."
  ];

  return (
    <div className="w-full flex justify-center mt-6 px-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-4xl"
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-auto bg-slate-200 flex items-center justify-center text-center p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-800 text-wrap ">"{feedback}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerFeedbackSlider;
