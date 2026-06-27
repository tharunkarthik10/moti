export default function AboutSection() {
  return (
    <section className="border-y border-outline-variant bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-gutter py-section-padding">
        <div className="mb-16 max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-2 flex flex-col items-center">
            <h2 className="font-headline-xl text-[36px] md:text-[42px] text-on-surface leading-tight">
              About Hitech Engineering Works
            </h2>
            <h3 className="font-status-code text-industrial-yellow uppercase tracking-widest text-sm font-bold">
              Innovation and Excellence in Manufacturing Since 1999
            </h3>
          </div>
          <div className="space-y-4 font-serif italic text-on-surface-variant leading-relaxed text-[15px] max-w-3xl mx-auto">
            <p>
              Founded in 1999 in Coimbatore by Mr. Suresh, Hitech Engineering Works has embodied a vision of excellence through innovation. Originally established as a job order service, Hitech Engineering has evolved into a premier manufacturing hub, offering a comprehensive array of cutting-edge machinery all under one roof.
            </p>
            <p>
              Our dedicated New Product Development (NPD) team is committed to advancing new product innovations. As a leading manufacturing company, we produce a wide range of industrial products for sectors including automobile, aerospace, defense, and railways. At Hitech Engineering, we pride ourselves on our state-of-the-art technology and unwavering commitment to quality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-body-md">
          {/* Mission */}
          <div className="bg-white flex flex-col group overflow-hidden rounded-[24px] border border-gray-200">
            <div className="relative w-full h-48 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] overflow-hidden flex items-center justify-center">
              <span className="material-symbols-outlined text-[120px] text-gray-300/40 group-hover:scale-110 transition-transform duration-500">adjust</span>
              
              {/* Tab */}
              <div className="absolute bottom-0 left-8 bg-white px-5 py-2 rounded-t-[16px] z-10 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#3FC1B6] text-[18px]">adjust</span>
                  <span className="text-[13px] text-gray-500 font-medium tracking-wide uppercase">Mission</span>
                </div>
                
                <div 
                  className="absolute -left-4 bottom-0 w-4 h-4 bg-transparent rounded-br-[16px]"
                  style={{ boxShadow: '5px 5px 0 5px white' }}
                ></div>
                
                <div 
                  className="absolute -right-4 bottom-0 w-4 h-4 bg-transparent rounded-bl-[16px]"
                  style={{ boxShadow: '-5px 5px 0 5px white' }}
                ></div>
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="font-headline-md text-[20px] md:text-[22px] font-bold text-gray-900 mb-3 leading-snug">
                Our Mission
              </h3>
              <p className="font-body-md text-[15px] text-gray-600 leading-relaxed">
                To empower industries with superior material handling equipment that enhances operational efficiency and safety through innovative design and manufacturing excellence.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white flex flex-col group overflow-hidden rounded-[24px] border border-gray-200">
            <div className="relative w-full h-48 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] overflow-hidden flex items-center justify-center">
              <span className="material-symbols-outlined text-[120px] text-gray-300/40 group-hover:scale-110 transition-transform duration-500">visibility</span>
              
              {/* Tab */}
              <div className="absolute bottom-0 left-8 bg-white px-5 py-2 rounded-t-[16px] z-10 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#3FC1B6] text-[18px]">visibility</span>
                  <span className="text-[13px] text-gray-500 font-medium tracking-wide uppercase">Vision</span>
                </div>
                
                <div 
                  className="absolute -left-4 bottom-0 w-4 h-4 bg-transparent rounded-br-[16px]"
                  style={{ boxShadow: '5px 5px 0 5px white' }}
                ></div>
                
                <div 
                  className="absolute -right-4 bottom-0 w-4 h-4 bg-transparent rounded-bl-[16px]"
                  style={{ boxShadow: '-5px 5px 0 5px white' }}
                ></div>
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="font-headline-md text-[20px] md:text-[22px] font-bold text-gray-900 mb-3 leading-snug">
                Our Vision
              </h3>
              <p className="font-body-md text-[15px] text-gray-600 leading-relaxed">
                To be the global leader in kinetic precision engineering, setting the benchmark for quality, reliability, and sustainability in the material handling industry.
              </p>
            </div>
          </div>

          {/* Strategy */}
          <div className="bg-white flex flex-col group overflow-hidden rounded-[24px] border border-gray-200">
            <div className="relative w-full h-48 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] overflow-hidden flex items-center justify-center">
              <span className="material-symbols-outlined text-[120px] text-gray-300/40 group-hover:scale-110 transition-transform duration-500">trending_up</span>
              
              {/* Tab */}
              <div className="absolute bottom-0 left-8 bg-white px-5 py-2 rounded-t-[16px] z-10 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#3FC1B6] text-[18px]">trending_up</span>
                  <span className="text-[13px] text-gray-500 font-medium tracking-wide uppercase">Strategy</span>
                </div>
                
                <div 
                  className="absolute -left-4 bottom-0 w-4 h-4 bg-transparent rounded-br-[16px]"
                  style={{ boxShadow: '5px 5px 0 5px white' }}
                ></div>
                
                <div 
                  className="absolute -right-4 bottom-0 w-4 h-4 bg-transparent rounded-bl-[16px]"
                  style={{ boxShadow: '-5px 5px 0 5px white' }}
                ></div>
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="font-headline-md text-[20px] md:text-[22px] font-bold text-gray-900 mb-3 leading-snug">
                Our Strategy
              </h3>
              <p className="font-body-md text-[15px] text-gray-600 leading-relaxed">
                Focusing on R&D, strategic partnerships, and customer-centric solutions to deliver high-impact engineering assets that solve complex logistical challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
