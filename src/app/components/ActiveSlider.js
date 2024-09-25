import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay'; // Import the autoplay module
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import img1 from "../../../public/News/img-1.jpg";
import img2 from "../../../public/News/img-2.jpg";
import img3 from "../../../public/News/img-3.jpg";
import img4 from "../../../public/News/img-4.jpg";
import Link from "next/link";

const ActiveSlider = () => {
  const [news] = useState([
    {
      image: img1.src,
      headline: "New Engineering Program Announced",
      date: "2024-09-22",
      link: "https://news-website.com/engineering-program",
    },
    {
      image: img2.src,
      headline: "Campus Sports Day Highlights",
      date: "2024-09-19",
      link: "https://news-website.com/sports-day",
    },
    {
      image: img3.src,
      headline: "Alumni Meet 2024",
      date: "2024-09-15",
      link: "https://news-website.com/alumni-meet",
    },
    {
      image: img4.src,
      headline: "Won the College of the Year award 2024",
      date: "2024-09-15",
      link: "https://news-website.com/alumni-meet",
    },
  ]);

  // Swiper instance reference
  const swiperRef = useRef(null);

  // Functions to handle autoplay pause and resume
  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div className='relative flex items-center justify-center flex-col h-[400px] w-full overflow-hidden'>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15
          }
        }}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        loop={true}
        autoplay={{
          delay: 2000, // Adjust the delay as needed
          disableOnInteraction: false, // Continue autoplay even after user interactions
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className='w-auto max-w-[90%] lg:max-w-[80%] shadow-lg transition-shadow duration-300'
        ref={swiperRef}
      >
        {news.map((item) => (
          <SwiperSlide key={item.headline}>
            <Link 
              href={item.link}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='relative flex flex-col gap-6 mb-20 group text-black rounded-xl px-6 py-8 h-[250px] lg:h-[400px] transition-shadow duration-300 overflow-hidden shadow-lg hover:shadow-xl'
            >
              {/* Background Image */}
              <div 
                className='absolute inset-0 bg-cover bg-center rounded-xl transition-transform duration-300 ease-in-out transform group-hover:scale-105 shadow-lg'
                style={{ backgroundImage: `url(${item.image})` }} 
              />
              
              {/* Fade Effect */}
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.9)] rounded-xl' />

              {/* Text Content */}
              <div className='relative flex flex-col gap-3 justify-end h-full z-10'>
                <h1 className='text-white font-bold text-xl lg:text-2xl mb-2'>{item.headline}</h1>
                <p className='lg:text-[18px] text-blue-500'>{item.date}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        onClick={() => swiperRef.current.swiper.slidePrev()}
        className='absolute left-0 top-1/2 transform text-blue-900 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300'
      >
        &#9664; {/* Left arrow */}
      </button>
      <button
        onClick={() => swiperRef.current.swiper.slideNext()}
        className='absolute right-0 top-1/2 transform text-blue-900 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300'
      >
        &#9654; {/* Right arrow */}
      </button>
    </div>
  );
}

export default ActiveSlider;
