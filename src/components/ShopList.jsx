/* eslint-disable react/prop-types */
import { useState } from "react";

const ShopList = ({ shops }) => {
  const [index, setIndex] = useState(1);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto gap-y-4">
      {shops.map((shop, currentIndex) => {
        const { name, image, href, delay } = shop;
        return (
          <div
            onClick={() => setIndex(currentIndex)}
            key={currentIndex}
            className="w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay={delay}
          >
            <div
              className={`${
                currentIndex === index
                  ? "bg-neutral-500 text-white"
                  : "bg-neutral-400/10 text-neutral-500"
              } flex justify-center items-center py-[40px] px-[30px] transition duration-100`}
            >
              <div className="flex flex-col items-center justify-center gap-4">
                {/* name */}
                <div
                  className={`${
                    currentIndex === index
                      ? "bg-white text-neutral-500"
                      : "bg-neutral-500 text-white"
                  } h-10 text-lg font-primary font-semibold min-w-min px-3 flex justify-center items-center`}
                >
                  {name}
                </div>
                {/* image */}
                <img src={image} alt="shop" className="h-64 md:h-96" />
                {/* button */}
                <a href={href} rel="noreferrer" target="_blank">
                  <button
                    className={`${
                      currentIndex === index ? "bg-white" : "bg-black"
                    } btn btn-lg rounded-sm group [transform:translateZ(0)] px-6 py-3overflow-hidden relative before:absolute before:bg-primary-200 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out before:duration-300`}
                  >
                    <span
                      className={`${
                        currentIndex === index
                          ? "text-neutral-500 group-hover:text-white"
                          : "text-white group-hover:text-neutral-500"
                      } relative z-0 transition ease-in-out duration-300`}
                    >
                      Kunjungi Toko
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopList;
