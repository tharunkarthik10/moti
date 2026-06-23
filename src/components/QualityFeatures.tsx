export default function QualityFeatures() {
  return (
    <>
      {/* Quality Commitment */}
      <section className="bg-surface-container-low py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-industrial-yellow/10 skew-x-[-20deg] translate-x-20 z-0"></div>
        
        {/* Background Signature Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.12] pointer-events-none z-0 select-none mix-blend-multiply">
          <img 
            src="/signature.png" 
            alt="Signature" 
            className="w-full max-w-[1000px] -rotate-[8deg] scale-110"
          />
        </div>

        <div className="max-w-container-max mx-auto px-gutter text-center space-y-6 relative z-10">
          <span className="font-status-code text-status-code text-industrial-yellow uppercase tracking-widest font-bold">
            ZERO_DEFECT_POLICY
          </span>
          <h2 className="font-headline-xl text-[56px] text-on-surface">Quality Comes First</h2>
          <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto">
            At MOTI, we believe that precision isn't just a metric—it's a commitment. Every piece of equipment leaving our facility undergoes a 128-point diagnostic check to ensure zero-fault deployment.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <span className="px-4 py-2 border border-outline-variant font-status-code text-status-code text-on-surface-variant uppercase font-bold">
              ISO 9001 CERTIFIED
            </span>
            <span className="px-4 py-2 border border-outline-variant font-status-code text-status-code text-on-surface-variant uppercase font-bold">
              CE COMPLIANT
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-container-max mx-auto px-gutter pt-section-padding pb-0 bg-stark-white overflow-hidden">
        
        {/* MOBILE LAYOUT (Hidden on Desktop) */}
        <div className="md:hidden flex flex-col items-center space-y-12 mt-10">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 bg-industrial-yellow text-on-surface flex items-center justify-center rounded-full shadow-lg">
              <span className="material-symbols-outlined text-3xl">star</span>
            </div>
            <h3 className="font-status-code text-industrial-yellow tracking-widest uppercase text-sm">Why Moti Equipments</h3>
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
            <img alt="Moti Expert" className="w-full max-w-sm object-contain" src="https://motiequipments.com/assets/images/features/3.png" />
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
            <img alt="Moti Expert" className="w-full object-contain object-bottom h-[650px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]" src="https://motiequipments.com/assets/images/features/3.png" />
          </div>

          {/* The Perfect Semi-Circle Line */}
          {/* Width 800px, Height 400px. Center is at bottom 180px. Top is at 580px (clearing the man's head). */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 bottom-[180px] w-[800px] h-[400px] border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-black/30 rounded-t-full border-b-0 z-0"
          >
            
            {/* Top Center: 90 degrees */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20">
              <div className="w-16 h-16 bg-industrial-yellow text-on-surface flex items-center justify-center rounded-full shadow-[0_10px_20px_rgba(242,169,0,0.4)]">
                <span className="material-symbols-outlined text-3xl">star</span>
              </div>
              {/* Text positioned ABOVE the icon */}
              <div className="absolute bottom-20 flex flex-col items-center text-center w-80 space-y-2">
                <h3 className="font-status-code text-on-surface/70 tracking-widest uppercase text-sm font-bold">Why Moti Equipments</h3>
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
