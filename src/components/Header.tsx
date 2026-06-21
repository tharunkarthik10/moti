export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-stark-white/90 backdrop-blur-md z-50 border-b border-outline-variant transition-all duration-300">
      <nav className="flex justify-between items-center px-gutter h-20 max-w-container-max mx-auto">
        <a href="/" className="flex items-center gap-3">
          <img 
            src="/arrow.png" 
            alt="Moti" 
            className="h-[42px] md:h-[54px] w-auto object-contain contrast-125 saturate-110 drop-shadow-sm brightness-105"
          />
          <img 
            src="/text.png" 
            alt="Equipments" 
            className="h-14 md:h-[72px] w-auto object-contain contrast-125 saturate-110 drop-shadow-sm brightness-105"
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
            Our Projects
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
        <button className="bg-industrial-yellow text-on-surface px-6 py-2 font-label-caps text-label-caps border-b-4 border-primary hover:translate-y-[-2px] transition-transform duration-200">
          Request Quote
        </button>
      </nav>
    </header>
  );
}
