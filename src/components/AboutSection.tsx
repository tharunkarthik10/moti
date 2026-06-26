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
          <div className="bg-white p-8 border border-outline/20 border-t-[3px] border-t-[#00aeef] shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col space-y-6">
            <div className="w-12 h-12 bg-[#f4f5f6] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#1a1a1a]">adjust</span>
            </div>
            <h3 className="font-headline-lg text-[22px] font-bold text-[#1a1a1a]">Our Mission</h3>
            <p className="text-[#5a5a5a] text-[15px] leading-relaxed">
              To empower industries with superior material handling equipment that enhances operational efficiency and safety through innovative design and manufacturing excellence.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 border border-outline/20 border-t-[3px] border-t-[#00aeef] shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col space-y-6">
            <div className="w-12 h-12 bg-[#f4f5f6] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#1a1a1a]">visibility</span>
            </div>
            <h3 className="font-headline-lg text-[22px] font-bold text-[#1a1a1a]">Our Vision</h3>
            <p className="text-[#5a5a5a] text-[15px] leading-relaxed">
              To be the global leader in kinetic precision engineering, setting the benchmark for quality, reliability, and sustainability in the material handling industry.
            </p>
          </div>

          {/* Strategy */}
          <div className="bg-white p-8 border border-outline/20 border-t-[3px] border-t-[#00aeef] shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col space-y-6">
            <div className="w-12 h-12 bg-[#f4f5f6] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#1a1a1a]">trending_up</span>
            </div>
            <h3 className="font-headline-lg text-[22px] font-bold text-[#1a1a1a]">Our Strategy</h3>
            <p className="text-[#5a5a5a] text-[15px] leading-relaxed">
              Focusing on R&D, strategic partnerships, and customer-centric solutions to deliver high-impact engineering assets that solve complex logistical challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
