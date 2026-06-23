export default function Footer() {
  return (
    <footer className="bg-[#261606]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-gutter py-section-padding max-w-container-max mx-auto">
        <div className="space-y-6">
          <div className="font-headline-lg text-headline-lg text-stark-white font-bold tracking-tighter">
            MOTI EQUIPMENTS
          </div>
          <p className="font-body-md text-body-md text-white/70">
            Precision logistics engineering for the modern industrial age. Built for performance. Sustained by reliability.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-caps text-label-caps text-stark-white">Product Systems</h4>
          <ul className="space-y-2">
            <li><a className="font-label-caps text-label-caps text-white/50 hover:text-industrial-yellow transition-colors" href="#">Vertical Conveyance</a></li>
            <li><a className="font-label-caps text-label-caps text-white/50 hover:text-industrial-yellow transition-colors" href="#">Pallet Management</a></li>
            <li><a className="font-label-caps text-label-caps text-white/50 hover:text-industrial-yellow transition-colors" href="#">Automated Sorting</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-caps text-label-caps text-stark-white">Engineering</h4>
          <ul className="space-y-2">
            <li><a className="font-label-caps text-label-caps text-white/50 hover:text-industrial-yellow transition-colors" href="#">Project Studies</a></li>
            <li><a className="font-label-caps text-label-caps text-white/50 hover:text-industrial-yellow transition-colors" href="#">Service & Parts</a></li>
            <li><a className="font-label-caps text-label-caps text-white/50 hover:text-industrial-yellow transition-colors" href="#">Safety Protocols</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-caps text-label-caps text-stark-white">Contact & Connect</h4>
          <div className="space-y-2">
            <p className="font-body-md text-white/70 flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">call</span>
              +91-9797975577
            </p>
            <p className="font-body-md text-white/70 flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">mail</span>
              sales@motiequipments.com
            </p>
          </div>
          <div className="flex gap-4 pt-2">
            <a className="w-10 h-10 border border-white/20 text-stark-white flex items-center justify-center hover:bg-industrial-yellow hover:text-on-surface hover:border-industrial-yellow transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">language</span>
            </a>
            <a className="w-10 h-10 border border-white/20 text-stark-white flex items-center justify-center hover:bg-industrial-yellow hover:text-on-surface hover:border-industrial-yellow transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
            <a className="w-10 h-10 border border-white/20 text-stark-white flex items-center justify-center hover:bg-industrial-yellow hover:text-on-surface hover:border-industrial-yellow transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
          </div>
          <div className="pt-4">
            <div className="font-status-code text-status-code text-white/50">LOCATION_HQ</div>
            <div className="font-label-caps text-label-caps text-stark-white">DÜSSELDORF, DE</div>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-gutter py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-label-caps text-label-caps text-white/50">
          © 2024 MOTI EQUIPMENTS. KINETIC PRECISION ENGINEERED.
        </span>
        <div className="flex gap-8">
          <a className="font-label-caps text-label-caps text-white/50 hover:text-industrial-yellow transition-colors" href="#">Privacy</a>
          <a className="font-label-caps text-label-caps text-white/50 hover:text-industrial-yellow transition-colors" href="#">Global Terms</a>
          <a className="font-label-caps text-label-caps text-white/50 hover:text-industrial-yellow transition-colors" href="#">Security</a>
        </div>
      </div>
    </footer>
  );
}
