import Image from "next/image";
import React from 'react';

export default function CtaSection() {
  return (
    <section className="w-full flex flex-col md:flex-row border-t border-[#E9E9E9]">
      {/* Downloads CTA */}
      <a href="#" className="flex-1 relative group overflow-hidden p-12 md:p-20 text-left">
        <Image
          src="/cta-download-bg.jpg"
          alt="Downloads Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-10 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-white opacity-80 -z-10"></div> {/* White overlay */}
        <div className="relative z-10">
          <h2 className="text-7xl font-light text-[#292929] leading-tight mb-1">HogeHoge</h2>
          <p className="text-xl font-light text-[#4B4B4B] mb-4">HogeHoge</p>
          <p className="text-base font-light text-[#A9A9A9] leading-loose max-w-md">
            HogeHogeHogeHoge
            HogeHogeHogeHoge
          </p>
        </div>
      </a>

      {/* Contact CTA */}
      <a href="#" className="flex-1 relative group overflow-hidden p-12 md:p-20 text-left border-t md:border-t-0 md:border-l border-[#E9E9E9]">
         <Image
          src="/cta-contact-bg.jpg"
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-10 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-white opacity-80 -z-10"></div> {/* White overlay */}
        <div className="relative z-10">
          <h2 className="text-7xl font-light text-[#292929] leading-tight mb-1">Contact</h2>
          <p className="text-xl font-light text-[#4B4B4B] mb-4">HogeHoge</p>
          <p className="text-base font-light text-[#A9A9A9] leading-loose max-w-md">
            HogeHogeHogeHoge
            HogeHogeHogeHoge
          </p>
        </div>
      </a>
    </section>
  );
}
