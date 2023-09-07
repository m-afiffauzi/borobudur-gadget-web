/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ReviewSlider = ({ testimonials }) => {
  return (
    <Swiper
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={32}
      grabCursor={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
          centeredSlides: false,
        },
      }}
      modules={[]}
    >
      {testimonials.map((testimonial, index) => {
        const { background, image, name, message } = testimonial;
        return (
          <SwiperSlide key={index}>
            <div className="relative">
              {/* background */}
              <div>
                <img src={background} alt="Review Background" />
              </div>
              {/* image */}
              <div className="absolute w-full top-[70px] flex justify-center items-center">
                <img
                  src={image}
                  alt="User"
                  className="h-24 w-24 bg-cover bg-center bg-no-repeat rounded-full"
                />
              </div>
              {/* name & message */}
              <div className="absolute bottom-[70px] text-white p-[20px] text-center">
                <div className="mb-8 italic text-lg font-light">{message}</div>
                <div className="flex items-center justify-center gap-x-[3px]">
                  <span className="text-[30px] text-primary-200 font-bold">
                    ~
                  </span>
                  <div className="text-[20px] font-bold">{name}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReviewSlider;
