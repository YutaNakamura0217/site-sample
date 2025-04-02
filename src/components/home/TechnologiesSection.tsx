import Image from "next/image";
import React from 'react';

export default function TechnologiesSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-32 bg-[#FCFCFC] text-center">
      <div className="max-w-6xl mx-auto">
        {/* Heading 2 */}
        <div className="mb-8">
          <h2 className="text-5xl font-light text-[#292929] leading-tight">Hoge</h2>
          <p className="text-sm font-light text-[#6A6A6A] mt-2 tracking-wider">Hoge</p>
        </div>

        {/* Heading 3 */}
        <div className="mb-8">
          <h3 className="text-4xl font-light text-black leading-relaxed tracking-wide">
            HogeHoge
          </h3>
          <h3 className="text-4xl font-light text-black leading-relaxed tracking-wide">
            HogeHoge
          </h3>
          <h3 className="text-4xl font-light text-black leading-relaxed tracking-wide">
            HogeHoge
          </h3>
        </div>

        {/* Paragraph */}
        <div className="mb-12 text-base font-light text-black leading-loose max-w-2xl mx-auto">
          <p>
            HogeHoge
          </p>
          <p>
            HogeHoge
          </p>
        </div>

        {/* Technology Visuals and Tabs */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Visual Area */}
          <div className="flex-1 relative min-h-[400px] rounded overflow-hidden">
            {/* Background Image (Start with Communication) */}
            <Image src="/tech/tech-communication.png" alt="Technology Visual" layout="fill" objectFit="cover" className="absolute inset-0 z-0" />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#292929]/80 via-[#E6E6E6]/80 to-transparent opacity-80"></div>
            {/* Add other images here if implementing JS switching */}
            {/* <Image src="/tech/tech-action.png" alt="Technology Visual" layout="fill" objectFit="cover" className="absolute inset-0 z-0 hidden" /> */}
          </div>

          {/* Tabs/List */}
          <div className="flex-1 lg:max-w-md flex flex-col justify-center text-left">
            <a href="#" className="block p-6 border-b border-gray-200 hover:bg-gray-50">
              <span className="text-2xl font-medium text-[#E9E9E9] mr-4">01</span>
              <div>
                <h3 className="text-5xl font-light text-[#F7F7F7] mb-1">HogeHoge</h3>
                <p className="text-sm font-medium text-[#C7C7C7]">HogeHoge</p>
              </div>
            </a>
            <a href="#" className="block p-6 border-b border-gray-200 hover:bg-gray-50">
              <span className="text-2xl font-medium text-[#E9E9E9] mr-4">02</span>
              <div>
                <h3 className="text-5xl font-light text-[#F7F7F7] mb-1">HogeHoge</h3>
                <p className="text-sm font-medium text-[#C7C7C7]">HogeHoge</p>
              </div>
            </a>
            <a href="#" className="block p-6 border-b border-gray-200 hover:bg-gray-50">
              <span className="text-2xl font-medium text-[#E9E9E9] mr-4">03</span>
              <div>
                <h3 className="text-5xl font-light text-[#F7F7F7] mb-1">HogeHoge</h3>
                <p className="text-sm font-medium text-[#C7C7C7]">HogeHoge</p>
              </div>
            </a>
          </div>
        </div>

        {/* Link Button */}
        <a
          href="#" // Replace with actual link if available
          className="inline-block border border-[#C7C7C7] rounded-full py-3 px-8 text-sm font-light text-[#292929] hover:bg-gray-100 transition-colors"
        >
          HogeHoge
        </a>
      </div>
    </section>
  );
}
