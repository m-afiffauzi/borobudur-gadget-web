import { banner } from "../data";

const Banner = () => {
  const { titlePart1, titlePart2, subtitle, textBtn } = banner;
  return (
    <section id="banner" className="bg-neutral-500 h-[820px]">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full relative -space-x-48 lg:-space-x-24">
          {/* text */}
          <div className="text-white flex-1 z-10 pl-6 lg:pl-0">
            <h1
              className="h1 text-white mb-8"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {titlePart1} <br />
              <span className="text-primary-200">{titlePart2}</span>
            </h1>
            <p
              className="max-w-[415px] text-body-md lg:text-body-lg mb-8"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {subtitle}
            </p>
            <a href="#shop" data-aos="fade-down" data-aos-delay="700">
              <button className="bg-white btn-sm lg:btn-lg rounded-sm group [transform:translateZ(0)] px-6 py-3overflow-hidden relative before:absolute before:bg-primary-200 before:bottom-0 before:left-0 before:h-full before:w-full before:rounded-sm before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out before:duration-300">
                <span className="text-neutral-500 group-hover:text-white relative z-0 transition ease-in-out duration-300">
                  {textBtn}
                </span>
              </button>
            </a>
          </div>
          {/* image */}
          <div
            className="bg-blue-300 w-full h-full bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1"
            data-aos="fade-right"
            data-aos-delay="900"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
