import Partners from './Partners';

export default function Testimonials() {
  return (
    <>
      <section className="bg-surface-bone pt-12 pb-section-padding">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="font-status-code text-status-code text-primary uppercase">FEEDBACK_LOOP</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
              TESTIMONIALS<span className="text-industrial-yellow">.</span>
            </h2>
            <p className="font-body-md text-on-surface-variant mt-2">What People Say?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-stark-white p-10 border border-outline-variant relative group hover:border-industrial-yellow transition-colors shadow-sm">
              <div className="absolute -top-6 left-10 w-12 h-12 bg-industrial-yellow flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface text-[24px]">format_quote</span>
              </div>
              <p className="font-body-md text-on-surface-variant mb-8 italic">
                "The company's experts have accumulated valuable experience in green development, being savvy to all aspects of the certification process and requirements."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-high rounded-full overflow-hidden border border-outline-variant">
                  <img alt="S P Mohan Kumar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLs11IZLYLXXVfCVVY7qfvuj_mv0CW2iUrQhvEIx8YwZETQm3P_R9fkP3iwhM_q_H2inycPV4hBqbw47WFqZ9Lpc3J2-eaNrxUPhc0MSFk5G1zCpyJPlqL4ANgeHxgvDUy9j4inWVqwiYdMC4oK2ATz4YjZg0cxzb3qSu2DFFx1jY6YHYDrgNEzi4W2p7VG9Iz4vAu6vjbj5hw0LgTTYd8D-BkezXqAj7vh8AxVTEjj1CKXqaVu39ilUWrg" />
                </div>
                <div>
                  <h4 className="font-label-caps text-on-surface">S P Mohan Kumar</h4>
                  <p className="font-status-code text-primary">CEO</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-stark-white p-10 border border-outline-variant relative group hover:border-industrial-yellow transition-colors shadow-sm">
              <div className="absolute -top-6 left-10 w-12 h-12 bg-industrial-yellow flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface text-[24px]">format_quote</span>
              </div>
              <p className="font-body-md text-on-surface-variant mb-8 italic">
                "The skills of our project managers are attested by international certificates from leading overseas professional associations in the realm of construction."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-high rounded-full overflow-hidden border border-outline-variant">
                  <img alt="Habaza" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLuCRESEs28x_bnEPyAtpBjgesImXU43zahkAA67wVBa3XquHRPhu8UH3ckEixwLfEoAKXvW_AG3IEol3ZUO3h6zEU0wRh910pezZ8feReFDBGvdMcdE4_8pPXkw8sBTY-GxW76T16FeYFBD1_hde9SEOLcDnhwuAxYERhfzgZCF8arHDNGKHPg8WBVq2Nasgw-3AoVh1QJdRdeKQcY5zIdUVvA6SBtEd2fO-E01oP5G4Kl6XQ6K0ICxmw" />
                </div>
                <div>
                  <h4 className="font-label-caps text-on-surface">Habaza</h4>
                  <p className="font-status-code text-primary">Civil Engineer</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-stark-white p-10 border border-outline-variant relative group hover:border-industrial-yellow transition-colors shadow-sm">
              <div className="absolute -top-6 left-10 w-12 h-12 bg-industrial-yellow flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface text-[24px]">format_quote</span>
              </div>
              <p className="font-body-md text-on-surface-variant mb-8 italic">
                "Yellow Hats Group carries out full-cycle development, including the attraction of investments, construction and managing premium residential properties."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-high rounded-full overflow-hidden border border-outline-variant">
                  <img alt="Fouad Badawy" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLuA5yJUcpXhOIvliE_lZHASEfgSiC6xtS5nJhwgVL887wI4QTW0-xszdN60zlfZ93TV5V35KlaVVQPZK7enkZ3erL3ub3FHwb8VBg5L_kWs6_Rp1m29XaDNagcVmEqd1wrp2uaQkHX_XfpYb5CVu5KIV9fDVJ3PqZTf3nTS5o6PKw7NF9PENrgLdUkeJFQ_fvz97mgexODQrP9bMFUJPGA5osEHCsVwKx3-DB4B12QJM1wEIuokI5riSQ" />
                </div>
                <div>
                  <h4 className="font-label-caps text-on-surface">Fouad Badawy</h4>
                  <p className="font-status-code text-primary">Investor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Partners />

      {/* CTA Section */}
      <section className="bg-surface-bone py-24 border-t border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter text-center space-y-8">
          <h2 className="font-headline-xl text-headline-xl text-on-surface">Ready for Kinetic Precision?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Consult with our engineering team to design a custom logistics framework tailored to your facility's specific demands.
          </p>
          <button className="bg-on-surface text-stark-white px-12 py-5 font-label-caps text-label-caps hover:bg-primary transition-all duration-300">
            Consult Engineering Team
          </button>
        </div>
      </section>
    </>
  );
}
