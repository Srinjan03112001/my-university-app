"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../../public/Home/img-1.png";
import img2 from "../../../public/Home/img-2.jpg";
import img3 from "../../../public/Home/img-3.jpg";
import img4 from "../../../public/Home/img-4.jpg";
import AnimatedText from "./AnimatedText"; // Import the AnimatedText component

const images = [
  { src: img1, text: "Welcome to CIEM Society" },
  { src: img2, text: "Empowering Education" },
  { src: img3, text: "Join Our Events" },
  { src: img4, text: "Building a Better Future Together" },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Duration for fade transition
        >
          <div className="relative w-full h-full">
            <Image
              src={images[currentIndex].src}
              alt={`Slide ${currentIndex}`}
              fill
              style={{ objectFit: "cover", opacity: 0.5 }} // Cover the full area, with 50% opacity
              priority // Ensures the image is loaded quickly as it's in the hero section
            />
          </div>
          {/* Render the AnimatedText component with the corresponding text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatedText text={images[currentIndex].text} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Controls */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &gt;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
