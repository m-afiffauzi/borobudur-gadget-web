import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { product } from "../data";

const ProductSlider = () => {
  const { types } = product;
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={32}
      grabCursor={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1048: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
    >
      {types.map((type) => {
        const { image, name } = type;
        return (
          <SwiperSlide
            key={name}
            className="max-w-xs h-50 relative border-2 border-neutral-500"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute left-5 bottom-5 bg-white h-6 px-3 flex items-center rounded-sm border-2 border-neutral-500">
              <div className="font-primary font-semibold text-sm text-neutral-500">
                {name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlider;
