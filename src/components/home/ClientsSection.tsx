import Image from "next/image";
import React from 'react';

export default function ClientsSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-32 bg-[#FCFCFC] text-center">
      <div className="max-w-6xl mx-auto">
        {/* Heading 2 */}
        <div className="mb-8">
          <h2 className="text-5xl font-light text-[#292929] leading-tight">HogeHoge</h2>
          <p className="text-sm font-light text-[#6A6A6A] mt-2 tracking-wider">HogeHoge</p>
        </div>

        {/* Heading 3 */}
        <div className="mb-8">
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
            HogeHogeHogeHogeHogeHoge
          </p>
          <p>
            HogeHogeHogeHogeHogeHoge
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center justify-items-center mb-12">
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-smbc.jpg" alt="SMBC" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-sompo.png" alt="Sompo" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-daido.png" alt="Daido" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-dbj.png" alt="DBJ" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-meti.png" alt="METI" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-20250331.png" alt="Client Logo" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-asahi.jpg" alt="Asahi" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-gaora.png" alt="Gaora" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-tv-asahi.png" alt="TV Asahi" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-bandai-namco.png" alt="Bandai Namco" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-tv-tokyo.png" alt="TV Tokyo" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-dentsu.png" alt="Dentsu" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-jpower.png" alt="J-Power" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-zoff.png" alt="Zoff" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-leadcreate.png" alt="Leadcreate" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-jfe.png" alt="JFE" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-aba.png" alt="aba" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-fujita.png" alt="Fujita" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-hitowa.png" alt="Hitowa" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-kyodo.png" alt="Kyodo" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-mitsuifudosan.png" alt="Mitsui Fudosan" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-gaora-sports.png" alt="Gaora Sports" width={100} height={40} objectFit="contain" /></div>
          <div className="p-4 shadow-[20px_24px_44px_0px_rgba(0,0,0,0.1)] flex items-center justify-center h-24 w-full"><Image src="/clients/client-komehyo.png" alt="Komehyo" width={100} height={40} objectFit="contain" /></div>
        </div>

        {/* And more... */}
        <p className="text-base font-light text-[#7F7F7F] leading-loose text-right">
          and more...
        </p>
      </div>
    </section>
  );
}
