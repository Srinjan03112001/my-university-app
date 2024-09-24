// components/AnimatedText.js
"use client";
import React from 'react'
import { motion } from "framer-motion";

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,  // Delays between each word's animation
        },
    },
};

const singleWord = {
    initial: {
        opacity: 0,
        y: 50,  // Start with words moving upwards from 50px
    },
    animate: {
        opacity: 1,
        y: 0,   // Words will return to their natural position
        transition: {
            duration: 1,
        },
    },
};

const AnimatedText = ({ text, className = "" }) => {
    return (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center text-center overflow-hidden">
            <motion.h1
                className={`inline-block text-dark font-bold capitalize text-8xl ${className} dark:text-light`}
                variants={quote}
                initial="initial"
                animate="animate"
                style={{ opacity: 1 }}  // Ensures the text is fully opaque
            >
                {text.split(" ").map((word, index) => (
                    <motion.span
                        key={word + '-' + index}
                        className="inline-block"
                        variants={singleWord}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
};

export default AnimatedText;
