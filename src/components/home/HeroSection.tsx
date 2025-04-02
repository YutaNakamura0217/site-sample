"use client"; // Add this directive

import { motion } from "framer-motion";

export default function HeroSection() {
  const waveVariants = {
    animate: () => ({ // Removed unused 'i' parameter
      x: ["-5%", "-50%"], // Equivalent to -1440px for a 2880px wide path in a 1440px viewbox
      // Removed vertical oscillation (y property)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 30, // Corrected duration back to 15
          ease: "easeInOut", // Changed from linear to easeInOut for smoother feel
        },
        // Removed y transition
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative w-full min-h-screen flex items-center pl-30 overflow-hidden">
      {/* SVG Background */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
        className="absolute inset-0 w-full h-full -z-10"
        overflow="visible" // Explicitly allow overflow
      >
        {/* 背景色 */}
        <rect width="1440" height="800" fill="#ffffff"/>
        <g>
          <motion.path
            fill="#000000"
            opacity="0.8"
            d="M0 700 Q 360 600 720 700 T 1440 700 T 2160 700 T 2880 700 V 800 H 0 Z"
            variants={waveVariants}
            // Removed custom prop as 'i' is no longer used
            animate="animate"
          />
        </g>
      </svg>

      {/* Content Container */}
      <div className="z-10 flex flex-col items-center text-black px-4">
        {/* <div className="flex items-center gap-4 mb-4">
          <p className="text-xs font-medium text-[#4B4B4B] leading-loose">Vision</p>
        </div> */}
        {/* <hr className="w-16 border-[#4B4B4B] mb-8" /> */}
        <motion.h1
          className="text-5xl font-light leading-relaxed tracking-tighter mb-2"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0} // First line
        >
          Hogeで、
        </motion.h1>
        <motion.h1
          className="text-5xl font-light leading-relaxed tracking-tighter"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1} // Second line, delayed
        >
          HogeHoge。
        </motion.h1>
      </div>
    </section>
  );
}
