export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-stark-white/90 backdrop-blur-md z-50 border-b border-outline-variant transition-all duration-300">
      <nav className="flex justify-between items-center px-gutter h-20 max-w-container-max mx-auto">
        <a href="/" className="flex items-center gap-3">
          <img 
            src="/hitech_logo.png" 
            alt="Hitech" 
            className="h-[63px] md:h-[81px] w-auto max-w-none flex-shrink-0 object-contain drop-shadow-sm brightness-105"
          />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a
            className="font-body-md text-body-md text-primary border-b-2 border-industrial-yellow pb-1 transition-all"
            href="#"
          >
            Home
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors relative nav-underline-effect"
            href="#"
          >
            About
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors relative nav-underline-effect"
            href="#"
          >
            Products
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors relative nav-underline-effect"
            href="#"
          >
            Blog
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors relative nav-underline-effect"
            href="#"
          >
            Contact
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors relative nav-underline-effect flex items-center gap-1"
            href="#"
          >
            <span className="material-symbols-outlined text-[16px]">person</span> Login
          </a>
        </div>
        <button className="bg-[#5F6B76] text-white px-6 py-2 font-label-caps text-label-caps hover:bg-[#4a555e] border-b-4 border-primary hover:translate-y-[-2px] transition-transform duration-200">
          Request Quote
        </button>
      </nav>
    </header>
  );
}
