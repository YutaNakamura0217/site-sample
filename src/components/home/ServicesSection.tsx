import React from 'react';

export default function ServicesSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-32 bg-[#FCFCFC] text-center relative overflow-hidden">
      {/* Decorative Overlays Skipped */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading 2 */}
        <div className="mb-8">
          <h2 className="text-5xl font-light text-[#292929] leading-tight">Services</h2>
          <p className="text-sm font-light text-[#6A6A6A] mt-2 tracking-wider">事業紹介</p>
        </div>

        {/* Heading 3 */}
        <div className="mb-12">
          <h3 className="text-4xl font-light text-black leading-loose tracking-wide">
            HogeHoge
          </h3>
          <h3 className="text-4xl font-light text-black leading-loose tracking-wide">
            HogeHoge
          </h3>
          <h3 className="text-4xl font-light text-black leading-loose tracking-wide">
            HogeHoge
          </h3>
          <h3 className="text-4xl font-light text-black leading-loose tracking-wide">
            HogeHoge
          </h3>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* DX Partner Service Card */}
          <a href="#" className="block p-10 rounded-lg text-left bg-gradient-to-br from-[#4E4E4E] to-[#1D1D1D] shadow-[23px_35px_26px_0px_rgba(0,0,0,0.14)] hover:shadow-xl transition-shadow">
            <p className="text-lg font-medium text-[#C7C7C7] mb-1">HogeHoge</p>
            <h4 className="text-5xl font-light text-white leading-tight mb-6">
                HogeHoge<br />HogeHoge
            </h4>
            <p className="text-base font-light text-white leading-loose">
                HogeHoge
                HogeHoge
                HogeHoge
            </p>
          </a>

          {/* AI Software Service Card */}
          <a href="#" className="block p-10 rounded-lg text-left bg-gradient-to-br from-[#E8E8E8] to-[#FFFFFF] shadow-[23px_35px_26px_0px_rgba(0,0,0,0.14)] hover:shadow-xl transition-shadow">
            <p className="text-lg font-medium text-black mb-1">HogeHoge</p>
            <h4 className="text-5xl font-light text-black leading-tight mb-6">
                HogeHoge<br />HogeHoge
            </h4>
            <p className="text-base font-light text-black leading-loose">
                HogeHogeHogeHogeHogeHogeHogeHoge
                HogeHogeHogeHogeHogeHogeHogeHoge
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
