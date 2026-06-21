export default function AboutSection() {
  return (
    <section className="border-y border-outline-variant bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-gutter py-section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6 group">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[2px] bg-industrial-yellow transition-all group-hover:w-20"></span>
              <h3 className="font-headline-lg text-[28px] text-on-surface">Our Mission</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              To empower industries with superior material handling equipment that enhances operational efficiency and safety through innovative design and manufacturing excellence.
            </p>
          </div>
          <div className="space-y-6 group">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[2px] bg-industrial-yellow transition-all group-hover:w-20"></span>
              <h3 className="font-headline-lg text-[28px] text-on-surface">Our Vision</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              To be the global leader in kinetic precision engineering, setting the benchmark for quality, reliability, and sustainability in the material handling industry.
            </p>
          </div>
          <div className="space-y-6 group">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[2px] bg-industrial-yellow transition-all group-hover:w-20"></span>
              <h3 className="font-headline-lg text-[28px] text-on-surface">Our Strategy</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Focusing on R&D, strategic partnerships, and customer-centric solutions to deliver high-impact engineering assets that solve complex logistical challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
