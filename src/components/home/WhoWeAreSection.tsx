"use client"; // Mark as a Client Component

import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
// Animation variants
const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const slideInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};


export default function WhoWeAreSection() {
  const controls = useAnimation();
  const ref = React.useRef(null); // Create a ref for useInView
  const isInView = useInView(ref, { once: true, amount: 0.1 }); // Use framer-motion's useInView

  useEffect(() => {
    if (isInView) { // Use the state from framer-motion's useInView
      controls.start('visible');
    }
  }, [controls, isInView]);

  // Removed redundant useEffect hook

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-32 bg-[#FCFCFC] text-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading 2 */}
        <motion.div variants={fadeIn} className="mb-8">
          <h2 className="text-6xl font-light text-[#292929] leading-none">Who We Are</h2>
          <p className="text-sm font-light text-[#6A6A6A] mt-2 tracking-wider">私たちについて</p>
        </motion.div>

        {/* Heading 3 */}
        <motion.div variants={slideInUp} className="mb-8">
          <h3 className="text-4xl font-light text-black leading-relaxed tracking-wide">
            Hogeは、HogeHogeを用いて
          </h3>
          <h3 className="text-4xl font-light text-black leading-relaxed tracking-wide">
            HogeHogeを行うHoge事業会社です。
          </h3>
        </motion.div>

        {/* Paragraph */}
        <motion.div variants={slideInUp} className="mb-12 text-base font-light text-black leading-loose max-w-2xl mx-auto">
          <p>
            HogeHogeをHogeHogeして
          </p>
          <p>
            HogeHogeをHogeHogeして
          </p>
          <p>
            HogeHogeをHogeHogeを行います。
          </p>
        </motion.div> {/* Added missing closing tag */}

        {/* Link Button */}
        <motion.a
          href="#" // Replace with actual link if available
          variants={slideInUp}
          className="inline-block border border-[#C7C7C7] rounded-full py-3 px-8 text-sm font-light text-[#292929] hover:bg-gray-100 transition-colors"
        >
          私たちについてもっと知る
        </motion.a>
      </div>
    </motion.section>
  );
}
