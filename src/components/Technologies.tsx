import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

export default function Technologies() {
  const assets = [
    { id: 'STR-P-01', title: 'Manual Pallet Jack', img: 'https://motiequipments.com/assets/images/shop/grid/palette-1.jpg', price: '$299', spec: '2.5 Ton Capacity, Polyurethane Wheels' },
    { id: 'FLX-R-02', title: 'Flexible Roller Conveyor', img: 'https://motiequipments.com/assets/images/shop/grid/flex-2.jpg', price: '$850', spec: 'Expandable up to 24ft, Steel Rollers' },
    { id: 'INC-C-04', title: 'Inclined Conveyor Belt', img: 'https://motiequipments.com/assets/images/shop/grid/truck-2.jpg', price: '$1,200', spec: 'Adjustable Angle, High Grip Belt' },
    { id: 'ACR-R-08', title: 'Accordion Roller', img: 'https://motiequipments.com/assets/images/shop/grid/flex-1.jpg', price: '$940', spec: 'Curvable up to 180°, Heavy Duty' },
    { id: 'MOD-C-10', title: 'Modular Conveyor System', img: 'https://motiequipments.com/assets/images/shop/grid/truck-1.jpg', price: '$2,100', spec: 'Customizable Length, 1HP Motor' },
    { id: 'ERS-M-03', title: 'Electric Reach Stacker', img: 'https://motiequipments.com/assets/images/shop/grid/palette-3.jpg', price: '$3,400', spec: '1.5 Ton Capacity, 24V Battery' },
    { id: 'SCL-P-07', title: 'Scissor Lift Platform', img: 'https://motiequipments.com/assets/images/shop/grid/scissor.jpg', price: '$2,800', spec: '30ft Max Height, 500lb Load' },
    { id: 'HMS-L-12', title: 'Heavy Manual Stacker', img: 'https://motiequipments.com/assets/images/shop/grid/manual-hand-stacker.jpg', price: '$750', spec: '1 Ton Capacity, Hydraulic Pump' },
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
            <button className="tech-prev w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-[#5F6B76] hover:text-white transition-all rounded-full disabled:opacity-50">
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button className="tech-next w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-[#5F6B76] hover:text-white transition-all rounded-full disabled:opacity-50">
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
              className="group border border-outline-variant p-2 hover:border-transparent transition-all duration-300 h-auto flex flex-col bg-stark-white relative overflow-hidden cursor-pointer"
            >
              <div className="overflow-hidden aspect-square flex items-center justify-center p-4 relative">
                <img
                  alt={asset.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-all duration-500"
                  src={asset.img}
                />
              </div>
              <div className="mt-4 px-2 pb-2 flex-grow transition-opacity duration-300 group-hover:opacity-0">
                <span className="font-status-code text-status-code text-outline-muted">{asset.id}</span>
                <h3 className="font-label-caps text-label-caps mt-1">{asset.title}</h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#00AEEF]/60 backdrop-blur-[2px] text-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-center items-center p-6 text-center z-10 -translate-y-full group-hover:translate-y-0">
                <h3 className="font-label-caps text-lg font-bold mb-2 uppercase tracking-wide">{asset.title}</h3>
                <div className="w-8 h-1 bg-gray-900 mb-4 rounded-full"></div>
                <p className="font-body-md text-sm mb-4 opacity-90 leading-relaxed font-medium">{asset.spec}</p>
                <p className="font-headline-md font-bold text-xl">{asset.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
