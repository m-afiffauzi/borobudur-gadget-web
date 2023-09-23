import { IoIosArrowDroprightCircle } from "react-icons/io";

/* eslint-disable react/prop-types */
const ShopList = ({ shops }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl mx-auto gap-y-8">
      {shops.map((shop, currentIndex) => {
        const { name, image, href, delay } = shop;
        return (
          <div
            key={currentIndex}
            className="w-full max-w-[400px] md:max-w-[500px] rounded-sm px-4"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay={delay}
          >
            <div
              className={`bg-neutral-500 text-white flex justify-center items-center p-[10px] rounded-sm transition duration-100`}
            >
              <div className="flex flex-col items-center justify-center gap-2">
                {/* name */}
                <div
                  className={`bg-white text-neutral-500 h-10 text-lg font-primary font-semibold w-full rounded-sm flex justify-center items-center`}
                >
                  {name}
                </div>
                {/* image */}
                {/* button */}
                <a
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                  className="w-[210px] lg:w-[300px] relative group"
                >
                  <img src={image} alt="shop" className="rounded-sm" />
                  <div className="absolute flex items-center justify-center bottom-0 w-full h-10 bg-neutral-500/70 group-hover:bg-neutral-500/90 group-hover:h-full transition-all ease-in duration-200">
                    <p className="flex items-center gap-x-2 font-bold group-hover:text-primary-200 transition-all ease-in duration-200">
                      Buka {name}
                      <IoIosArrowDroprightCircle className="hidden text-2xl group-hover:block transition-all ease-in duration-200" />
                    </p>
                  </div>
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
