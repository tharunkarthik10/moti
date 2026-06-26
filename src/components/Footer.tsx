export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-white">
      <div className="max-w-container-max mx-auto px-gutter py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Column 1: Logo & Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2.5 rounded-sm inline-flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  {/* Robotic arm icon */}
                  <path d="M19 14h-3v-2l1.5-3H20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h.5l-1.5 3H11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h.5l-1.5 3H3v2h4a1 1 0 0 0 1-1v-2l1.5-3h3v2a1 1 0 0 0 1 1h5v-2h-1.5l1.5-3H20v2h-1z M14 9h-2V6h2v3zm-8 3H4V9h2v3zm11 5h-2v-3h2v3z" />
                  <circle cx="9" cy="18" r="3" />
                  <circle cx="17" cy="18" r="3" />
                  <path d="M5 21h14v2H5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-extrabold text-xl leading-tight tracking-tight text-white">HITECH<br/>ENGINEERING</h3>
              </div>
            </div>
            <p className="text-[14px] leading-relaxed text-gray-300 font-medium pr-4">
              Leading the industry with high-precision engineering solutions and robust industrial infrastructure projects worldwide.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-sm border border-white/20 shadow-sm">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-xs tracking-wider uppercase text-white">ISO 9001:2015 CERTIFIED</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6 md:pl-8">
            <h4 className="flex items-center gap-2 font-bold text-[11px] tracking-widest uppercase text-white">
              <span className="w-0.5 h-4 bg-white"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="font-semibold text-[15px] text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="font-semibold text-[15px] text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="font-semibold text-[15px] text-gray-300 hover:text-white transition-colors">Infrastructure</a></li>
              <li><a href="#" className="font-semibold text-[15px] text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-6">
            <h4 className="flex items-center gap-2 font-bold text-[11px] tracking-widest uppercase text-white">
              <span className="w-0.5 h-4 bg-white"></span>
              Contact Us
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Email</div>
                  <a href="mailto:contact@hitechengineering.works" className="font-semibold text-[15px] text-gray-300 hover:text-white transition-colors">
                    contact@hitechengineering.works
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Phone</div>
                  <div className="font-semibold text-[15px] text-gray-300">+91 98431 22885</div>
                  <div className="font-semibold text-[15px] text-gray-300">0422-2668885</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Headquarters */}
          <div className="space-y-6">
            <h4 className="flex items-center gap-2 font-bold text-[11px] tracking-widest uppercase text-white">
              <span className="w-0.5 h-4 bg-white"></span>
              Headquarters
            </h4>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-0.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <div className="font-semibold text-[15px] text-gray-300 leading-relaxed pr-4">
                Coimbatore, Tamil Nadu,<br/>India - 641032
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <a href="#" className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-sm hover:bg-white/10 transition-colors text-white">
                {/* LinkedIn Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-sm hover:bg-white/10 transition-colors text-white">
                {/* Facebook Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
      
      {/* Bottom Bar */}
      <div className="bg-black border-t border-white/10">
        <div className="max-w-container-max mx-auto px-gutter py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-semibold text-gray-400">
            © 2024 HITECH Engineering. All Rights Reserved. ISO 9001:2015 Certified Company.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
