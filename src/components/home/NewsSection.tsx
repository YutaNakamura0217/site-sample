import Image from "next/image";
import React from 'react';

export default function NewsSection() {
  return (
    <section className="w-full bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto py-20 px-4 sm:px-8 md:px-16 lg:px-32 text-center">
        {/* Heading 2 */}
        <div className="mb-8">
          <h2 className="text-5xl font-light text-[#292929] leading-tight">News</h2>
          <p className="text-sm font-light text-[#6A6A6A] mt-2 tracking-wider">ニュース</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="py-2 px-5 text-base font-light text-[#1C1C1C] bg-white rounded-full shadow-sm hover:bg-gray-100">すべて</button>
          <button className="py-2 px-5 text-base font-light text-[#7F7F7F] bg-transparent rounded-full hover:bg-gray-100">プレスリリース</button>
          <button className="py-2 px-5 text-base font-light text-[#7F7F7F] bg-transparent rounded-full hover:bg-gray-100">お知らせ</button>
          <button className="py-2 px-5 text-base font-light text-[#7F7F7F] bg-transparent rounded-full hover:bg-gray-100">技術情報</button>
          <button className="py-2 px-5 text-base font-light text-[#7F7F7F] bg-transparent rounded-full hover:bg-gray-100">メディア掲載</button>
          <button className="py-2 px-5 text-base font-light text-[#7F7F7F] bg-transparent rounded-full hover:bg-gray-100">オウンドメディア</button>
        </div>

        {/* News Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-left">
          {/* Article 1 */}
          <a href="#" className="block border-b border-[#E9E9E9] pb-6 group">
            <div className="relative aspect-video mb-4 rounded overflow-hidden border border-[#F2F2F2]">
              <Image src="/news/news-aux-pricing.png" alt="News 1" layout="fill" objectFit="cover" />
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-light text-[#6A6A6A]">プレスリリース</span>
              <time className="text-sm font-medium text-[#A9A9A9]">2025.02.03</time>
            </div>
            <h3 className="text-lg font-light text-[#1C1C1C] leading-relaxed tracking-wide mb-4 group-hover:underline">
                HogeHoge
            </h3>
            <div className="flex justify-end">
              <span className="text-xl text-[#F2F2F2] bg-[#F2F2F2] rounded-full h-7 w-7 flex items-center justify-center group-hover:bg-[#E9E9E9]">
                <span className="text-[#1C1C1C]">→</span> {/* Placeholder Arrow */}
              </span>
            </div>
          </a>
          {/* Article 2 */}
          <a href="#" className="block border-b border-[#E9E9E9] pb-6 group">
            <div className="relative aspect-video mb-4 rounded overflow-hidden border border-[#F2F2F2]">
              <Image src="/news/news-patent.png" alt="News 2" layout="fill" objectFit="cover" />
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-light text-[#6A6A6A]">プレスリリース</span>
              <time className="text-sm font-medium text-[#A9A9A9]">2024.12.13</time>
            </div>
            <h3 className="text-lg font-light text-[#1C1C1C] leading-relaxed tracking-wide mb-4 group-hover:underline">
                HogeHoge
            </h3>
            <div className="flex justify-end">
               <span className="text-xl text-[#F2F2F2] bg-[#F2F2F2] rounded-full h-7 w-7 flex items-center justify-center group-hover:bg-[#E9E9E9]">
                 <span className="text-[#1C1C1C]">→</span> {/* Placeholder Arrow */}
               </span>
            </div>
          </a>
          {/* Article 3 */}
          <a href="#" className="block border-b border-[#E9E9E9] pb-6 group">
            <div className="relative aspect-video mb-4 rounded overflow-hidden border border-[#F2F2F2]">
              <Image src="/news/news-nikkei.jpg" alt="News 3" layout="fill" objectFit="cover" />
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-light text-[#6A6A6A]">メディア掲載</span>
              <time className="text-sm font-medium text-[#A9A9A9]">2024.11.01</time>
            </div>
            <h3 className="text-lg font-light text-[#1C1C1C] leading-relaxed tracking-wide mb-4 group-hover:underline">
                HogeHoge
            </h3>
            <div className="flex justify-end">
               <span className="text-xl text-[#F2F2F2] bg-[#F2F2F2] rounded-full h-7 w-7 flex items-center justify-center group-hover:bg-[#E9E9E9]">
                 <span className="text-[#1C1C1C]">→</span> {/* Placeholder Arrow */}
               </span>
            </div>
          </a>
        </div>

        {/* Link Button */}
        <a
          href="#" // Replace with actual link if available
          className="inline-block border border-[#C7C7C7] rounded-full py-3 px-8 text-sm font-light text-[#292929] hover:bg-gray-100 transition-colors"
        >
          すべての記事を見る
        </a>
      </div>
    </section>
  );
}
