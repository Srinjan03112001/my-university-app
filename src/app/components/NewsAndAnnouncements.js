// NewsAndAnnouncements.js
"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import ActiveSlider from "./ActiveSlider";


export default function NewsAndAnnouncements() {
  // Announcements state
  const [announcements] = useState([
    { text: "Class timings updated for Fall 2024", date: "2024-09-20" },
    { text: "Exam schedule released", date: "2024-09-18" },
    { text: "Holiday on 25th September", date: "2024-09-17" },
  ]);

  // Animation key state
  const [animationKey, setAnimationKey] = useState(0);

  // Timer ref to manage interval
  const timerRef = useRef(null);

  useEffect(() => {
    // Function to handle the animation reset
    const handleAnimationReset = () => {
      setAnimationKey(prevKey => prevKey + 1); // Increment key to restart animation
    };

    // Start interval to handle animation reset and delay
    timerRef.current = setInterval(() => {
      handleAnimationReset();
    }, 15000); // 10 seconds animation + 5 seconds delay

    return () => {
      if (timerRef.current) clearInterval(timerRef.current); // Cleanup interval on unmount
    };
  }, []);

  return (
    <section className="w-full py-10 bg-blue-950 text-black">
      <div className="container mx-auto flex flex-col md:flex-row gap-2">
        {/* Left: Announcements (1/3rd of screen) */}
        <div className="md:w-1/4 bg-white p-6 rounded-lg shadow-lg mx-4">
          <h2 className="text-xl font-semibold mb-4">Announcements</h2>
          <div className="overflow-hidden h-32">
            <motion.div
              key={animationKey} // Key changes to reset animation
              className="space-y-4"
              animate={{ y: [-100, 0] }}
              transition={{ duration: 10, ease: "linear" }}
            >
              {announcements.map((announcement, index) => (
                <div key={index} className="text-sm">
                  <span className="font-semibold">{announcement.date}:</span>{" "}
                  {announcement.text}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right: News Carousel (2/3rd of screen) */}
        <div className="md:w-3/4 bg-transparent p-6 rounded-lg mx-4 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 text-white text-center">News & Articles</h2>
          <ActiveSlider />
        </div>
      </div>
    </section>
  );
}
