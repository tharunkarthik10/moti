import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

export default function FeaturedSolutions() {
  const services = [
    {
      title: 'Motor Gear Box',
      desc: 'Moti Equipments is a prime dealer of Motor & Gear Boxes. We have a wide range of brands all in ready stock & can be delivered immediately.',
      img: 'https://motiequipments.com/assets/images/services/motors.jpg',
    },
    {
      title: 'Wheel',
      desc: 'Moti Equipment deals with all kind of MHE Wheels, all sizes of wheels are readily available at a very affordable price.',
      img: 'https://motiequipments.com/assets/images/services/wheels.jpg',
    },
    {
      title: 'Rollers & Pulleys',
      desc: 'Moti Equipments have their own in-house team who manufacture Rollers, Pulleys & Idlers for their own equipment purposes & sales as spares. The quality & performance is top notch.',
      img: 'https://motiequipments.com/assets/images/services/rollers.jpg',
    },
    {
      title: 'Conveyor Belts',
      desc: 'Moti Equipment is a major dealer & Stockist of all kinds of conveyor belts. We have ready stock goods available of all standard & non-standard sizes.',
      img: 'https://motiequipments.com/assets/images/services/conveyor.jpg',
    },
    {
      title: 'Bearings',
      desc: 'Moti Equipment is a major dealer & Stockist of all kinds & all brands of bearings. We have ready stock goods available of all standard sizes.',
      img: 'https://motiequipments.com/assets/images/services/bearings.jpg',
    },
  ];

  return (
    <section className="bg-stark-white py-section-padding border-y border-outline-variant">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
          <div className="space-y-4 max-w-3xl">
            <h2 className="font-headline-xl text-[36px] md:text-[48px] text-on-surface uppercase tracking-wide font-bold leading-tight">
              Industrial Material<br />Handling Solutions<span className="text-industrial-yellow">.</span>
            </h2>
            <p className="font-body-md text-[16px] text-on-surface-variant italic">
              Apart From MHE Manufacturing, Moti Equipments deals in supply of all kind of conveyor equipment spare sales & services.
            </p>
          </div>
          <div className="flex gap-4 items-center mt-6 lg:mt-0">
            <button className="feat-prev w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-[#5F6B76] hover:text-white transition-all rounded-full disabled:opacity-50">
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button className="feat-next w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-[#5F6B76] hover:text-white transition-all rounded-full disabled:opacity-50">
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Mousewheel, FreeMode]}
          slidesPerView={1}
          spaceBetween={40}
          freeMode={true}
          speed={800}
          mousewheel={{ forceToAxis: true, sensitivity: 1, releaseOnEdges: true }}
          navigation={{
            nextEl: '.feat-next',
            prevEl: '.feat-prev',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="servicesSwiper overflow-visible cursor-grab active:cursor-grabbing"
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx} className="bg-stark-white flex flex-col group overflow-hidden">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-6 pb-2 px-2 flex flex-col flex-grow">
                <h3 className="font-label-caps text-[16px] font-bold text-on-surface uppercase mb-3">
                  {service.title}
                </h3>
                <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
