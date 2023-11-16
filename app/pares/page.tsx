"use client";
import { VenezuelaCard } from "@/components/pares/ParesCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import DigitalBolivar from "@/components/pares/DigitalBolivar";
import PesoChileno from "@/components/pares/PesoChileno";
import { useRef } from "react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper/types";

const Pares = () => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <div className=" w-full space-y-5 xl:space-y-9 overflow-hidden">
      <h2 className="heading1">Pares</h2>

      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={false}
          modules={[FreeMode, Pagination]}
          className="relative z-40"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <VenezuelaCard />
          </SwiperSlide>
          <SwiperSlide>
            <VenezuelaCard />
          </SwiperSlide>
          <SwiperSlide>
            <VenezuelaCard />
          </SwiperSlide>
          <SwiperSlide>
            <VenezuelaCard />
          </SwiperSlide>
          <SwiperSlide>
            <VenezuelaCard />
          </SwiperSlide>
          <SwiperSlide>
            <VenezuelaCard />
          </SwiperSlide>
          <div className="flex  z-50 max-w-[110%]  mx-auto absolute left-0 right-0 top-[39%] items-center justify-between">
            <button
              className=" bg-silver_text-foreground w-12 h-12 flex items-center justify-center rounded-full"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaArrowLeft size={24} className="text-white" />
            </button>
            <button
              className=" bg-silver_text-foreground w-12 h-12 flex items-center justify-center rounded-full"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaArrowRight size={24} className="text-white" />
            </button>
          </div>
        </Swiper>
      </div>

      {/* ======= Bolívar Digital ======= */}
      <DigitalBolivar />

      {/* =========== Peso Chileno =========== */}
      <PesoChileno />
    </div>
  );
};

export default Pares;
