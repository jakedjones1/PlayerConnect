// src/components/LogoCarousel.js
import React from "react";
import "./LogoCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Directly referencing images in the public folder
const faLogo = "/images/partner1.png";
const buLogo = "/images/partner2.png";
const premierLeagueLogo = "/images/partner3.png";
const wslLogo = "/images/partner4.png";
const eflLogo = "/images/partner5.png";

const logos = [faLogo, buLogo, premierLeagueLogo, wslLogo, eflLogo];

const LogoCarousel = () => {
  return (
    <div className="logo-carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={2} // Kept small as you originally had it
        spaceBetween={15}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="slide">
            <img src={logo} alt={`Logo ${index + 1}`} className="carousel-logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoCarousel;
