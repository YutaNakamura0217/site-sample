import Image from "next/image";
import React from 'react';

export default function ProjectsSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-br from-[#252525] to-[#1F1E1E] text-center text-white">
      {/* Background SVG elements are complex, skipping for now */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading 2 */}
        <div className="mb-8">
          <h2 className="text-5xl font-light text-[#F2F2F2] leading-tight">Projects</h2>
          <p className="text-sm font-light text-[#C7C7C7] mt-2 tracking-wider">実績</p>
        </div>

        {/* Heading 3 */}
        <div className="mb-8">
          <h3 className="text-4xl font-light text-[#F2F2F2] leading-none">
            Hoge Hoge 
          </h3>
          <h3 className="text-4xl font-light text-[#F2F2F2] leading-none mt-2">
            Hoge Hoge 
          </h3>
          <h3 className="text-4xl font-light text-[#F2F2F2] leading-none mt-2">
            Hoge Hoge 
          </h3>
        </div>

        {/* Paragraph */}
        <div className="mb-12 text-base font-light text-[#E9E9E9] leading-loose max-w-3xl mx-auto">
          <p>
            Hoge、Hoge、Hoge、Hoge、Hoge、Hoge、Hogeなど、
          </p>
          <p>
            Hoge、Hoge、Hoge、Hoge、Hoge、Hoge、Hoge
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Placeholder Project 1 */}
          <a href="#" className="block bg-gray-700 aspect-[4/3] rounded flex items-center justify-center text-gray-400">Placeholder</a>
          {/* Placeholder Project 2 */}
          <a href="#" className="block bg-gray-700 aspect-[4/3] rounded flex items-center justify-center text-gray-400">Placeholder</a>
          {/* Placeholder Project 3 */}
          <a href="#" className="block bg-gray-700 aspect-[4/3] rounded flex items-center justify-center text-gray-400">Placeholder</a>
          {/* Placeholder Project 4 */}
          <a href="#" className="block bg-gray-700 aspect-[4/3] rounded flex items-center justify-center text-gray-400">Placeholder</a>

          {/* J-POWER Project */}
          <a href="#" className="block relative group rounded overflow-hidden aspect-[4/3]">
            <Image src="/project-jpower.png" alt="J-POWER Project" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-[#1C1C1C]/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
              <p className="text-sm font-light text-[#E9E9E9] mb-2">Hoge</p>
              <div className="flex items-center text-xs font-light text-[#E9E9E9] mb-3">
                <span className="mr-1">#</span>
                <span>Hoge</span>
              </div>
              <h4 className="text-xl font-light text-[#F2F2F2] leading-snug">
                Hoge、Hoge、Hoge、Hoge、Hoge、Hoge、Hoge
              </h4>
            </div>
          </a>

          {/* Placeholder Project 6 */}
          <a href="#" className="block bg-gray-700 aspect-[4/3] rounded flex items-center justify-center text-gray-400">Placeholder</a>
        </div>

        {/* Link Button */}
        <a
          href="#" // Replace with actual link if available
          className="inline-block border border-[#C7C7C7] rounded-full py-3 px-8 text-sm font-light text-[#F2F2F2] hover:bg-white/10 transition-colors"
        >
          すべての実績を見る
        </a>
      </div>
    </section>
  );
}
