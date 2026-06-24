import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

export default function Technologies() {
  const assets = [
    { id: 'STR-P-01', title: 'Manual Pallet Jack', img: 'https://motiequipments.com/assets/images/shop/grid/palette-1.jpg' },
    { id: 'FLX-R-02', title: 'Flexible Roller Conveyor', img: 'https://motiequipments.com/assets/images/shop/grid/flex-2.jpg' },
    { id: 'INC-C-04', title: 'Inclined Conveyor Belt', img: 'https://motiequipments.com/assets/images/shop/grid/truck-2.jpg' },
    { id: 'ACR-R-08', title: 'Accordion Roller', img: 'https://motiequipments.com/assets/images/shop/grid/flex-1.jpg' },
    { id: 'MOD-C-10', title: 'Modular Conveyor System', img: 'https://motiequipments.com/assets/images/shop/grid/truck-1.jpg' },
    { id: 'ERS-M-03', title: 'Electric Reach Stacker', img: 'https://motiequipments.com/assets/images/shop/grid/palette-3.jpg' },
    { id: 'SCL-P-07', title: 'Scissor Lift Platform', img: 'https://motiequipments.com/assets/images/shop/grid/scissor.jpg' },
    { id: 'HMS-L-12', title: 'Heavy Manual Stacker', img: 'https://motiequipments.com/assets/images/shop/grid/manual-hand-stacker.jpg' },
  ];

  return (
    <section className="bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-gutter pt-8 pb-section-padding">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <span className="font-status-code text-status-code text-primary uppercase">CATALOG_01</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Core Engineering Assets</h2>
          </div>
          <div className="flex gap-4 items-center">
            <button className="tech-prev w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-industrial-yellow transition-all rounded-full disabled:opacity-50">
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button className="tech-next w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-industrial-yellow transition-all rounded-full disabled:opacity-50">
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Mousewheel, FreeMode]}
          slidesPerView={1}
          spaceBetween={24}
          freeMode={true}
          speed={800}
          mousewheel={{ forceToAxis: true, sensitivity: 1, releaseOnEdges: true }}
          navigation={{
            nextEl: '.tech-next',
            prevEl: '.tech-prev',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper overflow-visible"
        >
          {assets.map((asset, idx) => (
            <SwiperSlide
              key={idx}
              className="group border border-outline-variant p-2 hover:border-industrial-yellow transition-all duration-300 h-auto flex flex-col bg-stark-white"
            >
              <div className="overflow-hidden aspect-square flex items-center justify-center p-4 relative">
                <img
                  alt={asset.title}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  src={asset.img}
                />
              </div>
              <div className="mt-4 px-2 pb-2 flex-grow">
                <span className="font-status-code text-status-code text-outline-muted">{asset.id}</span>
                <h3 className="font-label-caps text-label-caps mt-1">{asset.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
