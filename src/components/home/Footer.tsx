import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#000000] to-[#373737] text-white relative overflow-hidden">
      {/* Background SVGs skipped */}
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-8 md:px-16 lg:px-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Logo and CTAs */}
          <div className="md:col-span-1 lg:col-span-1">
            {/* Logo Placeholder */}
            <a href="#" className="block text-4xl font-bold text-white mb-8">HogeHoge</a>
            <div className="flex flex-col gap-4">
               <a
                href="#" // Replace with actual link
                className="inline-block border border-[#A9A9A9] rounded-full py-3 px-6 text-center hover:bg-white/10 transition-colors"
              >
                <span className="block text-sm font-light text-[#F2F2F2]">HogeHoge</span>
                <span className="block text-xs font-medium text-[#7F7F7F]">HogeHoge</span>
              </a>
              <a
                href="#" // Replace with actual link
                className="inline-block border border-[#A9A9A9] rounded-full py-3 px-6 text-center hover:bg-white/10 transition-colors"
              >
                <span className="block text-sm font-light text-[#F2F2F2]">HogeHoge</span>
                <span className="block text-xs font-medium text-[#7F7F7F]">HogeHoge</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">
            <div>
              <a href="#" className="block mb-2">
                <span className="block text-xl font-light text-[#F2F2F2]">HogeHoge</span>
                <span className="block text-xs font-medium text-[#6A6A6A]">HogeHoge</span>
              </a>
            </div>
            <div>
              <p className="text-xl font-light text-[#F2F2F2] mb-2">HogeHoge</p>
              <p className="text-xs font-medium text-[#6A6A6A] mb-3">HogeHoge</p>
              <ul className="space-y-2">
                <li><a href="#" className="font-light text-white hover:underline">HogeHoge</a></li>
                <li><a href="#" className="font-light text-white hover:underline">HogeHoge</a></li>
              </ul>
            </div>
             <div>
              <a href="#" className="block mb-2">
                <span className="block text-xl font-light text-[#F2F2F2]">HogeHoge</span>
                <span className="block text-xs font-medium text-[#6A6A6A]">HogeHoge</span>
              </a>
            </div>
            <div>
              <a href="#" className="block mb-2">
                <span className="block text-xl font-light text-[#F2F2F2]">HogeHoge</span>
                <span className="block text-xs font-medium text-[#6A6A6A]">HogeHoge</span>
              </a>
            </div>
            <div>
              <a href="#" className="block mb-2">
                <span className="block text-xl font-light text-[#F2F2F2]">HogeHoge</span>
                <span className="block text-xs font-medium text-[#6A6A6A]">HogeHoge</span>
              </a>
            </div>
            <div>
               <p className="text-xl font-light text-[#F2F2F2] mb-2">HogeHoge</p>
               <p className="text-xs font-medium text-[#6A6A6A] mb-3">HogeHoge</p>
               <ul className="space-y-2">
                 <li><a href="#" className="font-light text-white hover:underline">HogeHoge</a></li>
                 <li><a href="#" className="font-light text-white hover:underline">HogeHoge</a></li>
                 <li><a href="#" className="font-light text-white hover:underline">HogeHoge</a></li>
               </ul>
            </div>
            <div>
               <a href="#" className="block mb-2">
                 <span className="block text-xl font-light text-[#F2F2F2]">HogeHoge</span>
                 <span className="block text-xs font-medium text-[#6A6A6A]">HogeHoge</span>
               </a>
               {/* Specific project links could go here if needed */}
            </div>
          </div>
        </div>

        {/* Bottom Row: Social/External Links & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 md:mb-0">
            <a href="#" className="flex items-center gap-1 font-medium text-[#A9A9A9] hover:text-white">
              {/* ACES Meet Icon Placeholder */} [M] HogeHoge →
            </a>
            <a href="#" className="flex items-center gap-1 font-medium text-[#A9A9A9] hover:text-white">
              {/* Note Icon Placeholder */} [N] HogeHoge →
            </a>
            <a href="#" className="font-light text-[#A9A9A9] hover:text-white">HogeHoge</a>
            <a href="#" className="font-light text-[#A9A9A9] hover:text-white">HogeHoge</a>
          </div>
          <p className="font-medium text-[#A9A9A9]">©︎ HogeHoge, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
