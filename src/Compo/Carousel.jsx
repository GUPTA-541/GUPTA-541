import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  {
    title: "Housefull 5 box office Collection Day 3:",
    img: "https://im.rediff.com/movies/2025/jun/06housefull-5-review1.jpg",
  },
  {
    title: "6 Proofs of the Existence of God That Science Still Struggles to Explain",
    img: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1EZkEJ.img?w=616&h=347&m=6",
  },
  {
    title: "Man Utd reject approach for £36.5m star but sanction major transfer exit",
    img: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1Gmkjo.img?w=768&h=512&m=6&x=968&y=334&s=376&d=376",
  },
];

const Carousel = () => {
  return (
    <Swiper
      className="w-full m-4 h-[400px] rounded-xl overflow-hidden"
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      slidesPerView={1}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i} className="relative w-full h-full">
          <img
            src={slide.img}
            alt={slide.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-60 text-white text-center z-10">
            <h2 className="text-lg font-semibold">{slide.title}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
