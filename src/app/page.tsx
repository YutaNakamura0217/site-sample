import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      {/* Section 1: Hero */}
      <section className="relative w-full min-h-screen flex items-center justify-center text-center">
        {/* Background Image */}
        <Image
          src="/hero-bg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-10" // Ensure background is behind content
        />
        {/* Overlay or Gradient if needed - Add later if required by design */}
        {/* <div className="absolute inset-0 bg-black opacity-50 -z-10"></div> */}

        {/* Content Container */}
        <div className="z-10 flex flex-col items-center text-white px-4">
          <div className="flex items-center gap-4 mb-4">
            <p className="text-xs font-medium text-[#4B4B4B] leading-loose">Vision</p>
            <p className="text-xs font-medium text-[#E9E9E9] leading-loose">Mission</p>
          </div>
          <hr className="w-16 border-[#4B4B4B] mb-8" /> {/* Horizontal Divider */}
          <h1 className="text-5xl font-light leading-relaxed tracking-tighter mb-2">
            アルゴリズムで、
          </h1>
          <h1 className="text-5xl font-light leading-relaxed tracking-tighter">
            人の働き方に余白をつくる。
          </h1>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-32 bg-[#FCFCFC] text-center">
        <div className="max-w-4xl mx-auto">
          {/* Heading 2 */}
          <div className="mb-8">
            <h2 className="text-6xl font-light text-[#292929] leading-none">Who We Are</h2>
            <p className="text-sm font-light text-[#6A6A6A] mt-2 tracking-wider">私たちについて</p>
          </div>

          {/* Heading 3 */}
          <div className="mb-8">
            <h3 className="text-4xl font-light text-black leading-relaxed tracking-wide">
              ACESは、アルゴリズムを用いて
            </h3>
            <h3 className="text-4xl font-light text-black leading-relaxed tracking-wide">
              事業開発を行うAI事業会社です。
            </h3>
          </div>

          {/* Paragraph */}
          <div className="mb-12 text-base font-light text-black leading-loose max-w-2xl mx-auto">
            <p>
              AIアルゴリズムを用いて属人化しているヒトの知見や業務をデジ
            </p>
            <p>
              タル化する「AIトランスフォーメーション事業」を通して、「シ
            </p>
            <p>
              ンプルな社会」の実現を目指しています。
            </p>
          </div>

          {/* Link Button */}
          <a
            href="#" // Replace with actual link if available
            className="inline-block border border-[#C7C7C7] rounded-full py-3 px-8 text-sm font-light text-[#292929] hover:bg-gray-100 transition-colors"
          >
            私たちについてもっと知る
          </a>
        </div>
      </section>

      {/* Section 3: Projects */}
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
              AIアルゴリズムを軸に
            </h3>
            <h3 className="text-4xl font-light text-[#F2F2F2] leading-none mt-2">
              DXを推進、支援してきた
            </h3>
            <h3 className="text-4xl font-light text-[#F2F2F2] leading-none mt-2">
              パートナーとの実績を紹介します。
            </h3>
          </div>

          {/* Paragraph */}
          <div className="mb-12 text-base font-light text-[#E9E9E9] leading-loose max-w-3xl mx-auto">
            <p>
              保険、金融、小売、介護、人材、建設、スポーツなど、事業・業界を変えたいと立ち上がったパートナーの
            </p>
            <p>
              みなさまと併走して、数多くのDXプロジェクトを推進しています。
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
                <p className="text-sm font-light text-[#E9E9E9] mb-2">J-POWER</p>
                <div className="flex items-center text-xs font-light text-[#E9E9E9] mb-3">
                  <span className="mr-1">#</span>
                  <span>ヒトの行動特定</span>
                </div>
                <h4 className="text-xl font-light text-[#F2F2F2] leading-snug">
                  労災リスクをAIで軽減　危険予知高度化と安全管理システム構築を目指す電源開発とACESの取り組みとは
                </h4>
              </div>
            </a>

            {/* Placeholder Project 6 */}
            <a href="#" className="block bg-gray-700 aspect-[4/3] rounded flex items-center justify-center text-gray-400">Placeholder</a>
          </div>

          {/* Client Logos */}
          <div className="flex justify-center items-center gap-8 md:gap-16 mb-16 opacity-80">
            <Image src="/client-logo-d44470.png" alt="Client Logo 1" width={100} height={50} objectFit="contain" />
            <Image src="/client-logo-20230331.png" alt="Client Logo 2" width={100} height={50} objectFit="contain" />
            <Image src="/project-jpower.png" alt="Client Logo 3" width={100} height={50} objectFit="contain" /> {/* Reusing J-Power image as per Figma node 1:1220 */}
            <Image src="/client-logo-20230622.png" alt="Client Logo 4" width={100} height={50} objectFit="contain" />
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

      {/* Section 4: Our Clients */}
      <section className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-32 bg-[#FCFCFC] text-center">
        <div className="max-w-6xl mx-auto">
          {/* Heading 2 */}
          <div className="mb-8">
            <h2 className="text-5xl font-light text-[#292929] leading-tight">Our Clients</h2>
            <p className="text-sm font-light text-[#6A6A6A] mt-2 tracking-wider">クライアント企業</p>
          </div>

          {/* Heading 3 */}
          <div className="mb-8">
            <h3 className="text-4xl font-light text-black leading-relaxed tracking-wide">
              ACESと共に歩んできた
            </h3>
            <h3 className="text-4xl font-light text-black leading-relaxed tracking-wide">
              企業を紹介します。
            </h3>
          </div>

          {/* Paragraph */}
          <div className="mb-12 text-base font-light text-black leading-loose max-w-2xl mx-auto">
            <p>
              私たちは各業界をリードする企業のDXプロジェクトにAIパートナーとして伴走することで、
            </p>
            <p>
              業界変革を推進しています。
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

      {/* Section 5: Technologies */}
      <section className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-32 bg-[#FCFCFC] text-center">
        <div className="max-w-6xl mx-auto">
          {/* Heading 2 */}
          <div className="mb-8">
            <h2 className="text-5xl font-light text-[#292929] leading-tight">Technologies</h2>
            <p className="text-sm font-light text-[#6A6A6A] mt-2 tracking-wider">技術</p>
          </div>

          {/* Heading 3 */}
          <div className="mb-8">
            <h3 className="text-4xl font-light text-black leading-relaxed tracking-wide">
              最先端アルゴリズムを
            </h3>
            <h3 className="text-4xl font-light text-black leading-relaxed tracking-wide">
              独自モジュール化し、
            </h3>
            <h3 className="text-4xl font-light text-black leading-relaxed tracking-wide">
              提供しています。
            </h3>
          </div>

          {/* Paragraph */}
          <div className="mb-12 text-base font-light text-black leading-loose max-w-2xl mx-auto">
            <p>
              アカデミアをバックグラウンドに持つ優秀なエンジニアが最先端アルゴリズムを独自のモジュー
            </p>
            <p>
              ルにして提供することで、実現場への技術検証・適用を高速で実現しています。
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
                  <h3 className="text-5xl font-light text-[#F7F7F7] mb-1">コミュニケーションの科学</h3>
                  <p className="text-sm font-medium text-[#C7C7C7]">Communication Intelligence</p>
                </div>
              </a>
              <a href="#" className="block p-6 border-b border-gray-200 hover:bg-gray-50">
                <span className="text-2xl font-medium text-[#E9E9E9] mr-4">02</span>
                <div>
                  <h3 className="text-5xl font-light text-[#F7F7F7] mb-1">ヒトの行動・属性のデジタル再現</h3>
                  <p className="text-sm font-medium text-[#C7C7C7]">Human Digital Twin</p>
                </div>
              </a>
              <a href="#" className="block p-6 border-b border-gray-200 hover:bg-gray-50">
                <span className="text-2xl font-medium text-[#E9E9E9] mr-4">03</span>
                <div>
                  <h3 className="text-5xl font-light text-[#F7F7F7] mb-1">モビリティデータの分析</h3>
                  <p className="text-sm font-medium text-[#C7C7C7]">Mobility Intelligence</p>
                </div>
              </a>
            </div>
          </div>

          {/* Link Button */}
          <a
            href="#" // Replace with actual link if available
            className="inline-block border border-[#C7C7C7] rounded-full py-3 px-8 text-sm font-light text-[#292929] hover:bg-gray-100 transition-colors"
          >
            すべての技術を見る
          </a>
        </div>
      </section>

      {/* Section 6: News */}
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
                ACESとオークスモビリティが事故車の価格を算出するAIアプリ「AUX Pricing」を開発
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
                ACES、マルチモーダルAIによる対話動画中の重要シーン抽出に関する特許を取得
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
                日経クロステックに掲載｜最前線の企業が語る導入と活用のリアル
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

      {/* Section 7: Careers */}
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
              私たちと一緒に働きませんか？
            </h3>
          </div>

          {/* Paragraph */}
          <div className="mb-12 text-base font-light text-white leading-loose max-w-2xl mx-auto">
            <p>
              ACESでは、一緒に働くプロフェッショナルな仲間を募集しています。
            </p>
            <p>
              アルゴリズムを用いて人の働き方に「余白」をつくり、シンプルな社会をつくって
            </p>
            <p>
              いきませんか。
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#" // Replace with actual link
              className="inline-block border border-[#A9A9A9] rounded-full py-3 px-8 text-sm font-normal text-[#F2F2F2] hover:bg-white/10 transition-colors"
            >
              ACESのメンバーを見る
            </a>
            <a
              href="#" // Replace with actual link
              className="inline-block border border-[#A9A9A9] rounded-full py-3 px-8 text-sm font-normal text-[#F2F2F2] hover:bg-white/10 transition-colors"
            >
              採用情報を見る
            </a>
          </div>
        </div>
      </section>

      {/* Section 8: Next Link (DX Partner Service) */}
      <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-[#F2F2F2] text-left relative overflow-hidden">
        {/* Background SVGs skipped */}
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-lg font-medium text-[#A9A9A9] mb-2">Next</p>
          <hr className="w-12 border-[#C7C7C7] mb-4" />
          <h2 className="text-7xl font-light text-[#292929] leading-tight mb-1">DX Partner Service</h2>
          <p className="text-lg font-light text-[#4B4B4B]">DXパートナーサービス</p>
        </div>
      </section>

      {/* Section 9: Services */}
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
              ヒトの知見と業務を
            </h3>
            <h3 className="text-4xl font-light text-black leading-loose tracking-wide">
              Deep Learningを用いてAI化し、
            </h3>
            <h3 className="text-4xl font-light text-black leading-loose tracking-wide">
              デジタルでの事業開発を推進していま
            </h3>
            <h3 className="text-4xl font-light text-black leading-loose tracking-wide">
              す。
            </h3>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DX Partner Service Card */}
            <a href="#" className="block p-10 rounded-lg text-left bg-gradient-to-br from-[#4E4E4E] to-[#1D1D1D] shadow-[23px_35px_26px_0px_rgba(0,0,0,0.14)] hover:shadow-xl transition-shadow">
              <p className="text-lg font-medium text-[#C7C7C7] mb-1">DX Partner Service</p>
              <h4 className="text-5xl font-light text-white leading-tight mb-6">
                DXパートナー<br />サービス
              </h4>
              <p className="text-base font-light text-white leading-loose">
                事業・業界を変えたいと立ち上がった人とともに、
                AI専門家集団がプロジェクトを通じて、さまざまな業界のDX推進
                をお手伝いします。
              </p>
            </a>

            {/* AI Software Service Card */}
            <a href="#" className="block p-10 rounded-lg text-left bg-gradient-to-br from-[#E8E8E8] to-[#FFFFFF] shadow-[23px_35px_26px_0px_rgba(0,0,0,0.14)] hover:shadow-xl transition-shadow">
              <p className="text-lg font-medium text-black mb-1">AI Software Service</p>
              <h4 className="text-5xl font-light text-black leading-tight mb-6">
                AIソフトウェア<br />サービス
              </h4>
              <p className="text-base font-light text-black leading-loose">
                さまざまな業種のパートナーとDX推進を行う中で得た知見とAIア
                ルゴリズムを利用したソフトウェアを開発し、提供しています。
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Section 10: CTAs (Downloads & Contact) */}
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
            <h2 className="text-7xl font-light text-[#292929] leading-tight mb-1">Downloads</h2>
            <p className="text-xl font-light text-[#4B4B4B] mb-4">資料ダウンロード</p>
            <p className="text-base font-light text-[#A9A9A9] leading-loose max-w-md">
              会社紹介や実績、技術に関する情報など、
              各種資料のダウンロードはこちらからどうぞ。
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
            <p className="text-xl font-light text-[#4B4B4B] mb-4">お問い合わせ</p>
            <p className="text-base font-light text-[#A9A9A9] leading-loose max-w-md">
              ご協業のご相談、採用、取材に関するお問い合わせなど、
              お気軽にご連絡ください。
            </p>
          </div>
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-b from-[#000000] to-[#373737] text-white relative overflow-hidden">
        {/* Background SVGs skipped */}
        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-8 md:px-16 lg:px-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {/* Logo and CTAs */}
            <div className="md:col-span-1 lg:col-span-1">
              {/* Logo Placeholder */}
              <a href="#" className="block text-4xl font-bold text-white mb-8">ACES</a>
              <div className="flex flex-col gap-4">
                 <a
                  href="#" // Replace with actual link
                  className="inline-block border border-[#A9A9A9] rounded-full py-3 px-6 text-center hover:bg-white/10 transition-colors"
                >
                  <span className="block text-sm font-light text-[#F2F2F2]">資料ダウンロード</span>
                  <span className="block text-xs font-medium text-[#7F7F7F]">Downloads</span>
                </a>
                <a
                  href="#" // Replace with actual link
                  className="inline-block border border-[#A9A9A9] rounded-full py-3 px-6 text-center hover:bg-white/10 transition-colors"
                >
                  <span className="block text-sm font-light text-[#F2F2F2]">お問い合わせ</span>
                  <span className="block text-xs font-medium text-[#7F7F7F]">Contact</span>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">
              <div>
                <a href="#" className="block mb-2">
                  <span className="block text-xl font-light text-[#F2F2F2]">私たちについて</span>
                  <span className="block text-xs font-medium text-[#6A6A6A]">Who We Are</span>
                </a>
              </div>
              <div>
                <p className="text-xl font-light text-[#F2F2F2] mb-2">事業紹介</p>
                <p className="text-xs font-medium text-[#6A6A6A] mb-3">Services</p>
                <ul className="space-y-2">
                  <li><a href="#" className="font-light text-white hover:underline">DXパートナーサービス</a></li>
                  <li><a href="#" className="font-light text-white hover:underline">AIソフトウェアサービス</a></li>
                </ul>
              </div>
               <div>
                <a href="#" className="block mb-2">
                  <span className="block text-xl font-light text-[#F2F2F2]">技術</span>
                  <span className="block text-xs font-medium text-[#6A6A6A]">Technologies</span>
                </a>
              </div>
              <div>
                <a href="#" className="block mb-2">
                  <span className="block text-xl font-light text-[#F2F2F2]">採用情報</span>
                  <span className="block text-xs font-medium text-[#6A6A6A]">Careers</span>
                </a>
              </div>
              <div>
                <a href="#" className="block mb-2">
                  <span className="block text-xl font-light text-[#F2F2F2]">ニュース</span>
                  <span className="block text-xs font-medium text-[#6A6A6A]">News</span>
                </a>
              </div>
              <div>
                 <p className="text-xl font-light text-[#F2F2F2] mb-2">会社案内</p>
                 <p className="text-xs font-medium text-[#6A6A6A] mb-3">Company</p>
                 <ul className="space-y-2">
                   <li><a href="#" className="font-light text-white hover:underline">会社情報</a></li>
                   <li><a href="#" className="font-light text-white hover:underline">メンバー</a></li>
                   <li><a href="#" className="font-light text-white hover:underline">代表メッセージ</a></li>
                 </ul>
              </div>
              <div>
                 <a href="#" className="block mb-2">
                   <span className="block text-xl font-light text-[#F2F2F2]">実績</span>
                   <span className="block text-xs font-medium text-[#6A6A6A]">Project</span>
                 </a>
                 {/* Specific project links could go here if needed */}
              </div>
            </div>
          </div>

          {/* Bottom Row: Social/External Links & Copyright */}
          <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs">
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 md:mb-0">
              <a href="#" className="flex items-center gap-1 font-medium text-[#A9A9A9] hover:text-white">
                {/* ACES Meet Icon Placeholder */} [M] ACES Meet →
              </a>
              <a href="#" className="flex items-center gap-1 font-medium text-[#A9A9A9] hover:text-white">
                {/* Note Icon Placeholder */} [N] note →
              </a>
              <a href="#" className="font-light text-[#A9A9A9] hover:text-white">プライバシーポリシー</a>
              <a href="#" className="font-light text-[#A9A9A9] hover:text-white">セキュリティーポリシー</a>
            </div>
            <p className="font-medium text-[#A9A9A9]">©︎ ACES, Inc.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
