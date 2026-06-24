export default function Clients() {
  const clients = [
    'bisleri.png', 'asian.png', 'mainetti.png', 'ups.png', 'vaya.png',
    'funskool.png', 'tasmac.png', 'ss.png', 'tgi.png', 'aht.png',
    'KH.png', 'spar.png', 'ual.png', 'sks.png', 'pachaiyappas-silks.png',
    'KUS.png', 'anthocyan.png', 'cape.png', 'magikwoods.png'
  ];

  // Duplicate the list so it scrolls seamlessly
  const doubledClients = [...clients, ...clients];

  return (
    <section className="bg-stark-white pt-16 pb-4 border-t border-outline-variant overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-10">
          <p className="font-label-caps text-[14px] text-on-surface-variant">They Always Trust Us</p>
          <h3 className="font-headline-lg text-[32px] text-on-surface mt-1">
            OUR CLIENTS<span className="text-industrial-yellow">.</span>
          </h3>
        </div>
        
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
              display: flex;
              width: max-content;
            }
            .marquee-container:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}
        </style>

        <div className="pb-6 pt-4 marquee-container overflow-hidden w-full relative">
          <div className="animate-marquee gap-16">
            {doubledClients.map((client, idx) => (
              <img
                key={idx}
                alt={client.split('.')[0]}
                className="h-20 md:h-24 w-auto object-contain flex-shrink-0"
                src={`https://motiequipments.com/assets/images/clients/${client}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
