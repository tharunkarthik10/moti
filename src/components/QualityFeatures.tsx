export default function QualityFeatures() {
  return (
    <>
      {/* Quality Commitment Redesign */}
      <section className="bg-[#eaf6ff] py-20 relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          
          {/* Header Row */}
          <div className="flex flex-col gap-6 mb-16 max-w-3xl">
            <div className="space-y-4">
              <h2 className="font-headline-xl text-[36px] md:text-[48px] text-on-surface uppercase tracking-wide font-bold leading-tight">
                Quality Comes First<span className="text-industrial-yellow">.</span>
              </h2>
            </div>
            <p className="font-body-md text-[#4a4a4a] text-[16px] md:text-[20px] leading-relaxed">
              We have a team with highly skilled techinicians whom seems to exhibit the highest efficiency when it comes to manufacturing and production. They have a profilic experience in the field of engineering and technology whom are capable of solving complex problems with ease.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-outline/30 p-8 flex flex-col items-center text-center shadow-sm">
              <div className="flex-1 w-full flex items-center justify-center bg-[#f4f5f6] p-6 mb-8 border border-outline/10 shadow-inner">
                <img 
                  src="/assets/images/certs/cer2.jpg" 
                  alt="Global QMS Certificate" 
                  className="w-full max-w-[200px] object-contain shadow-md border border-outline/20"
                />
              </div>
              <h3 className="font-headline-lg font-bold text-xl text-[#1a1a1a] mb-3">Global QMS</h3>
              <p className="font-body-md text-[#5a5a5a] text-sm leading-relaxed">
                Certified Quality Management System for design, manufacturing, and technical services.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-outline/30 p-8 flex flex-col items-center text-center shadow-sm">
              <div className="flex-1 w-full flex items-center justify-center bg-[#1e2022] p-6 mb-8 shadow-inner">
                <img 
                  src="/assets/images/certs/cer1.jpg" 
                  alt="Supply Excellence Certificate" 
                  className="w-full max-w-[280px] object-contain shadow-lg border-[6px] border-[#4a2e22] rounded-sm"
                />
              </div>
              <h3 className="font-headline-lg font-bold text-xl text-[#1a1a1a] mb-3">Supply Excellence</h3>
              <p className="font-body-md text-[#5a5a5a] text-sm leading-relaxed">
                Recognized for consistent 100% on-time delivery and zero-defect performance by leading OEMs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f0f4f8] border border-[#dce5ed] p-8 flex flex-col">
              <span className="material-symbols-outlined text-2xl text-[#4a5a6a] mb-6">analytics</span>
              <h3 className="font-headline-lg font-bold text-2xl text-[#1a1a1a] mb-6 pr-8 leading-tight">Metric Driven Reliability</h3>
              
              <div className="flex-1 space-y-0">
                <div className="flex justify-between items-center py-4 border-t border-[#dce5ed]">
                  <span className="font-body-md text-sm text-[#3a3a3a] font-medium">Audit Compliance</span>
                  <span className="font-headline-lg font-bold text-lg text-[#006085]">100%</span>
                </div>
                <div className="flex justify-between items-center py-4 border-t border-[#dce5ed]">
                  <span className="font-body-md text-sm text-[#3a3a3a] font-medium">Defect Rate (PPM)</span>
                  <span className="font-headline-lg font-bold text-lg text-[#006085]">&lt; 50</span>
                </div>
                <div className="flex justify-between items-center py-4 border-y border-[#dce5ed]">
                  <span className="font-body-md text-sm text-[#3a3a3a] font-medium">Inspection Gates</span>
                  <span className="font-headline-lg font-bold text-lg text-[#006085]">128pt</span>
                </div>
              </div>

              <button className="mt-10 w-full py-4 border-2 border-[#5c7a94] text-[#5c7a94] font-status-code uppercase tracking-widest text-[10px] font-bold hover:bg-[#5c7a94] hover:text-white transition-colors">
                DOWNLOAD QUALITY MANUAL
              </button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-container-max mx-auto px-gutter pt-section-padding pb-0 bg-stark-white overflow-hidden">
        
        {/* MOBILE LAYOUT (Hidden on Desktop) */}
        <div className="md:hidden flex flex-col items-center space-y-12 mt-10">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 bg-[#0a192f] text-white flex items-center justify-center rounded-full shadow-lg">
              <span className="material-symbols-outlined text-3xl">star</span>
            </div>
            <h3 className="font-status-code text-industrial-yellow tracking-widest uppercase text-sm">Why HITECH ENGINEERING</h3>
            <h2 className="font-headline-lg font-bold text-on-surface text-[24px]">Great & Awesome Features</h2>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-[#3a3a3a] text-stark-white flex items-center justify-center rounded-full shadow-lg">
              <span className="material-symbols-outlined text-3xl">database</span>
            </div>
            <h4 className="font-headline-lg font-bold text-on-surface text-[18px]">FAIR PRICES</h4>
            <p className="font-body-md text-on-surface-variant text-[14px] max-w-xs leading-relaxed">
              You can be 100% sure that our product is budget friendly compared with any other competitors of our equal specification.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-[#3a3a3a] text-stark-white flex items-center justify-center rounded-full shadow-lg">
              <span className="material-symbols-outlined text-3xl">work</span>
            </div>
            <h4 className="font-headline-lg font-bold text-on-surface text-[18px]">QUALIFIED AGENTS</h4>
            <p className="font-body-md text-on-surface-variant text-[14px] max-w-xs leading-relaxed">
              We have a team of specialists capable of maximizing the result and delivering the projects
            </p>
          </div>

          <div className="w-full flex justify-center py-8">
            <img alt="HITECH ENGINEERING Expert" className="w-full max-w-sm object-contain" src="https://motiequipments.com/assets/images/features/3.png" />
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-[#3a3a3a] text-stark-white flex items-center justify-center rounded-full shadow-lg">
              <span className="material-symbols-outlined text-3xl">calendar_month</span>
            </div>
            <h4 className="font-headline-lg font-bold text-on-surface text-[18px]">ALWAYS AVAILABLE</h4>
            <p className="font-body-md text-on-surface-variant text-[14px] max-w-xs leading-relaxed">
              Our customer care support functions 24/7 & your free to contact us anytime of your convince.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-[#3a3a3a] text-stark-white flex items-center justify-center rounded-full shadow-lg">
              <span className="material-symbols-outlined text-3xl">shopping_cart</span>
            </div>
            <h4 className="font-headline-lg font-bold text-on-surface text-[18px]">BEST OFFERS</h4>
            <p className="font-body-md text-on-surface-variant text-[14px] max-w-xs leading-relaxed">
              All aspects of the operations being transparent and clear for clients and partners
            </p>
          </div>
        </div>

        {/* DESKTOP LAYOUT (Mathematical Perfect Semi-Circle Formation) */}
        <div className="hidden md:flex relative w-full max-w-6xl mx-auto h-[650px] mt-10 justify-center">
          
          {/* Glowing Backdrop behind the man */}
          <div className="absolute bottom-[-50px] left-1/2 translate-x-[calc(-50%+24px)] w-[500px] h-[600px] bg-industrial-yellow/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

          {/* Central Image */}
          <div className="absolute bottom-[-40px] left-1/2 translate-x-[calc(-50%+24px)] w-full max-w-sm z-10 flex justify-center pointer-events-none">
            <img alt="HITECH ENGINEERING Expert" className="w-full object-contain object-bottom h-[650px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]" src="https://motiequipments.com/assets/images/features/3.png" />
          </div>

          {/* The Perfect Semi-Circle Line */}
          {/* Width 800px, Height 400px. Center is at bottom 180px. Top is at 580px (clearing the man's head). */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 bottom-[180px] w-[800px] h-[400px] border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-black/30 rounded-t-full border-b-0 z-0"
          >
            
            {/* Top Center: 90 degrees */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20">
              <div className="w-16 h-16 bg-[#0a192f] text-white flex items-center justify-center rounded-full shadow-lg">
                <span className="material-symbols-outlined text-3xl">star</span>
              </div>
              {/* Text positioned ABOVE the icon */}
              <div className="absolute bottom-20 flex flex-col items-center text-center w-80 space-y-2">
                <h3 className="font-status-code text-on-surface/70 tracking-widest uppercase text-sm font-bold">Why HITECH ENGINEERING</h3>
                <h2 className="font-headline-lg font-bold text-on-surface text-[24px]">Great & Awesome Features</h2>
              </div>
            </div>

            {/* Top Left: 135 degrees */}
            <div className="absolute left-[14.64%] top-[29.28%] -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20">
              <div className="w-16 h-16 bg-[#2a2a2a] text-stark-white flex items-center justify-center rounded-full shadow-lg">
                <span className="material-symbols-outlined text-3xl">database</span>
              </div>
              <div className="absolute right-full mr-6 w-60 text-right flex flex-col items-end space-y-2">
                <h4 className="font-headline-lg font-bold text-on-surface text-[18px]">FAIR PRICES</h4>
                <p className="font-body-md text-on-surface-variant text-[14px] leading-relaxed">
                  You can be 100% sure that our product is budget friendly compared with any other competitors.
                </p>
              </div>
            </div>

            {/* Top Right: 45 degrees */}
            <div className="absolute left-[85.36%] top-[29.28%] -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20">
              <div className="w-16 h-16 bg-[#2a2a2a] text-stark-white flex items-center justify-center rounded-full shadow-lg">
                <span className="material-symbols-outlined text-3xl">work</span>
              </div>
              <div className="absolute left-full ml-6 w-60 text-left flex flex-col items-start space-y-2">
                <h4 className="font-headline-lg font-bold text-on-surface text-[18px]">QUALIFIED AGENTS</h4>
                <p className="font-body-md text-on-surface-variant text-[14px] leading-relaxed">
                  We have a team of specialists capable of maximizing the result and delivering the projects.
                </p>
              </div>
            </div>

            {/* Bottom Left: 180 degrees */}
            <div className="absolute left-0 top-full -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20">
              <div className="w-16 h-16 bg-[#2a2a2a] text-stark-white flex items-center justify-center rounded-full shadow-lg">
                <span className="material-symbols-outlined text-3xl">calendar_month</span>
              </div>
              <div className="absolute right-full mr-6 w-60 text-right flex flex-col items-end space-y-2">
                <h4 className="font-headline-lg font-bold text-on-surface text-[18px]">ALWAYS AVAILABLE</h4>
                <p className="font-body-md text-on-surface-variant text-[14px] leading-relaxed">
                  Our customer care support functions 24/7 & your free to contact us anytime of your convince.
                </p>
              </div>
            </div>

            {/* Bottom Right: 0 degrees */}
            <div className="absolute left-full top-full -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20">
              <div className="w-16 h-16 bg-[#2a2a2a] text-stark-white flex items-center justify-center rounded-full shadow-lg">
                <span className="material-symbols-outlined text-3xl">shopping_cart</span>
              </div>
              <div className="absolute left-full ml-6 w-60 text-left flex flex-col items-start space-y-2">
                <h4 className="font-headline-lg font-bold text-on-surface text-[18px]">BEST OFFERS</h4>
                <p className="font-body-md text-on-surface-variant text-[14px] leading-relaxed">
                  All aspects of the operations being transparent and clear for clients and partners.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
