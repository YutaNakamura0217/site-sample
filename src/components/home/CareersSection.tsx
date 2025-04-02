import Image from "next/image";
import React from 'react';

export default function CareersSection() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-8 md:px-16 lg:px-32 text-center text-white">
      {/* Background Image */}
      <Image
        src="/careers-bg.jpg"
        alt="Careers Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />
      {/* Optional Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-40 -z-10"></div> */}

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading 2 */}
        <div className="mb-8">
          <h2 className="text-5xl font-light text-white leading-tight">Careers</h2>
          <p className="text-sm font-light text-[#A9A9A9] mt-2 tracking-wider">採用情報</p>
        </div>

        {/* Heading 3 */}
        <div className="mb-8">
          <h3 className="text-4xl font-light text-white leading-normal tracking-wide">
            HogeHoge
          </h3>
        </div>

        {/* Paragraph */}
        <div className="mb-12 text-base font-light text-white leading-loose max-w-2xl mx-auto">
          <p>
            HogeHoge
          </p>
          <p>
            HogeHoge
          </p>
          <p>
            HogeHoge
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#" // Replace with actual link
            className="inline-block border border-[#A9A9A9] rounded-full py-3 px-8 text-sm font-normal text-[#F2F2F2] hover:bg-white/10 transition-colors"
          >
            HogeHoge
          </a>
          <a
            href="#" // Replace with actual link
            className="inline-block border border-[#A9A9A9] rounded-full py-3 px-8 text-sm font-normal text-[#F2F2F2] hover:bg-white/10 transition-colors"
          >
            HogeHoge
          </a>
        </div>
      </div>
    </section>
  );
}
